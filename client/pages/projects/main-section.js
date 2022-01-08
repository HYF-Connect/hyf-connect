import ProjectComponent from "/components/project-component.js";

const MainSection = {
  components: {
    ProjectComponent,
  },
  template: `
  <div class="project__banner--container">
    <h2 class="project__banner--title">Discover all the <span style="color:white">projects</span> that have been built by HYF students</h2>
    <img src="../../images/projects/project-page-banner.png" alt="project image" class="project__banner--image">
  </div>
    <template v-for="project in projects">
      <project-component :project="project"/>
    </template>
  </div>
  `,
  data(){
    return {
    projects:[],
    };
    },
    methods: {
    async onload(){
    try {
    const result await fetchProjects();
    for (let i=0; i< result.length; i++){
    this.projects.push({
    thumbnail: result[i].Thumbnail,
    github_url: result[i].GithubURL,
    website_url: result[i].WebsiteURL,
    title: result[i].Title,
    description: result(i).Description,
    })
    }
    }
    }}
    } catch (error) {
      console.log("error from projects", error);
    }

    export default MainSection;



//   data() {
//     return {
//       projects: [
//         { thumbnail: "https://www.ocajatech.com/assets/img/projects.jpg", github_url: "https://github.com/HYF-Connect/hyf-connect", website_url: "https://hackyourfuture.be/", title: "Project Title", description: "Project description. Maximum length: 40 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At non earum officia porro quae, modi ex quidem, consectetur architecto rem beatae illum sequi quis laudantium repudiandae ipsum repellat veniam eaque consequatur dolorem provident dolorum.", members: "Here goes all the names of the members of the group. Maximum length: 30 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit repellat veniam eaque consequatur dolorem provident dolorum" },
//         { thumbnail: "https://pbs.twimg.com/profile_images/1195384351397208065/vPyf0-41_400x400.jpg", github_url: "https://github.com/HYF-Connect/hyf-connect", website_url: "https://hackyourfuture.be/", title: "Project Title", description: "Project description. Maximum length: 40 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At non earum officia porro quae, modi ex quidem, consectetur architecto rem beatae illum sequi quis laudantium repudiandae ipsum repellat veniam eaque consequatur dolorem provident dolorum.", members: "Here goes all the names of the members of the group. Maximum length: 30 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit repellat veniam eaque consequatur dolorem provident dolorum" },
//       ],
//     };
//   },
// };