import ProjectComponent from "/components/project-component.js";
import { fetchProjects } from "../../src/data-access/api-calls/calls.js";
const MainSection = {
   components: {
      ProjectComponent,
   },
   template: `
  <div class="project__banner--container">
    <h2 class="project__banner--title">Discover all the <span style="color:white">projects</span> built by HYF students</h2>
    <img src="../../images/projects/project-page-banner.png" alt="project image" class="project__banner--image">
  </div>
    <template v-for="project in projects">
      <project-component :project="project"/>
    </template>
  `,
   data() {
      return {
         projects: [],
      };
   },
   mounted() {
      this.onload();
   },
   methods: {
      async onload() {
         try {
            const result = await fetchProjects();
            for (let i = 0; i < result.length; i++) {
               this.projects.push({
                  thumbnail: result[i].Thumbnail,
                  github_url: result[i].GithubURL,
                  website_url: result[i].WebsiteURL,
                  title: result[i].Title,
                  description: result[i].Description,
               });
            }
         } catch (error) {
            console.log("error from projects", error);
         }
      },
   },
};
export default MainSection;
