<template>
  <section class="nav-section">
    <div class="navbar">
      <div class="nav-left">
        <div class="logo-container">
          <img class="logo" src="../assets/new.png" alt="logo" />
          <div class="logo-text">
            <h1>Sauharda Bajracharya</h1>
            <span>Front-End Developer</span>
          </div>
        </div>
      </div>
      <div class="nav-mid">
        <div class="nav-active-indicator" :class="activeIndicatorClass"></div>
        <div class="nav-pill">
          <router-link
            to="/"
            class="nav-link"
            :class="{ active: activeLink === 'projects' }"
            @click.native="setActive('projects'), scrollToTop()"
          >
            <span class="projects">Projects</span>
          </router-link>
          <router-link
            to="/about"
            class="nav-link"
            :class="{ active: activeLink === 'about' }"
            @click.native="setActive('about'), scrollToTop()"
          >
            <span class="about">About</span>
          </router-link>
        </div>
      </div>
      <div class="nav-right">
        <div class="burger-menu" @click="toggleMenu">
          <span :class="{ rotated: isRotated }">
            <svg
              v-if="!menuActive"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 128 128"
            >
              <path
                fill="#fff"
                d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"
              ></path>
              <path
                fill="#0b1215"
                d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"
              ></path>
              <g>
                <path
                  fill="#0b1215"
                  d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"
                ></path>
              </g>
            </svg>
            <!-- Else -->
            <img
              v-else
              :class="{ rotated: isRotated }"
              class="close-menu"
              src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/645a01ff46a1cf3d85d90049_icon-close.svg"
              alt="close"
            />
          </span>
        </div>
        <div class="nav-socials">
          <a
            href="mailto:sauharda.bajracharya12@gmail.com"
            target="_blank"
            class="nav-social-link"
          >
            <span class="contact">Contact</span>
            <img
              src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
              alt="->"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sauharda-bajracharya-2026872b6/"
            target="_blank"
            class="nav-social-link"
          >
            <span class="linkedin">LinkedIn</span>
            <img
              src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
              alt="->"
            />
          </a>
        </div>
      </div>
    </div>
    <div v-if="menuActive" class="mobile-nav">
      <div class="mobile-nav-pill">
        <a
          href="mailto:sauharda.bajracharya12@gmail.com"
          target="_blank"
          class="mobile-link"
        >
          <span class="contact">Contact &nbsp;&nbsp;</span>
          <img
            src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
            alt="->"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sauharda-bajracharya-2026872b6/"
          target="_blank"
          class="mobile-link"
        >
          <span class="linkedin">LinkedIn &nbsp;</span>
          <img
            src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
            alt="->"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeLink: "projects",
      menuActive: false,
      isRotated: false,
    };
  },
  computed: {
    activeIndicatorClass() {
      return {
        "margin-right-90": this.activeLink === "projects",
        "margin-left-90": this.activeLink === "about",
      };
    },
  },
  watch: {
    $route(to) {
      this.setActiveByRoute(to.path);
    },
  },
  methods: {
    setActive(link: string) {
      this.activeLink = link;
      this.menuActive = false;
    },
    setActiveByRoute(path: string) {
      if (path.includes("/about")) {
        this.activeLink = "about";
      } else {
        this.activeLink = "projects";
      }
    },
    toggleMenu() {
      setTimeout(() => {
        this.menuActive = !this.menuActive;
        this.isRotated = !this.isRotated;
      }, 120);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.setActiveByRoute(this.$route.path);
  },
};
</script>

