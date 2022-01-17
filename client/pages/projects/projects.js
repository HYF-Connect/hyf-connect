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
      <header-component></header-component>
      <div class="project-page">
        <main-section></main-section>
      </div>    
      <footer-component></footer-component>
      `,
}).mount("#projects");

export default page;
