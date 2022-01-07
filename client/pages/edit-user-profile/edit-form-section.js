import { updateUserProfile } from "../../src/data-access/api-calls/calls.js";
import { updateLanguage } from "../../src/data-access/api-calls/calls.js";
import { fetchUserById } from "../../src/data-access/api-calls/calls.js";
import { fetchAllLanguages } from "../../src/data-access/api-calls/calls.js";
import { fetchAllClasses } from "../../src/data-access/api-calls/calls.js";
import { fetchAllNationalities } from "../../src/data-access/api-calls/calls.js";
import { fetchAllRegions } from "../../src/data-access/api-calls/calls.js";
import { fetchAllTypes } from "../../src/data-access/api-calls/calls.js";
import { fetchAllSkills } from "../../src/data-access/api-calls/calls.js";
import { fetchUserSkills } from "../../src/data-access/api-calls/calls.js";
import { fetchUserTypes } from "../../src/data-access/api-calls/calls.js";
import { fetchUserLanguages } from "../../src/data-access/api-calls/calls.js";

import MultiSelect from "../../components/multiselect-component.js";

export const FormSection = {
   components: {
      MultiSelect,
   },
   template: `
   <form class="user-profile-form" @submit.prevent="handleSubmit">
       <div class="alert alert-success" role="alert" v-if="success">
        Your profile is successfully saved! 
    </div>
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
         <div class="profile-form-list"> 
            <label class="profile-form__label">User Type</label>
           <multi-select v-bind:dropdownid="'typesDropDown'" v-bind:options="types" v-bind:selection="selectedTypes" v-on:new-selection="updateUserType"></multi-select>
         </div>
      </div>
      <div class="profile-form-group"> 
         <label class="profile-form__label">Job Title</label>
         <input class="profile-form__input" type="text" v-model="jobTitle">
      </div>
      <div class="profile-form-group"> 
      <div class="profile-form-list"> 
         <label class="profile-form__label">Nationality</label>
         <select class="profile-form__select" v-model="nationality">
            <option v-for="nationality in nationalities" v-bind:value="nationality.NationalityID">
               {{ nationality.Country }}
            </option>
         </select>
      </div>
      </div>
      <div class="profile-form-group"> 
      <div class="profile-form-list"> 
         <label class="profile-form__label">Language</label>
         <multi-select v-bind:dropdownid="'languagesDropDown'" v-bind:options="languages" v-bind:selection="selectedLanguages" v-on:new-selection="updateUserLanguage"></multi-select>
      </div>
      </div>
      <div class="profile-form-group"> 
         <div class="profile-form-list"> 
         <label class="profile-form__label">Region</label>
         <select class="profile-form__select" v-model="region">
            <option v-for="region in regions" v-bind:value="region.RegionID">
                  {{ region.Name }}
            </option>
         </select>
         </div>
      </div>
      <div class="profile-form-group"> 
         <div class="profile-form-list">   
         <label class="profile-form__label">HYF Class</label>
         <select class="profile-form__select" v-model="hyfClass">
            <option v-for="hyfClass in classes" v-bind:value="hyfClass.ClassID">
               {{ hyfClass.Name }}
            </option>
         </select>
         </div>
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
         <div class="profile-form-list"> 
            <label class="profile-form__label">My Skills</label>
            <multi-select  v-bind:dropdownid="'skillsDropDown'" v-bind:options="skills" v-bind:selection="selectedSkills" v-on:new-selection="updateUserSkill"></multi-select>
         </div>
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
         selectedLanguages: [],
         classes: [],
         nationalities: [],
         regions: [],
         types: [],
         selectedTypes: [],
         skills: [],
         selectedSkills: [],
         language: "",
         region: "",
         hyfClass: "",
         jobTitle: "",
         userType: "",
         gitHub: "",
         website: "",
         linkedIn: "",
         skill: "",
         bio: "",
         success: false,
      };
   },
   methods: {
      async getDataOnLoad() {
         try {
            const id = localStorage.getItem("userId");
            const user = await fetchUserById(id);
            this.classes = await fetchAllClasses();
            this.nationalities = await fetchAllNationalities();
            this.regions = await fetchAllRegions();
            this.firstName = user.FirstName;
            this.lastName = user.LastName;
            this.email = user.Email;
            this.nationality = user.NationalityID;
            this.region = user.RegionID;
            this.jobTitle = user.JobTitle;
            this.hyfClass = user.ClassID;
            this.gitHub = user.GitHubURL;
            this.website = user.WebsiteURL;
            this.linkedIn = user.LinkedInURL;
            this.bio = user.Bio;
            const getAllLanguages = await fetchAllLanguages();
            this.languages = getAllLanguages.map((l) => ({
               label: l.Language,
               value: l.LanguageID,
            }));
            const getUserLanguages = await fetchUserLanguages(id);
            this.selectedLanguages = getUserLanguages.map((l) => ({
               label: l.Language,
               value: l.LanguageID,
            }));
            const getAllTypes = await fetchAllTypes();
            this.types = getAllTypes.map((t) => ({
               label: t.Title,
               value: t.TypeID,
            }));
            const getUserTypes = await fetchUserTypes(id);
            this.selectedType = getUserTypes.map((l) => ({
               label: l.Language,
               value: l.LanguageID,
            }));
            const getAllSkills = await fetchAllSkills();
            this.skills = getAllSkills.map((s) => ({
               label: s.Name,
               value: s.SkillID,
            }));
            const getUserSkills = await fetchUserSkills(id);
            this.selectedSkill = getUserSkills.map((s) => ({
               label: s.Name,
               value: s.SkillID,
            }));
         } catch (error) {
            console.log("error from user profile form", error);
         }
      },
      async updateUserLanguages() {
         try {
            console.log(this.selectedLanguages);
            //const result = await updateLanguage(this.selectedLanguages);
            // console.log(result);
         } catch (error) {
            console.log("error from user language", error);
         }
      },
      async updateUserSkills(b) {
         console.log("userSkills", b);
      },
      async updateUserTypes(c) {
         console.log("userTypes", c);
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
            this.success = true;
            /*             setTimeout(
               () =>
                  (window.location.href =
                     "/pages/user-profile/user-profile.html"),
               4000
            ); */
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
