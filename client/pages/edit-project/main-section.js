import MultiSelect from "../../components/multiselect-component.js";
import {
   fetchAllProjectUsers,
   createProject,
   updateProjectUsers,
   fetchProjectById,
   fetchUsers,
   updateProject,
} from "../../src/data-access/api-calls/calls.js";

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
            <div class="outer-area__img">
               <div class="rounded-area__img" >
                  <img class="user-profile-picture" v-if="file" v-bind:src="file"/>
                  <i class="fas fa-user-circle default-profile-picture" v-else ></i>
               </div>
               <input v-on:change="handleImageUpload" id="inputFileToLoad" type="file">
             </div>
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
         id: "",
         websiteUrl: "",
         githubRepo: "",
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
            const id = this.getProjectId();
            if (id === undefined) {
               return;
            }
            this.id = id;
            this.students = await fetchUsers();
            const allUsers = await fetchUsers();
            this.students = allUsers.map((u) => ({
               label: u.FirstName + " " + u.LastName,
               value: u.UserID,
            }));
            const usersProject = await fetchAllProjectUsers(id);
            console.log(usersProject);
            this.teamMembers = usersProject.map((u) => ({
               label: u.FirstName + " " + u.LastName,
               value: u.userID,
            }));
            const project = await fetchProjectById(this.id);
            this.file = project.Thumbnail;
            this.projectTitle = project.Title;
            this.projectDescription = project.Description;
            this.githubRepo = project.GithubURL;
            this.websiteUrl = project.WebsiteURL;
            this.projectThumbnail = project.Thumbnail;
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
               updatePicture(srcData);
            }.bind(this);
            fileReader.readAsDataURL(fileToLoad);
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
      async updateTeammates(members) {
         this.teamMembers = members;
      },
      async handleSubmit() {
         try {
            let result = undefined;
            if (this.id === undefined) {
               result = await createProject(
                  this.projectTitle,
                  this.projectDescription,
                  this.githubRepo,
                  this.websiteUrl
               );
               this.id = result.ProjectID;
            }
            /* } else {
               result = await updateProject(
                  (this.projectTitle = result.Title),
                  (this.projectDescription = result.Description),
                  (this.githubRepo = result.GithubURL),
                  (this.websiteUrl = result.WebsiteURL),
                  (this.projectThumbnail = result.Thumbnail)
               );
            } */

            const users = await updateProjectUsers(this.teamMembers);
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
