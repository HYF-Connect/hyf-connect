import HeaderComponent from "../../components/header-component.js";
import BannerSection from "./banner-section.js";
import BenefitSection from "./benefit-section.js";
import TestimonialSection from "./testimonial-section.js";

const homepage = Vue.createApp({
  components: {
    HeaderComponent,
    BannerSection,
    BenefitSection,
    TestimonialSection
  },
  template: `
  <header-component></header-component>
  <banner-section></banner-section>
  <benefit-section></benefit-section>
  <testimonial-section></testimonial-section>
  `,
}).mount("#homepage");

export default homepage;