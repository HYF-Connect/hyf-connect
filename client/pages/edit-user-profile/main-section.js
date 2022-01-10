import EditImageComponent from "./edit-image-component.js";

const MainSection = {
   components: {
      EditImageComponent,
   },
   template: `
    <div class="edit-user__main">
      <div class="profile__main-arrow-right">
      </div>
      <p class= "edit-user__main-title"> Hello <span class= "edit-user__span"> there! </span></p>
      <div class="profile__main-arrow-left">
      </div>
      <edit-image-component></edit-image-component>
    </div>
    `,
};

export default MainSection;
