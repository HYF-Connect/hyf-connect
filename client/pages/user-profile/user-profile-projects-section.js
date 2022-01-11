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
            <template v-for="project in projects">
                <project-component :project="project"/>
            </template>
        </div>  
      </div>
      `,
  data() {
    return {
      projects: [],
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
  },
  mounted: function () {
    this.getDataOnLoad();
  },
};

export default userProfileProjectsComponent;
