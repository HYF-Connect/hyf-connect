import HeaderComponent from "../../components/header-component.js";
// import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import FormSection from "./form-section.js";

const SignUpPage = Vue.createApp({
   components: {
      HeaderComponent,
      // FooterComponent,
      MainSection,
      FormSection,
   },
   template: `
      <div class="page">
        <main-section></main-section>
         <form-section></form-section>
      </div>
    
      `,
}).mount("#sign-up");

export default SignUpPage;
