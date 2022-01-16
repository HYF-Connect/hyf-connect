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

      <div class="profile-detail-line">
            <i class="fas fa-language"></i>         
            {{selectedLanguages}}
      </div>   
      <div class="profile-detail-line">
         <i class="fas fa-map-marked-alt"></i>
         {{ regionName }}  
      </div>
      <div class="profile-detail-line">
         <i class="fas fa-user-graduate"></i>
         {{ HYFclassName}}
      </div>
      <hr class="profile-details-separator">
      <div class="profile-form-icons">
         <i class="far fa-envelope" v-on:click="sendEmail(email)" v-if="email"></i>
         <i class="fab fa-github" v-on:click="openTab(gitHub)" v-if="gitHub"></i>
         <i class="fab fa-linkedin-in" v-on:click="openTab(linkedIn)" v-if="linkedIn"></i>
         <i class="fas fa-globe" v-on:click="openTab(website)" v-if="website"></i>
      </div>
      
   </form>
   `,
  data() {
    return {
      firstName: "",
      lastName: "",
      email: undefined,
      nationality: "",
      languages: [],
      selectedLanguages: "",
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
      gitHub: undefined,
      website: undefined,
      linkedIn: undefined,
      skill: "",
      bio: "",
      success: false,
      regionName: "",
      HYFclassName: "",
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
        this.selectedLanguages = getUserLanguages
          .map(
            (l) =>
              this.languages.find((all) => all.value === l.LanguageID).label
          )
          .join(", ");
        if (this.selectedLanguages === "") {
          this.selectedLanguages = " - ";
        }
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
        this.regionName = this.regions.find(
          (x) => x.RegionID === user.RegionID
        )?.Name;
        if (this.regionName === "" || this.regionName === undefined) {
          this.regionName = " - ";
        }

        this.HYFclassName = this.classes.find(
          (x) => x.ClassID === user.ClassID
        )?.Name;
        if (this.HYFclassName === "" || this.HYFclassName === undefined) {
          this.HYFclassName = " - ";
        }
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
    openTab(url) {
      window.open(url, "_blank").focus();
    },
    sendEmail(email) {
      this.openTab("mailto:" + email);
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
