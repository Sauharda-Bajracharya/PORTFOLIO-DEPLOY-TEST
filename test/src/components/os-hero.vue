<template>
  <!-- Mobile Responsiveness -->
  <div class="mobile-resp-container">
    <span class="mobile-resp-title">
      <h1>Sauharda Bajracharya</h1>
      <span class="undertext">Front-End Developer // UX/UI Designer</span>
    </span>
  </div>

  <!-- ARCHIVED -->
  <div class="window-container">
    <div class="double-border">
      <div class="main-window">
        <div class="window-bar">
          <div class="window-buttons">
            <span class="button close"></span>
            <span class="button minimize"></span>
            <span class="button restore"></span>
          </div>
        </div>
        <!-- Content Start -->
        <div class="window-content">
          <div class="hero-section">
            <!-- Main Hero Section -->
            <div class="text-container">
              <div class="title">
                <span class="title-text">
                  Creating and Delivering
                  <span class="grad-text"> Interactive Experiences</span>
                </span>
                <span class="desc">
                  Front-End Developer and UX/UI Designer specialized in Websites
                  & Webapps.
                </span>
              </div>
            </div>
          </div>
          <!-- Content End -->
        </div>
      </div>
    </div>
  </div>

  <!-- ARCHIVED -->
</template>

<script>
export default {
  name: "os-hero",
};
</script>
<style scoped lang="scss">
.window-container {
  display: none;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 50vh;
  border-radius: 25px;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.001);
  scale: 1;
  animation: 0.8s scrollIn linear;
  animation-timeline: scroll();
  transform-origin: left;

  @keyframes scrollIn {
    to {
      scale: 1.01;
    }
  }

  @media screen and (max-width: 568px) {
    top: 90%;
    width: 90vw;
    height: 50vh;
  }

  @media screen and (min-width: 896px) and (max-width: 1206px) {
    width: 75vw;
  }

  @media screen and (min-width: 772px) and (max-width: 896px) {
    width: 80vw;
  }

  @media screen and (min-width: 568px) and (max-width: 772px) {
    width: 80vw;
    height: 70vh;
    animation-timeline: scroll();
  }

  .double-border {
    position: relative;
    padding: 6px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 25px;
      padding: 2px;
      background: linear-gradient(
        to bottom,
        rgba(242, 242, 242, 0.15),
        rgba(242, 242, 242, 0.0001)
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
    }
  }

  .main-window {
    position: relative;
    background-color: var(--primary-color);
    border: 1px solid rgba(242, 242, 242, 0.3);
    border-radius: 20px 20px 0 0;
    // box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1), 0 0 12px rgba(0, 0, 0, 0.4);
    height: 580px;
    border-bottom: 0;

    @media screen and (max-width: 458px) {
      height: 500px;
    }
  }

  .window-bar {
    background: linear-gradient(
      to right,
      rgba(252, 242, 255, 0.1),
      rgba(255, 252, 252, 0.2) 50%,
      rgba(252, 252, 242, 0.1)
    );
    background-color: #333533;
    width: 100%;
    height: 3rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    align-items: center;
    // box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  }

  .window-buttons {
    display: flex;
    gap: 0.5rem;
    margin-left: 1rem;

    .button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);

      &.close {
        background-color: #ff5f56;
        box-shadow: 0 0 6px rgba(255, 95, 86, 0.6);
      }

      &.minimize {
        background-color: #ffbd2e;
        box-shadow: 0 0 6px rgba(255, 189, 46, 0.6);
      }

      &.restore {
        background-color: #27c93f;
        box-shadow: 0 0 6px rgba(39, 201, 63, 0.6);
      }
    }
  }
}

@media screen and (max-width: 568px) {
  .window-container {
    .window-buttons {
      display: flex;
      gap: 0;
      margin: auto;

      .button {
        width: 24px;
        border-radius: 0;
        height: 8px;
        background-color: var(--primary-color) !important;
        box-shadow: none !important;

        &.close {
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
        }

        &.restore {
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
        }
      }
    }
  }
}

.mobile-resp-container {
  display: none;

  @media screen and (max-width: 568px) {
    display: flex;
    width: 100%;
    height: 400px;
    z-index: 99;
    background: linear-gradient(90deg, #101010, #161616, #101010);

    .mobile-resp-title {
      position: absolute;
      top: 140px;
      left: 48px;
      right: 48px;
      font-weight: 500;
      font-family: "PP Neue Montreal";

      h1 {
        background-image: -webkit-linear-gradient(56deg, #f0f0f0, #b2b2b2);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: hue 2s infinite linear;
        letter-spacing: 0.8px;

        @media screen and (max-width: 568px) {
          font-size: 26px;
        }

        @media screen and (max-width: 452px) {
          font-size: 28px;
        }

        @media screen and (max-width: 376px) {
          font-size: 24px;
        }

        @media screen and (max-width: 340px) {
          font-size: 21px;
        }
      }

      .undertext {
        color: rgba(255, 255, 242, 0.5);
        letter-spacing: 0.2px;
        font-size: 18px;
        font-weight: 400;
        position: absolute;
        margin-top: 4px;
        line-height: 1.3rem;

        @media screen and (max-width: 452px) {
          font-size: 16px;
        }

        @media screen and (max-width: 376px) {
          font-size: 15px;
        }

        @media screen and (max-width: 340px) {
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 438px) {
    height: 370px;
  }

  @media screen and (max-width: 328px) {
    height: 340px;
  }
}
</style>
