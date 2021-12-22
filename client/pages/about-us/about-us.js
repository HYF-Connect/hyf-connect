<<<<<<< HEAD:client/src/pages/about-us/about-us.js
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
=======
import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
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
>>>>>>> 0a7fd17471769049a67f564360e1804716e16062:client/pages/about-us/about-us.js
