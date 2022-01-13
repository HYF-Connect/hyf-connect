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
      <div class="add-new-project-page">
        <main-section></main-section>
      </div>
      <footer-component></footer-component>
    
      `,
}).mount("#add-new-project");

export default page;
