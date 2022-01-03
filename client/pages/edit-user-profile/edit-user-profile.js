import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import EditFormSection from "./edit-form-section.js";

const EditProfilePage = Vue.createApp({
   components: {
      HeaderComponent,
      FooterComponent,
      MainSection,
      EditFormSection,
   },
   template: `
   <header-component></header-component>
   <div class="edit-profile-page">
      <div class="edit-profile-wrapper">
         <main-section></main-section>
         <edit-form-section></edit-form-section>
      </div>
   </div>
   <footer-component></footer-component>
    
      `,
}).mount("#edit-user-profile");

export default EditProfilePage;
