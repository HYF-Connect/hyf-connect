import { registerUser } from "../../src/data-access/api-calls/calls.js";
export const FormSection = {
   template: `
    <form class="user-profile-form" @submit.prevent="handleSubmit">
      <div class="alert alert-danger" role="alert" v-if="errorMessage">
       {{ errorMessage }}
      </div>
      <div class="alert alert-success" role="alert" v-if="success">
        Your account has been successfully created!
      </div>
      <label class="profile-form__label">First Name</label>
      <input class="profile-form__input" type="text" required v-model="firstName">
      <label class="profile-form__label">Last Name</label>
      <input class="profile-form__input" type="text" required v-model="lastName">
      <label class="profile-form__label">Email</label>
      <input class="profile-form__input" type="email" required v-model="email">
      <label class="profile-form__label">Job Title</label>
      <input class="profile-form__input" type="text" v-model="nationality">
            <label class="profile-form__label">Nationality</label>
      <input class="profile-form__input" type="text" v-model="language">
            <label class="profile-form__label">Language</label>
      <input class="profile-form__input" type="text" v-model="region">
            <label class="profile-form__label">Region</label>
      <input class="profile-form__input" type="text" v-model="hyfClass">
            <label class="profile-form__label">HYF Class</label>
      <input class="profile-form__input" type="text" v-model="gitHub">
            <label class="profile-form__label">GitHub</label>
      <input class="profile-form__input" type="text" v-model="website">
            <label class="profile-form__label">Website</label>
      <input class="profile-form__input" type="text" v-model="linkedIn">
            <label class="profile-form__label">LinkedIn</label>
      <input class="profile-form__input" type="text" v-model="skills">
            <label class="profile-form__label">My Skills</label>
      <input class="profile-form__input" type="text" v-model="bio">
            <label class="profile-form__label">About me</label>
      <button class= "form__btn-submit"> save </button>
  </form>
    `,
   data() {
      return {
         firstName: "",
         lastName: "",
         email: "",
         nationality: "",
         language: "",
         region: "",
         hyfClass: "",
         gitHub: "",
         website: "",
         linkedIn: "",
         skills: "",
         bio: "",
         errorMessage: "",
         success: false,
      };
   },
   methods: {
      /*   async handleSubmit() {
         this.passwordError =
            this.password.length >= 6
               ? ""
               : "Password contains less than 6 characters!";
         this.passwordCheck =
            this.password === this.confirmPassword
               ? ""
               : "Passwords do not match. Try again!";
         try {
            const result = await registerUser(
               this.firstName,
               this.lastName,
               this.email,
               this.password
            );
            this.errorMessage = "";
            this.success = true;
            setTimeout(() => (window.location.href = "/"), 4000);
         } catch (error) {
            this.errorMessage = error;
            console.log("error from registration", error);
         }
      }, */
   },
};

export default FormSection;
