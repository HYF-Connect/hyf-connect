import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import FormSection from "./form-section.js";

const SignUpPage = Vue.createApp({
   components: {
      HeaderComponent,
      FooterComponent,
      MainSection,
      FormSection,
   },
   template: `
      <header-component></header-component>
      <div class="sign-up-page">
         <main-section></main-section>
         <form-section></form-section>
      </div>
    <footer-component></footer-component>
      `,
}).mount("#sign-up");

export default SignUpPage;
