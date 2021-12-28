import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import BannerSection from "./banner-section.js";

const homepage = Vue.createApp({
  components: {
    HeaderComponent,
    BannerSection,
    FooterComponent
  },
  template: `
  <header-component></header-component>
  <banner-section></banner-section>
  <footer-component></footer-component>
  `,
}).mount("#homepage");

export default homepage;