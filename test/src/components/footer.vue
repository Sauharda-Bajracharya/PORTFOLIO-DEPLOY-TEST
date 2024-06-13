<template>
  <footer class="footer">
    <span class="credits">
      Design Inspired by
      <a href="https://www.perryw.ca" target="_blank" class="perryw"
        >Perry Wang</a
      >
    </span>

    <div class="footer-container">
      <div class="footer-socials">
        <a href="#" class="footer-logo">
          <img src="../assets/new.png" alt="Sauharda" class="logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/sauharda-bajracharya-2026872b6/"
          target="_blank"
        >
          <img
            src="https://assets-global.website-files.com/605d01759b2d0182669e8304/60a4286e3708d21fd6a7af05_linkedin%20icon.svg"
            alt="LinkedIn"
            class="linkedin"
          />
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/sauharda_bajracharya/"
          target="_blank"
        >
          <img
            src="https://assets-global.website-files.com/605d01759b2d0182669e8304/60a428ed88bdb53d8bdf7d5b_ins%20icon.svg"
            alt="Instagram"
            class="instagram"
          />
        </a>
      </div>
    </div>
    <!-- Mail -->

    <a
      href="mailto:sauharda.bajracharya12@gmail.com"
      class="mail"
      target="_blank"
      >sauharda.bajracharya12@gmail.com</a
    >
    <span class="copyright">&copy; 2024 Sauharda Bajracharya</span>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  width: 100%;
  height: 16rem;
  background-color: var(--primary-color);
  border-top: 2px solid #2b2b2b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 1rem;

  .credits {
    position: absolute;
    font-family: "PP Neue Montreal";
    left: 8rem;
    color: var(--alternate-color);
    font-size: 1.125rem;

    .perryw {
      color: rgba(242, 242, 242, 0.5);
      text-decoration: none;
    }
  }

  .copyright {
    position: absolute;
    font-family: "PP Neue Montreal";
    top: 148px;
    left: 8rem;
    color: var(--alternate-color);
    font-size: 1.125rem;
  }

  .footer-container {
    text-align: center;

    .footer-socials {
      display: flex;
      gap: 1.5rem;
      align-items: center;

      .footer-logo {
        .logo {
          width: 100%;
          height: 64px;
        }
      }

      .linkedin,
      .instagram {
        width: 28px;
        height: 28px;
        transition: 0.2s ease-in-out;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  .mail {
    position: absolute;
    bottom: 60px;
    text-align: center;
    text-decoration: none;
    color: var(--alternate-color);
    font-family: "PP Neue Montreal";
    font-size: 1.125rem;
    transition: 0.2s ease-in;

    &:hover {
      color: rgba(242, 242, 242, 0.5);
    }
  }

  @media screen and (max-width: 1200px) {
    .credits,
    .copyright {
      left: 4rem;
    }
  }

  @media screen and (max-width: 1068px) {
    .credits,
    .copyright {
      left: 2rem;
    }
  }

  @media screen and (max-width: 916px) {
    height: 18rem;

    .credits {
      position: relative;
      left: 0;
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .copyright {
      position: relative;
      top: auto;
      left: 0;
      text-align: center;
      margin-top: 0.5rem;
    }
    .mail {
      position: relative;
      bottom: auto;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    background: linear-gradient(90deg, #101010, #161616, #101010);

    .credits,
    .copyright,
    .mail {
      font-size: 1rem;
    }
    .footer-socials {
      gap: 1rem;
      .footer-logo .logo {
        height: 40px;
      }
      .linkedin,
      .instagram {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
