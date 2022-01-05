import { updateUserProfile } from "../../src/data-access/api-calls/calls.js";
import { fetchUserById } from "../../src/data-access/api-calls/calls.js";
import { fetchAllLanguages } from "../../src/data-access/api-calls/calls.js";
import { fetchAllClasses } from "../../src/data-access/api-calls/calls.js";

export const FormSection = {
   template: `
    <form class="user-profile-form" @submit.prevent="handleSubmit">
      <div class="profile-form-group"> 
      <label class="profile-form__label">First Name</label>
      <input class="profile-form__input" type="text" required readonly v-model="firstName">
      </div>
      <div class="profile-form-group"> 
      <label class="profile-form__label">Last Name</label>
      <input class="profile-form__input" type="text" required readonly v-model="lastName">
      </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">Email</label>
      <input class="profile-form__input" type="email" required readonly v-model="email">
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
      <select class="profile-form__input" v-model="language">
         <option v-for="language in languages" v-bind:value="language.LanguageID">
            {{ language.Language }}
         </option>
      </select>
          </div>
       <div class="profile-form-group"> 
      <label class="profile-form__label">Region</label>
      <input class="profile-form__input" type="text" v-model="region">
          </div>
       <div class="profile-form-group"> 
         <label class="profile-form__label">HYF Class</label>
         <select class="profile-form__input" v-model="hyfClass">
            <option v-for="hyfClass in classes" v-bind:value="hyfClass.ClassID">
               {{ hyfClass.Name }}
            </option>
         </select>
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
         languages: [],
         classes: [],
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
      async getDataOnLoad() {
         try {
            this.languages = await fetchAllLanguages();
            this.classes = await fetchAllClasses();
            const id = localStorage.getItem("userId");
            const user = await fetchUserById(id);
            this.firstName = user.FirstName;
            this.lastName = user.LastName;
            this.email = user.Email;
            this.nationality = user.NationalityID;
            this.region = user.RegionID;
            this.jobTitle = user.JobTitle;
            this.hyfClass = user.ClassID;
            this.gitHub = user.GitHub;
            this.website = user.Website;
            this.linkedIn = user.LinkedIn;
            this.bio = user.Bio;
         } catch (error) {
            console.log("error from user profile form", error);
         }
      },
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
            console.log("error from user profile form", error);
         }
      },
   },
   created: function () {
      this.getDataOnLoad();
   },
};

export default FormSection;
