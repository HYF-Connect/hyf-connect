import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import PersonalDetailsSection from "./personal-details-section.js";

const UserProfilePage = Vue.createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    MainSection,
    PersonalDetailsSection,
  },
  template: `
   <header-component></header-component>
   <div class="profile-page">
      <main-section></main-section>
      <personal-details-section></personal-details-section>
   </div>
   <footer-component></footer-component>
    
      `,
}).mount("#user-profile");

export default UserProfilePage;
