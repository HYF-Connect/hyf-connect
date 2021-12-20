import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import FormSection from "./form-section.js";

const page = Vue.createApp({
   components: {
      HeaderComponent,
      FooterComponent,
      MainSection,
      FormSection,
   },
   template: `
      <div class="page">
        <header-component></header-component>
        <main-section></main-section>
         <form-section></form-section>
        <footer-component></footer-component>
      </div>
    
      `,
}).mount("#sign-up");

export default page;
