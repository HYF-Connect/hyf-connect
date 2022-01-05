import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import FormSection from "./form-section.js";

const ContactUsPage = Vue.createApp({
  components: {
    HeaderComponent,
    FormSection,
    FooterComponent,
    
  },
  template: `
      <div class="page">
        <header-component></header-component>
        <div class="container-contact-us-page">
          <form-section></form-section>
        </div>
        <footer-component></footer-component>
      </div>
    
      `,
}).mount("#contact-us");

export default ContactUsPage;
