import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import FormSection from "./form-section.js";

const ContactUsPage = Vue.createApp({
  components: {
    HeaderComponent,
    MainSection,
    FormSection,
    FooterComponent,
    
  },
  template: `
      <div class="page">
        <header-component></header-component>
        <div class="contact-us-page">
          <main-section></main-section>
          <form-section></form-section>
        </div>
        <footer-component></footer-component>
      </div>
    
      `,
}).mount("#contact-us");

export default ContactUsPage;
