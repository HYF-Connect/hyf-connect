import HeaderComponent from "../../components/header-component.js";
import BannerSection from "./banner-section.js";

const page = Vue.createApp({
  components: {
    // HeaderComponent,
    BannerSection,
  },
  template: `
  <banner-section></banner-section>>
  `,
}).mount("#homepage");

export default page;
