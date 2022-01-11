import MultiSelect from "../../components/multiselect-component.js";
import { fetchUsers } from "../../src/data-access/api-calls/calls.js";
import { createProject } from "../../src/data-access/api-calls/calls.js";

export const MainSection = {
   components: {
      MultiSelect,
   },

   template: `
   <div class="addNewProject__banner">
      <h1 class= "addNewProject__title">add your new project here!</h1>
   </div>
   <div class="addNewProject__container" v-on:load="onload()">
      <form class="addNewProject__form" @submit.prevent="handleSubmit">
         <div class="alert alert-success" role="alert" v-if="success">
            Your new project is successfully saved! 
         </div>
         <div class="addNewProject__form-group"> 
            <label class="addNewProject__form--label">Project Title</label>
            <input class="addNewProject__form--input" type="text" placeholder="Your project's title" required v-model="projectTitle">
         </div>
         <div class="addNewProject__form-group">
            <label class="addNewProject__form--label">Project URL</label>
            <input class="addNewProject__form--input" type="url" placeholder="example@example.com" v-model="websiteUrl">
         </div>
         <div class="addNewProject__form-group">
            <label class="addNewProject__form--label">Github Repo</label>
            <input class="addNewProject__form--input" type="url" placeholder="example@github.com" v-model="githubRepo">
         </div>
         <div class="addNewProject__form-group">
            <label class="addNewProject__form--label">Description</label>
            <input class="addNewProject__form--input-description" type="text" placeholder="Describe your project" v-model="projectDescription"><br>
         </div>
         <div class="addNewProject__form-group">
            <div class="multi-select">
               <label class="label-select">Team Members</label>
               <multi-select v-bind:dropdownid="'membersDropDown'" v-bind:options="students" v-bind:selection="teamMembers" v-on:new-selection="updateTeammates"></multi-select>
            </div>
         </div>
         <div class="addNewProject__form-group">
            <label class="addNewProject__form--label">Add Thumbnail</label>
            <input class="addNewProject__form--input" type="file" accept="Image/*">
         </div>
         <div class="addNewProject__button">
            <button class="submit-btn" v-on:click="handleSubmit">save project</button>
         </div>
      </form>
   </div>
    `,

   data() {
      return {
         projectTitle: "",
         websiteUrl: "",
         githubRepo: "",
         projectDescription: "",
         teamMembers: [],
         students: [],
         projectThumbnail: "",
         success: false,
      };
   },

   mounted: function () {
      this.onload();
   },

   methods: {
      async onload() {
         try {
            const users = await fetchUsers();
            this.students = users.map((u) => ({
               label: u.FirstName + " " + u.LastName,
               value: u.UserID,
            }));
            console.log(users);
         } catch (error) {
            console.log("error from members", error);
         }
      },

      async updateTeammates(members) {
         this.teamMembers = members;
      },
      async handleSubmit() {
         try {
            const result = await createProject(
               this.projectTitle,
               this.projectDescription,
               this.githubRepo,
               this.websiteUrl,
               this.projectThumbnail
            );
            this.projectTitle = result.Title;
            this.projectDescription = result.Description;
            this.githubRepo = result.GithubURL;
            this.websiteUrl = result.WebsiteURL;
            this.projectThumbnail = result.Thumbnail;
            this.success = true;
            setTimeout(
               () => (window.location.href = "/pages/projects/projects.html"),
               500
            );
            return;
         } catch (error) {
            console.log("error from project", error);
         }
      },
   },
};

export default MainSection;
