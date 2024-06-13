<template>
  <div class="cursor"></div>
  <Navbar />
  <RouterView />
  <FooterComponent />
</template>

<script>
import HeroSection from "./components/hero-section.vue";
import OsHero from "./components/os-hero.vue";
import Navbar from "./components/navbar.vue";
import Projects from "./pages/projects.vue";
import FooterComponent from "./components/footer.vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lenis from "lenis";

export default {
  name: "App",
  components: {
    HeroSection,
    OsHero,
    Navbar,
    Projects,
    FooterComponent,
  },
  data() {
    return {
      cursor: null,
    };
  },
  mounted() {
    this.cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseenter", this.showCursor);
    document.addEventListener("mouseleave", this.hideCursor);
  },
  methods: {
    moveCursor(event) {
      const x = event.clientX - 5;
      const y = event.clientY - 5;

      this.cursor.style.transform = `translate(${x}px, ${y}px)`;
    },
    showCursor() {
      this.cursor.style.opacity = 1;
    },
    hideCursor() {
      this.cursor.style.opacity = 0;
    },
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.moveCursor);
    document.removeEventListener("mouseenter", this.showCursor);
    document.removeEventListener("mouseleave", this.hideCursor);
  },
};
// Lenis

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
</script>

<style scoped lang="scss">
.cursor {
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  transition: transform 0.35s ease-out, opacity 0.25s ease-out;
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}
</style>
