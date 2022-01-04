import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import ProfileCard from "./profile-card.js";
import MainSection from "./main-section.js";


const page = Vue.createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    ProfileCard,
    MainSection,
  },
  template: `
      <div class="page">
        <header-component></header-component>
        <main-section></main-section>
        <profile-card></profile-card>
        <footer-component></footer-component>
      </div>
    
      `,
}).mount("#about-us");

export default page;
