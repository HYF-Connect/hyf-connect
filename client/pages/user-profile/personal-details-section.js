import MultiSelect from "../../components/multiselect-component.js";
import {
   updateUserProfile,
   updateUserLanguages,
   updateUserSkills,
   updateUserTypes,
   fetchUserById,
   fetchAllLanguages,
   fetchAllClasses,
   fetchAllNationalities,
   fetchAllRegions,
   fetchAllTypes,
   fetchAllSkills,
   fetchUserSkills,
   fetchUserTypes,
   fetchUserLanguages,
} from "../../src/data-access/api-calls/calls.js";

const PersonalDetailsSection = {
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
         <div class="profile-form-list"> 
            <label class="profile-form__label ">User Type</label>
            <div class="pills">
               <span class="badge rounded-pill bg-pill-hyf"  v-for="s in selectedTypes">{{ s.label }} </span>
            </div>
         </div>
      </div>
      <div class="profile-form-group"> 
         <label class="profile-form__label">Job Title</label>
         <input class="profile-form__input" readonly type="text" v-model="jobTitle">
      </div>
      <div class="profile-form-group"> 
      <div class="profile-form-list"> 
         <label class="profile-form__label">Nationality</label>
         <select class="profile-form__select" readonly disabled v-model="nationality">
            <option v-for="nationality in nationalities" v-bind:value="nationality.NationalityID">
               {{ nationality.Country }}
            </option>
         </select>
      </div>
      </div>
      <div class="profile-form-group"> 
      <div class="profile-form-list"> 
         <label class="profile-form__label">Language</label>
         <div class="pills">
            <span class="badge rounded-pill bg-pill-hyf"  v-for="s in selectedLanguages">{{ s.label }} </span>
         </div>      
      </div>
      </div>
      <div class="profile-form-group"> 
         <div class="profile-form-list"> 
         <label class="profile-form__label">Region</label>
         <select class="profile-form__select" disabled readonly v-model="region">
            <option v-for="region in regions" v-bind:value="region.RegionID">
                  {{ region.Name }}
            </option>
         </select>
         </div>
      </div>
      <div class="profile-form-group"> 
         <div class="profile-form-list">   
         <label class="profile-form__label">HYF Class</label>
         <select class="profile-form__select" disabled readonly v-model="hyfClass">
            <option v-for="hyfClass in classes" v-bind:value="hyfClass.ClassID">
               {{ hyfClass.Name }}
            </option>
         </select>
         </div>
      </div>
      <div class="profile-form-group"> 
         <label class="profile-form__label">GitHub</label>
         <a v-bind:href="gitHub" class="profile-form__input" readonly type="text" target="_blank">{{gitHub}}</a>
      </div>
      <div class="profile-form-group"> 
         <label class="profile-form__label">Website</label>
         <a v-bind:href="website" class="profile-form__input" readonly type="text" target="_blank">{{website}}</a>
      </div>
      <div class="profile-form-group"> 
         <label class="profile-form__label">LinkedIn</label>
         <a v-bind:href="linkedIn" class="profile-form__input" readonly type="text" target="_blank">{{linkedIn}}</a>
      </div>
      <div class="profile-form-group"> 
         <div class="profile-form-list"> 
            <label class="profile-form__label">My Skills</label>
            <div class="pills">
               <span class="badge rounded-pill bg-pill-hyf"  v-for="s in selectedSkills">{{ s.label }} </span>
            </div> 
         </div>
      </div>
      <div class="profile-form-group"> 
         <label class="profile-form__label">About me</label> 
         <input class="profile-form__input-bio" type="text" readonly v-model="bio">
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
            const id = this.getMemberId();
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
            this.gitHub = user.GithubURL;
            this.website = user.WebsiteURL;
            this.linkedIn = user.LinkedinURL;
            this.bio = user.Bio;
            const getAllLanguages = await fetchAllLanguages();
            this.languages = getAllLanguages.map((l) => ({
               label: l.Language,
               value: l.LanguageID,
            }));
            const getUserLanguages = await fetchUserLanguages(id);
            this.selectedLanguages = getUserLanguages.map((l) => ({
               label: this.languages.find((all) => all.value === l.LanguageID)
                  .label,
               value: l.LanguageID,
            }));
            const getAllTypes = await fetchAllTypes();
            this.types = getAllTypes.map((t) => ({
               label: t.Title,
               value: t.TypeID,
            }));
            const getUserTypes = await fetchUserTypes(id);
            this.selectedTypes = getUserTypes.map((t) => ({
               label: this.types.find((all) => all.value === t.TypeID).label,
               value: t.TypeID,
            }));
            const getAllSkills = await fetchAllSkills();
            this.skills = getAllSkills.map((s) => ({
               label: s.Name,
               value: s.SkillID,
            }));
            const getUserSkills = await fetchUserSkills(id);
            this.selectedSkills = getUserSkills.map((s) => ({
               label: this.skills.find((all) => all.value === s.SkillID).label,
               value: s.SkillID,
            }));
         } catch (error) {
            console.log("error from user profile form", error);
         }
      },
      async updateUserLanguages(newLangs) {
         this.selectedLanguages = newLangs;
      },
      async updateUserSkills(newSkills) {
         this.selectedSkills = newSkills;
      },
      async updateUserTypes(newTypes) {
         this.selectedTypes = newTypes;
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
            const language = await updateUserLanguages(this.selectedLanguages);
            const skill = await updateUserTypes(this.selectedTypes);
            const type = await updateUserSkills(this.selectedSkills);
            this.success = true;
         } catch (error) {
            console.log("error from user profile form", error);
         }
      },
      getMemberId() {
         const queryPart = window.location.search;
         const parts = queryPart.replace("?", "").split("&");
         for (let part of parts) {
            if (part.split("=")[0] === "memberId") {
               return part.split("=")[1];
            }
         }
      },
   },
   created: function () {
      this.getDataOnLoad();
   },
};

export default PersonalDetailsSection;
