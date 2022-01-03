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
      <multiselect
      v-model="value"
      placeholder="city name?"
      label="city" track-by="city_ascii"
      :options="options"
      :multiple="true"
      :taggable="true"
    ></multiselect>
    <label class="addnewproject__form--label">Add Thumbnail</label>
      <input class="addnewproject__form--input" type="file" accept="Image/*" style="width: 400px;">
    <button class= "addnewproject__form--btn" v-on:click="handleSubmit">save project</button>
  </form>
</div>
    `,

    components: { Multiselect: window.VueMultiselect.default },
    data() {
      return {
          projectTitle: "",
          websiteUrl: "",
          githubRepo: "",
          projectDescription:"",
          teamMembers:[],
          students:["Yoshi", "Moamin", "Rayane"],
          value: [],
          options: [
                  {
                    "city": "San Martin",
                    "city_ascii": "San Martin",
                    "lat": -33.06998533,
                    "lng": -68.49001612,
                    "pop": 99974,
                    "country": "Argentina",
                    "iso2": "AR",
                    "iso3": "ARG",
                    "province": "Mendoza",
                    "timezone": "America/Argentina/Mendoza"
                  },
                  {
                    "city": "San Nicolas",
                    "city_ascii": "San Nicolas",
                    "lat": -33.33002114,
                    "lng": -60.24000289,
                    "pop": 117123.5,
                    "country": "Argentina",
                    "iso2": "AR",
                    "iso3": "ARG",
                    "province": "Ciudad de Buenos Aires",
                    "timezone": "America/Argentina/Buenos_Aires"
                  },
                  {
                    "city": "San Francisco",
                    "city_ascii": "San Francisco",
                    "lat": -31.43003375,
                    "lng": -62.08996749,
                    "pop": 43231,
                    "country": "Argentina",
                    "iso2": "AR",
                    "iso3": "ARG",
                    "province": "Córdoba",
                    "timezone": "America/Argentina/Cordoba"
                  }
                ],
      }
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
