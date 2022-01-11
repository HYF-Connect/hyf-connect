import ProjectComponent from "/components/project-component.js";
import {
  fetchProjects,
  fetchAllProjectUsers,
} from "../../src/data-access/api-calls/calls.js";
const MainSection = {
  components: {
    ProjectComponent,
  },
  template: `
      <div class="project__banner--container">
      <div class="project-trapezoid"></div>
         <h2 class="project__banner--title">Discover all the <span style="color:white">projects</span> built by HYF students</h2>
         <img src="../../images/projects/project-page-banner.png" alt="project image" class="project__banner--image">
      </div>
      <template v-for="project in showingProjects">
         <project-component :project="project"/>
      </template>
      <nav class = "projects-nav"aria-label="Page navigation example">
      <ul class="projects-pagination">
         <li class="projects-pagination--item">
            <button class="projects-pagination--item__btn" v-on:click="previousPage"
            v-bind:disabled="disablePrevious">
            Previous</button>
         </li>
         {{ pageCount }}
         <li class="projects-pagination--item">
            <button class="projects-pagination--item__btn" v-on:click="nextPage"
            v-bind:disabled="disableNext">
            Next</button>
         </li>
      </ul>
      </nav>;

  `,
  computed: {
    showingProjects: function () {
      // `this` points to the vm instance
      const startingPosition = (this.pageCount - 1) * 5;
      return this.filterItems().slice(startingPosition, startingPosition + 5);
    },
    disablePrevious: function () {
      return this.pageCount === 1;
    },
    disableNext: function () {
      const limit = Math.ceil(this.filterItems().length / 5);
      return this.pageCount === limit;
    },
  },
  data() {
    return {
      projects: [],
      pageCount: 1,
      hyfClass: 0,
      //classes: [],
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
            members: await fetchAllProjectUsers(result[i].ProjectID),
          });
        }
        console.log(this.projects);
      } catch (error) {
        console.log("error from projects", error);
      }
    },
    nextPage() {
      this.pageCount++;
    },
    previousPage() {
      this.pageCount--;
    },

    filterItems() {
      const resultList = [];
      if (this.hyfClass === 0) {
        return this.projects;
      }
      for (let project of this.projects) {
        //console.log(
        //  `memberId ${member.ClassID} - filtering on: ${this.hyfClass}`
        //);
        if (project.ClassID == this.hyfClass) {
          // console.log("They are equal!");
          resultList.push(project);
        }
      }
      //console.log(resultList);
      return resultList;
    },
  },
};
export default MainSection;
