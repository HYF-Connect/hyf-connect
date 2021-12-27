import HeaderComponent from "../../components/header-component.js";
import BannerSection from "./banner-section.js";
<<<<<<< HEAD
import BenefitSection from "./benefit-section.js";
=======
>>>>>>> 4a3e058747bbd1fe3e089eab17dd06462362dbc9

const homepage = Vue.createApp({
  components: {
    HeaderComponent,
    BannerSection
  },
  template: `
  <header-component></header-component>
  <banner-section></banner-section>
  `,
}).mount("#homepage");

export default homepage;