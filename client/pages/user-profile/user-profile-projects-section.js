import {
  fetchUserById,
  fetchAllProjectUsers,
  fetchUserProjects,
} from "../../src/data-access/api-calls/calls.js";
import ProjectComponent from "/components/project-component.js";

const userProfileProjectsComponent = {
  components: {
    ProjectComponent,
  },
  template: `
      <div class="user-profile-projects" v-if="projects.length>0">
        <h1 class="user-profile-projects-title">My projects</h1>
        <div class="user-profile-projects-cards">
            <template v-for="project in showingProjects">
                <project-component :project="project"/>
            </template>
              <nav class="projects-nav" aria-label="Page navigation example">
                <ul class="projects-pagination">
                  <li class="projects-pagination--item">
                    <button class="projects-pagination--item__btn" v-on:click="previousPage" v-bind:disabled="disablePrevious">
                      Previous</button>
                  </li>
                  {{ pageCount }}
                  <li class="projects-pagination--item">
                    <button class="projects-pagination--item__btn" v-on:click="nextPage" v-bind:disabled="disableNext">
                      Next </button>
                  </li>
                </ul>
              </nav>
        </div>  
      </div>
      `,
  computed: {
    showingProjects: function () {
      // `this` points to the vm instance
      const startingPosition = (this.pageCount - 1) * 3;
      return this.projects.slice(startingPosition, startingPosition + 3);
    },
    disablePrevious: function () {
      return this.pageCount === 1;
    },
    disableNext: function () {
      const limit = Math.ceil(this.projects.length / 3);
      return this.pageCount === limit;
    },
  },
  data() {
    return {
      projects: [],
      pageCount: 1,
    };
  },
  methods: {
    async getDataOnLoad() {
      const id = this.getMemberId();
      const user = await fetchUserById(id);
      const result = await fetchUserProjects(id);
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

    nextPage() {
      this.pageCount++;
    },
    previousPage() {
      this.pageCount--;
    },
  },
  mounted: function () {
    this.getDataOnLoad();
  },
};

export default userProfileProjectsComponent;
