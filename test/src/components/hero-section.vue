<template>
  <!-- Main Hero Section -->
  <div class="text-container">
    <div class="title">
      <span class="title-text">
        <span class="mobile-hide">Kathmandu based developer</span> crafting
        <span class="bruh"> <br /></span> &
        <span class="mobile-hide">creating unique stories by </span>delivering
        <br />
        interactive experiences.
      </span>
      <span class="desc">
        Front-End Developer and UX/UI Designer excelled in creating <br />
        Websites & Webapps.
      </span>
    </div>
    <a href="#projects" class="arrow-down" @click.prevent="scrollToProjects">
      ↓
    </a>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default {
  methods: {
    scrollToProjects() {
      gsap.to(window, { duration: 0.5, scrollTo: "#projects" });
    },
  },
};
</script>

<style scoped lang="scss">
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "PP Mori";
  text-decoration: none;

  @media (max-width: 568px) {
    display: block;
    align-items: none;
    position: absolute;
    top: 15rem;
    height: 0;
    left: 3rem;
    right: 3rem;
  }
}

.title-text {
  color: var(--alternate-color);
  line-height: 1.1;
  letter-spacing: -1px;
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 2.6rem;
  margin-bottom: 1rem;
  text-shadow: 0 5px 10px rgba(255, 255, 255, 0.1),
    0 -5px 10px rgba(197, 197, 197, 0.12), 0 -5px 25px rgba(255, 255, 255, 0.13);

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  @media (max-width: 568px) {
    text-shadow: 0 5px 10px rgba(255, 255, 255, 0.12),
      0 -5px 10px rgba(197, 197, 197, 0.18),
      0 -5px 25px rgba(255, 255, 255, 0.24);
    font-size: 7.5vw;
    line-height: 1.1;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (max-width: 432px) {
    font-size: 7.4vw;
  }

  @media (max-width: 403px) {
    font-size: 7.3vw;
  }

  @media (max-width: 382px) {
    font-size: 7.1vw;
  }

  @media (max-width: 342px) {
    font-size: 6.8vw;
  }
}

.desc {
  color: var(--gray-color);
  line-height: 1.35;
  display: block;
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
  letter-spacing: -0.5008px;
  font-size: 1.6rem;
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    font-size: 1.3438rem;
  }

  @media (max-width: 768px) {
    font-size: 1.0938rem;
    line-height: 1.4;
  }

  @media (max-width: 568px) {
    font-size: 0.9rem;
  }

  @media (max-width: 568px) {
    display: none;
  }
}

.arrow-down {
  font-family: Arial, serif;
  position: absolute;
  bottom: 100px;
  transform: translateX(-50%, -50%);
  font-size: 4rem;
  color: var(--alternate-color);
  text-decoration: none;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(8px);
  }

  @media (max-width: 568px) {
    display: none;
  }
}

.mobile-hide {
  @media (max-width: 568px) {
    display: none;
  }
}

.bruh {
  @media (max-width: 568px) {
    display: none;
  }

  .about-button {
    align-items: flex-start !important;
    .about-text {
      align-items: flex-start !important;
    }
  }
}
</style>
