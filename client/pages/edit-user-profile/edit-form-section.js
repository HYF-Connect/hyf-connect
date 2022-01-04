import { updateUserProfile } from "../../src/data-access/api-calls/calls.js";
import { userLanguage } from "../../src/data-access/api-calls/calls.js";
import { userSkill } from "../../src/data-access/api-calls/calls.js";
import { userType } from "../../src/data-access/api-calls/calls.js";
export const FormSection = {
   template: `
    <form class="user-profile-form" @submit.prevent="handleSubmit">
      <div class="profile-form-group"> 
      <label class="profile-form__label">First Name</label>
      <input class="profile-form__input" type="text" required v-model="firstName">
      </div>
      <div class="profile-form-group"> 
      <label class="profile-form__label">Last Name</label>
      <input class="profile-form__input" type="text" required v-model="lastName">
      </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">Email</label>
      <input class="profile-form__input" type="email" required v-model="email">
          </div>
      <div class="profile-form-group"> 
      <label class="profile-form__label">User Type</label>
      <input class="profile-form__input" type="text" v-model="userType">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">Job Title</label>
      <input class="profile-form__input" type="text" v-model="jobTitle">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">Nationality</label>
      <input class="profile-form__input" type="text" v-model="nationality">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">Language</label>
      <input class="profile-form__input" type="text" v-model="language">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">Region</label>
      <input class="profile-form__input" type="text" v-model="region">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">HYF Class</label>
      <input class="profile-form__input" type="text" v-model="hyfClass">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">GitHub</label>
      <input class="profile-form__input" type="text" v-model="gitHub">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">Website</label>
      <input class="profile-form__input" type="text" v-model="website">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">LinkedIn</label>
      <input class="profile-form__input" type="text" v-model="linkedIn">
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">My Skills</label>
      <input class="profile-form__input" type="text" v-model="skills">
      </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">About me</label> 
      <input class="profile-form__input-bio" type="text" v-model="bio">
      </div>
      <div class = "profile-form_btn-right">
      <button class = "profile-form__btn-submit"> save </button>
      </div>
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
         jobTitle: "",
         userType: "",
         gitHub: "",
         website: "",
         linkedIn: "",
         skills: "",
         bio: "",
      };
   },
   methods: {
      async handleSubmit() {
         try {
            const result = await updateUserProfile(
               this.firstName,
               this.lastName,
               this.email,
               this.nationality,
               this.region,
               this.jobTitle,
               this.hyfClass,
               this.gitHub,
               this.website,
               this.linkedIn,
               this.bio
            );
            setTimeout(() => (window.location.href = "/"), 4000);
         } catch (error) {
            this.errorMessage = error;
            console.log("error from user profile form", error);
         }
      },
   },
};

export default FormSection;