<style scoped lang="scss">
.nav-section {
  z-index: 10;
  background-image: rgba(0, 0, 0, 0.4);
  height: 168px;
  padding: 24px 48px 0 48px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.navbar {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
}

.nav-left {
  flex: 1;
  display: flex;
  align-items: center;
  height: 56px;

  .logo-container {
    display: flex;
    align-items: center;
    gap: 14px;

    .logo {
      height: 56px;

      // Tablets
      @media screen and (max-width: 896px) {
        height: 54px;
      }

      // Phones
      @media screen and (min-width: 568px) and (max-width: 768px) {
        height: 52px;
      }

      // Small phones
      @media screen and (min-width: 396px) and (max-width: 568px) {
        height: 54px;
      }

      // Extra small phones
      @media screen and (max-width: 396px) {
        height: 54px;
      }

      // Extra Extra small phones
      @media screen and (max-width: 319px) {
        display: none;
      }
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: center;
      color: var(--alternate-color);
      font-family: "PP Neue Montreal";

      h1 {
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.2px;

        // Tablets
        @media screen and (max-width: 896px) {
          font-size: 16px;
          line-height: 16px;
        }

        // Phones
        @media screen and (min-width: 568px) and (max-width: 768px) {
          font-size: 16px;
          line-height: 16px;
        }

        // Small phones
        @media screen and (min-width: 396px) and (max-width: 568px) {
          display: none;
        }

        // Extra small phones
        @media screen and (max-width: 396px) {
          display: none;
        }
      }

      span {
        color: rgba(255, 255, 255, 0.7);
        font-size: 13px;
        line-height: 13px;
        letter-spacing: 0.2px;
        font-weight: 200;
        margin-top: -4px;

        // Tablets
        @media screen and (max-width: 896px) {
          font-size: 12px;
          line-height: 12px;
        }

        // Phones
        @media screen and (min-width: 568px) and (max-width: 768px) {
          font-size: 12px;
          line-height: 12px;
        }

        // Small phones
        @media screen and (min-width: 396px) and (max-width: 568px) {
          display: none;
        }

        // Extra small phones
        @media screen and (max-width: 396px) {
          display: none;
        }
      }
    }
  }

  // Mid Phones
  @media screen and (max-width: 396px) {
    margin-left: -18px;
  }

  // Smaller Phones
  @media screen and (max-width: 364px) {
    margin-left: -22px;
  }
}

.nav-mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 56px;
  position: relative;
  font-family: "PP Neue Montreal";

  // Tablets
  @media screen and (min-width: 568px) and (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 90px;
    flex-direction: column;
  }

  // Phones
  @media screen and (min-width: 568px) and (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 90px;
    flex-direction: column;
  }

  // Small phones
  @media screen and (min-width: 396px) and (max-width: 568px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // Extra small phones
  @media screen and (max-width: 296px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nav-pill {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    height: 48px;
    padding: 0 6px;
    background-color: rgba(242, 242, 242, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(242, 242, 242, 0.1);
    border-radius: 24px;
    transition: box-shadow 1s cubic-bezier(0.23, 1, 0.32, 1),
      border 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

    .nav-link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 36px;
      color: var(--alternate-color);
      text-align: center;
      text-decoration: none;
      border-radius: 18px;
      transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
      font-size: 15px;

      &.active {
        background-color: rgba(242, 242, 242, 0.05);
        box-shadow: 0 0px 2px rgba(250, 250, 250, 0.15);
        transition: 0.3s all;
      }
    }
  }
}

.nav-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "PP Neue Montreal";

  .nav-socials {
    display: flex;
    gap: 8px;

    .nav-social-link {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 12px;
      height: 48px;
      text-decoration: none;
      border-radius: 24px;
      transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

      @media screen and (max-width: 768px) {
        display: none;
      }

      &:hover {
        background-color: rgba(242, 242, 242, 0.05);
      }

      img {
        max-width: 100%;
      }

      .contact,
      .linkedin {
        color: var(--alternate-color);
        line-height: 18px;
      }
    }
  }
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: relative;
  left: 24px;
  cursor: pointer;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  @media screen and (max-width: 568px) {
    display: flex;
    // position: absolute;
    justify-content: flex-end;
  }

  // Smaller Phones
  @media screen and (max-width: 364px) {
    left: 18px;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    color: var(--alternate-color);
    border: 2px solid aliceblue;
    border-radius: 50px;
    transition: transform 0.5s ease;
  }
}

.mobile-nav {
  position: fixed;
  width: 85%;
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  z-index: 1;
  font-family: "PP Neue Montreal";

  .mobile-nav-pill {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 120px;
    gap: 16px;
    flex-direction: column;
    background-color: rgba(242, 242, 242, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(242, 242, 242, 0.1);
    border-radius: 24px;
    transition: box-shadow 1s cubic-bezier(0.23, 1, 0.32, 1),
      border 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

    .mobile-link {
      display: flex;
      color: white;
      font-size: 15px;
      text-decoration: none;
    }
  }
}

.close-menu {
  width: 26px;
  height: 26px;
}

.rotated {
  transform: rotate(180deg);
  transition: transform 0.5s;
}

.nav-active-indicator {
  background-color: var(--alternate-color);
  border-radius: 2px;
  width: 24px;
  height: 4px;
  margin-bottom: -2px;
  box-shadow: 0 2px 25px 2px #fff;
}

.margin-right-90 {
  margin-right: 90px;
  transition: 0.12s all;
}

.margin-left-90 {
  margin-left: 90px;
  transition: 0.12s all;
}
</style>
