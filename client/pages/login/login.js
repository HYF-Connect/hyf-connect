import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from './main-section.js';
import FormSection from './form-section.js';

const loginPage = Vue.createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    MainSection,
    FormSection,
  },
  template: `
      <div class="page">
        <main-section></main-section>
        <form-section></form-section>
      </div>
    
      `,
}).mount("#login");

export default loginPage;
