import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import AvatarDropdown from "../../components/avatar-dropdown-component.js";
import ProfileCard from "./profile-card.js";
import MainSection from "./main-section.js";


const page = Vue.createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    AvatarDropdown,
    ProfileCard,
    MainSection,
  },
  template: `
      <div class="page">
        <header-component></header-component>
        <main-section></main-section>
        <div class="about-main">
        <profile-card></profile-card>
        </div>
        <div class="about-last-container">
        </div>
        <footer-component></footer-component>
      </div>
    
      `,
}).mount("#about-us");

export default page;
