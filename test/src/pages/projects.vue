<template>
  <Hero-section />
  <Os-hero />
  <div class="projects-container" id="projects">
    <div class="projects-main">
      <div class="projects-header">
        <span class="works">Selected Works </span>
        <span class="arrow"> <a href="#projects">↓</a></span>
      </div>
      <div class="projects-body">
        <div class="project">
          <!-- DP Esports Start -->
          <div class="dp-esports">
            <a href="https://dpesports.netlify.app" target="_blank">
              <div class="dp-esports-body proj-div">
                <div class="project-image">
                  <img src="../assets/dp.png" alt="DP Esports" />
                </div>
              </div>
              <div class="title-text">DP Esports</div>
              <div class="title-desc">
                Official website for DP Esports Valorant team
              </div>
            </a>
          </div>
          <!-- DP Esports End -->

          <!--  Vehicle Dynamics Start -->
          <div class="vehicle-dynamics">
            <a href="https://vehicle-dynamics.netlify.app" target="_blank">
              <div class="vehicle-dynamics-body proj-div">
                <div class="project-image">
                  <img src="../assets/vd.png" alt="Vehicle Dynamics" />
                </div>
              </div>
              <div class="title-text">Vehicle Dynamics: A Simulation Demo</div>
              <div class="title-desc">
                A Simulation Demo explaining the mechanics of Vehicle Dynamics
              </div>
            </a>
          </div>
          <!--  Vehicle Dynamics End -->

          <!--  Interactive Periodic Table Start -->
          <div class="periodic-table">
            <a href="https://interactive-p-table.netlify.app" target="_blank">
              <div class="periodic-table-body proj-div">
                <div class="project-image">
                  <img src="../assets/ip.png" alt="Vehicle Dynamics" />
                </div>
              </div>
              <div class="title-text">Interactive Periodic Table</div>
              <div class="title-desc">An interactive Periodic Table</div>
            </a>
          </div>
          <!--  Interactive Periodic Table -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "../components/hero-section.vue";
import OsHero from "../components/os-hero.vue";

export default {
  name: "Projects",

  components: {
    HeroSection,
    OsHero,
  },
};
</script>

<style scoped lang="scss">
.projects-container {
  width: 100%;
  height: auto;
  background: var(--primary-color);
  border-top: 2px solid #2b2b2b;
  margin: 0;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }

  @media screen and (max-width: 568px) {
    background: linear-gradient(90deg, #101010, #161616, #101010);
    margin: 0;
  }

  .projects-main {
    font-family: "PP Neue Montreal";
    color: var(--alternate-color);

    .projects-header {
      display: none;

      .arrow {
        margin-left: 10px;
        font-size: 1.75rem;
        animation: arrow 2s infinite;

        a {
          text-decoration: none;
          color: var(--alternate-color);
          transition: 0.5s all ease-in-out;
        }

        @keyframes arrow {
          0% {
            transform: translateY(-5px);
          }

          50% {
            transform: translateY(-2px);
          }
          100% {
            transform: translateY(-5px);
          }
        }
      }

      @media screen and (max-width: 568px) {
        display: flex;
        font-size: 1.125rem;
        margin-left: 10vw;
        margin-top: 10px;
        font-weight: 500;
      }
    }

    .projects-body {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 145px;

      @media screen and (max-width: 1364px) {
        margin-top: 80px;
      }

      @media screen and (max-width: 768px) {
        margin-top: 30px;
        flex-direction: column;
      }

      .project {
        cursor: pointer;

        .proj-div {
          width: 60rem;
          background: linear-gradient(190deg, #282828, #101010);
          border-radius: 8px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.15rem;
          outline: 2px solid #2b2b2b;
          overflow: hidden;

          @media screen and (max-width: 1196px) {
            width: 80vw;
          }

          @media screen and (max-width: 768px) {
            padding: 0.05rem;
          }
        }

        .project-image {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 30px 40px 5px rgba(0, 0, 0, 0.25);
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.02);
            }
          }
        }
      }

      .title-text {
        color: var(--alternate-color);
        line-height: 1.1;
        font-size: 1.5rem;
        font-weight: normal;
        letter-spacing: 0;
        text-shadow: 0 -2px 10px rgba(255, 255, 255, 0.2);
        align-self: flex-start;
        margin-top: 1.75rem;

        @media screen and (min-width: 968px) and (max-width: 1196px) {
          font-size: 2vw;
        }

        @media screen and (max-width: 968px) {
          font-size: 2.25vw;
        }

        @media screen and (max-width: 768px) {
          margin-top: 1rem;
          font-size: 2.5vw;
        }

        @media screen and (max-width: 568px) {
          font-size: 3vw;
        }

        @media screen and (max-width: 468px) {
          font-size: 3.25vw;
        }
      }

      .title-desc {
        color: rgba(245, 245, 245, 0.6);
        line-height: 1.25;
        max-width: 700px;
        margin: 3px 0 0 0;
        font-size: 1.125rem;
        letter-spacing: 0.25px;
        align-self: flex-start;
        margin-bottom: 80px;

        @media screen and (min-width: 968px) and (max-width: 1196px) {
          font-size: 1.5vw;
        }

        @media screen and (max-width: 968px) {
          font-size: 1.75vw;
        }

        @media screen and (max-width: 768px) {
          font-size: 2vw;
          margin-bottom: 60px;
        }

        @media screen and (max-width: 568px) {
          font-size: 2.5vw;
          margin-bottom: 60px;
        }

        @media screen and (max-width: 468px) {
          font-size: 2.75vw;
        }
      }
    }
  }
}

a {
  text-decoration: none;
}
</style>
