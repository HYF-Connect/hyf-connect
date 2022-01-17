import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import UserProjectComponent from "./user-project-component.js";

const page = Vue.createApp({
   components: {
      HeaderComponent,
      FooterComponent,
      MainSection,
      UserProjectComponent,
   },
   template: `
      <header-component></header-component>
      <div class="user-projects-page">
        <main-section></main-section>   
        <user-project-component></user-project-component> 
      </div>
      <footer-component></footer-component>
    
      `,
}).mount("#user-project");

export default page;
