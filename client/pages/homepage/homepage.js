import HeaderComponent from "../../components/header-component.js";
import BannerSection from "./banner-section";
import BenefitSection from "./benefit-section.js";

const homepage = Vue.createApp({
  components: {
    HeaderComponent,
    BannerSection,
    BenefitSection
  },
  template: `
  <header-component></header-component>
  <banner-section></banner-section>
  <benefits-section></benefit-section>
  `,
}).mount("#homepage");

export default homepage;