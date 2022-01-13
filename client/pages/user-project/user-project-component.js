import {
   fetchAllProjectUsers,
   fetchUserProjects,
} from "../../src/data-access/api-calls/calls.js";
import ProjectComponent from "/components/project-component.js";

const UserProjectComponent = {
   components: {
      ProjectComponent,
   },
   template: `
      <div class="user-profile-projects" v-if="projects.length>0">
      <div class="edit-project__button">          
          <a class="submit-btn" href="/pages/add-new-project/add-new-project.html">add new project</a>
         </div>
        <div class="user-profile-projects-cards">
            <template v-for="project in projects">
                <project-component :project="project"/>
            </template>
        </div>  
         <nav class = "projects-nav" aria-label="Page navigation example">
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
      </div>
      `,
   computed: {
      showingProjects: function () {
         // `this` points to the vm instance
         const startingPosition = (this.pageCount - 1) * 5;
         return this.projects.slice(startingPosition, startingPosition + 5);
      },
      disablePrevious: function () {
         return this.pageCount === 1;
      },
      disableNext: function () {
         const limit = Math.ceil(this.projects.length / 5);
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
         const id = localStorage.getItem("userId");
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

export default UserProjectComponent;
