import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import ContactUsSection from "./contact-us-section";

const page = Vue.createApp({
  components: {
    HeaderComponent,
    ContactUsSection,
    FooterComponent,
    
  },
  template: `
  <div class="page">
  <header-component></header-component>
  <contact-us-section></contact-us-section>
  <footer-component></footer-component>
</div>
    
      `,
}).mount("#contact-us");

export default page;
