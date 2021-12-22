import HeaderComponent from "../../components/header.js";
import FooterComponent from "../../components/footer.js";
import MainSection from "./main-section.js";

const page = Vue.createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    MainSection,
  },
  template: `
  <div class="page">
    <header-component></header-component>
    <main-section></main-section>
    <footer-component></footer-component>
  </div>

  `,
}).mount("#about-us");

export default page;
