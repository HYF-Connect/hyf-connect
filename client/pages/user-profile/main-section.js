import ProfileImageComponent from "./profile-image-component.js";

const MainSection = {
  components: {
    ProfileImageComponent,
  },
  template: `
    <div class="profile-user__main">
      <div class="profile__main-arrow-right">
      </div>
      <p class= "profile-user__main-title"> Hello <span class= "profile-user__span"> there! </span></p>
      <div class="profile__main-arrow-left">
      </div>
      <profile-image-component></profile-image-component>
    </div>
    `,
};

export default MainSection;
