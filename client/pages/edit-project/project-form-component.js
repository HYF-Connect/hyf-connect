import MultiSelect from "../../components/multiselect-component.js";
import {
   fetchAllProjectUsers,
   fetchUsers,
   updateProject,
   updateProjectThumbnail,
   updateProjectUsers,
   fetchProjectById,
} from "../../src/data-access/api-calls/calls.js";

export const ProjectFormComponent = {
   components: {
      MultiSelect,
   },

   template: `
   <div class="addNewProject__container">
      <form class="addNewProject__form" @submit.prevent="handleSubmit">
         <div class="alert alert-success" role="alert" v-if="success">
            Your project is successfully updated!
         </div>
         <div class="addNewProject__form-group"> 
            <label class="addNewProject__form--label">Project Title</label>
            <input class="addNewProject__form--input" type="text" placeholder="Your project's title" required v-model="projectTitle">
         </div>
         <div class="addNewProject__form-group">
            <label class="addNewProject__form--label">Project URL</label>
            <input class="addNewProject__form--input" type="url" placeholder="https://example.com" v-model="websiteUrl">
         </div>
         <div class="addNewProject__form-group">
            <label class="addNewProject__form--label">Github Repo</label>
            <input class="addNewProject__form--input" type="url" placeholder="https://example.com" v-model="githubRepo">
         </div>
         <div class="addNewProject__form-textarea">
            <label class="addNewProject__form--label">Description</label>
            <textarea rows="4" class="textarea-description" type="text" v-model="projectDescription">
            Describe your project </textarea>
         </div>
         <div class="addNewProject__form-group">
               <div class="multi-select">
                  <label class="label-select">Team Members</label>
               <multi-select v-bind:dropdownid="'membersDropDown'" v-bind:options="students" v-bind:selection="teamMembers" v-on:new-selection="updateTeammates"></multi-select>
               </div>
               </div>
         <div class="thumbnail-container">
            <label class="thumbnail-label">Add Thumbnail</label> 
            <div class="outer-area">
               <div class="thumbnail-area__img" >
                  <img class="img__thumbnail" v-if="file" v-bind:src="file" alt="project thumbnail"/>
                  <i class="far fa-image icon-thumbnail" v-else></i>
               </div>
               <input v-on:change="handleImageUpload" id="inputFileToLoad" type="file">
            </div>
         </div>
         <div class="addNewProject__button">
            <button class="submit-btn">save project</button>
         </div>
      </form>
   </div>
    `,

   data() {
      return {
         projectTitle: "",
         websiteUrl: "",
         githubRepo: "",
         id: undefined,
         projectDescription: "",
         teamMembers: [],
         students: [],
         projectThumbnail: "",
         success: false,
         file: undefined,
      };
   },

   mounted: function () {
      this.onload();
   },
   methods: {
      async onload() {
         try {
            this.students = await fetchUsers();
            const allUsers = await fetchUsers();
            this.students = allUsers.map((u) => ({
               label: u.FirstName + " " + u.LastName,
               value: u.UserID,
            }));
            const id = this.getProjectId();
            if (id === undefined) {
               return;
            }
            this.id = id;
            const project = await fetchProjectById(id);
            this.file = project.Thumbnail;
            this.projectTitle = project.Title;
            this.websiteUrl = project.WebsiteURL;
            this.githubRepo = project.GithubURL;
            this.projectDescription = project.Description;
            this.projectThumbnail = project.Thumbnail;
            const usersProject = await fetchAllProjectUsers(id);
            this.teamMembers = usersProject.map((u) => ({
               label: u.FirstName + " " + u.LastName,
               value: u.UserID,
            }));
         } catch (error) {
            console.log("error from members", error);
         }
      },
      async handleImageUpload() {
         const filesSelected = document.getElementById("inputFileToLoad").files;
         if (filesSelected.length > 0) {
            const fileToLoad = filesSelected[0];
            const fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
               const srcData = fileLoadedEvent.target.result;
               this.file = srcData;
            }.bind(this);
            fileReader.readAsDataURL(fileToLoad);
         }
      },
      async updateTeammates(members) {
         this.teamMembers = members;
      },
      async handleSubmit() {
         try {
            const result = await updateProject(
               this.id,
               this.projectTitle,
               this.githubRepo,
               this.websiteUrl,
               this.projectDescription
            );
            console.log(this.teamMembers);
            await updateProjectUsers(this.id, this.teamMembers);
            await updateProjectThumbnail(this.id, this.file);
            this.success = true;
            setTimeout(
               () =>
                  (window.location.href =
                     "/pages/user-project/user-project.html"),
               500
            );
         } catch (error) {
            console.log("error from project", error);
         }
      },
      getProjectId() {
         const queryPart = window.location.search;
         const parts = queryPart.replace("?", "").split("&");
         for (let part of parts) {
            if (part.split("=")[0] === "projectId") {
               return part.split("=")[1];
            }
         }
      },
   },
};

export default ProjectFormComponent;
