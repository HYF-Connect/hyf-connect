import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import BannerSection from "./banner-section.js";
import BenefitSection from "./benefit-section.js";
import TestimonialSection from "./testimonial-section.js";
import FooterComponent from "/components/footer-component.js";
import CarouselComponent from "./carousel-component.js";

const homepage = Vue.createApp({
  components: {
    HeaderComponent,
    BannerSection,
    BenefitSection,
    TestimonialSection,
    CarouselComponent,
    FooterComponent
  },
  template: `
  <header-component></header-component>
  <banner-section></banner-section>
  <benefit-section></benefit-section>
  <carousel-component></carousel-component>
  <testimonial-section></testimonial-section>
  <footer-component></footer-component>
  `,
}).mount("#homepage");

export default homepage;