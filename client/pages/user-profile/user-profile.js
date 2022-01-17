import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import PersonalDetailsSection from "./personal-details-section.js";
import ProfileBioComponent from "./user-about-me.js";
import userProfileProjectsComponent from "./user-profile-projects-section.js";
import userProfileSkillsComponent from "./user-skills-component.js";
const UserProfilePage = Vue.createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    MainSection,
    PersonalDetailsSection,
    ProfileBioComponent,
    userProfileProjectsComponent,
    userProfileSkillsComponent,
  },
  template: `
   <header-component></header-component>
   <div class="profile-page">
      <main-section></main-section>
      <div class="user-profile-row">
        <div class="column-details">
          <personal-details-section></personal-details-section>
        </div>
        <div class="column-about">
          <profile-bio-component></profile-bio-component>
        </div>
      </div>
    <user-profile-skills-component></user-profile-skills-component>
    <user-profile-projects-component></user-profile-projects-component>
   </div>
   <footer-component></footer-component>
    
      `,
}).mount("#user-profile");

export default UserProfilePage;
