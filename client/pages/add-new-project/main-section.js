import MultiSelect from "../../components/multiselect-component.js";
import { fetchUsers } from "../../src/data-access/api-calls/calls.js";
import { createProject } from "../../src/data-access/api-calls/calls.js";


export const MainSection = {
  components: {
    MultiSelect
  },

  template: `
  <div class="addnewproject__banner">
  <h1>Add your new project here!</h1>
  </div>
  <div class="addnewproject__container" v-on:load="onload()">
  <form class="addnewproject__form" @submit.prevent="handleSubmit">
    <div class="alert alert-success" role="alert" v-if="success">
        Your new project is successfully saved! 
    </div>
    <label class="addnewproject__form--label">Project Title</label>
      <input class="addnewproject__form--input" type="text" placeholder="Your project's title" required v-model="projectTitle">
    <label class="addnewproject__form--label">Project URL</label>
      <input class="addnewproject__form--input" type="url" placeholder="example@example.com" required v-model="websiteUrl">
    <label class="addnewproject__form--label">Github URL</label>
      <input class="addnewproject__form--input" type="url" placeholder="example@github.com" required v-model="githubUrl">
    <label class="addnewproject__form--label">Description</label>
      <textarea class="addnewproject__form--textarea" placeholder="Describe your project" required v-model="projectDescription" style="height:50px"></textarea><br>
    <label class="addnewproject__form--label">Team Members</label>
    <multi-select v-bind:options="students" v-bind:selection="teamMembers" v-on:new-selection="updateTeammates"></multi-select>
    <label class="addnewproject__form--label">Add Thumbnail</label>
      <input class="addnewproject__form--input" type="file" accept="Image/*">
    <button class= "addnewproject__form--btn" v-on:click="handleSubmit">save project</button>
  </form>
</div>
    `,

    data() {
      return {
          projectTitle: "",
          websiteUrl: "",
          githubUrl: "",
          projectDescription:"",
          teamMembers:[],
          students:[],
          projectThumbnail: "",
          success: false,
      }
    },

    mounted: function () {
      this.onload();
    },

    methods: {
    async onload() {
      try {
        const users = await fetchUsers();
        this.students = users.map(u => ({label: u.FirstName + " " + u.LastName, value: u.UserID}))
        console.log(users);
        } catch (error) {
        console.log("error from members", error);
      }
    },

    async updateTeammates(teammates) {
      console.log("teammates", teammates);
    },

    async handleSubmit() {
      try {
        const result = await createProject(this.projectTitle,this.projectDescription,this.githubUrl,this.websiteUrl,this.projectThumbnail);
        this.success = true;
            setTimeout(
              () => (window.location.href = "/"),
              500
            );
      } catch (error) {
        console.log("error  from project", error);
      }
      },
    },
  };

    export default MainSection;
