const MainSection = {
  data: () => ({ message: "Add new project" }),
  template: `
  <div class="addnewproject__banner">
  <h1>Add your new project here!</h1>
</div>
<div class="addnewproject__container">
  <form class="addnewproject__form">
    <label class="addnewproject__form--label">Project Title</label>
      <input class="addnewproject__form--input" type="text" placeholder="Your project's title" required v-model="projectTitle" style="width: 400px">
    <label class="addnewproject__form--label">Project URL</label>
      <input class="addnewproject__form--input" type="url" placeholder="example@example.com" required v-model="websiteUrl" style="width: 400px">
    <label class="addnewproject__form--label">Github Repo</label>
      <input class="addnewproject__form--input" type="url" placeholder="example@github.com" required v-model="githubRepo" style="width: 400px">
    <label class="addnewproject__form--label">Description</label>
      <textarea class="addnewproject__form--textarea" placeholder="Describe your project" required v-model="projectDescription" style="width: 400px; height:50px"></textarea>
    <label class="addnewproject__form--label">Team Members</label>
      <!-- <input class="addnewproject__form--input" type="text" placeholder="Tag your team member of this project starting with '@' " style="width: 400px"> -->
      <select class="select" multiple data-mdb-filter="true">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
        <option value="7">Seven</option>
        <option value="8">Eight</option>
        <option value="9">Nine</option>
        <option value="10">Ten</option>
      </select>
    <label class="addnewproject__form--label">Add Thumbnail</label>
      <input class="addnewproject__form--input type="file" accept="Image/*" style="width: 400px;">
    <button class= "addnewproject__form--btn" v-on:click="handleSubmit">save project</button>
    </div>
  </form>
</div>
    `,
    data() {
      return {
          projectTitle: "",
          websiteUrl: "",
          githubRepo: "",
          projectDescription:"",
      };
},

methods: {
  async handleSubmit() {

      try {
          const result = await loginUser(
          this.email,
          this.password,
      );
      localStorage.setItem("token", result.token) ;
      localStorage.setItem('username', result.userName);
      this.passwordError = "";
      this.password = "";
      this.success = true;
      setTimeout(() => (window.location.href = "/pages/homepage/homepage.html"), 500);
      } catch (error) {
      this.passwordError = "Invalid email or password";
      this.success = false;
      console.log("error from login", error);
      }
  },  

},
};

export default MainSection;
