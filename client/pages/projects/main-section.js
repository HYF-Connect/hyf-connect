import ProjectComponent from "/components/project-component.js";

const MainSection = {
  components: {
    ProjectComponent,
  },
  template: `
  <div class="projects__banner--container">
    <div class="projects__banner--title--container">  
      <h2 class="projects__banner--title">Discover all the <span style="color:white">projects</span> built by Hack Your Future's students</h2>
    </div>
    <div class="projects__banner--image--container">
      <img class="projects__banner--image" src="/images/projects/project-page-banner.png" alt="">
    </div> 
  </div>
    <template v-for="project in projects">
      <project-component :project="project"/>
    </template>
  </div>
  `,
  data() {
    return {
      projects: [
        { thumbnail: "https://image.ibb.co/gbiAow/project.jpg", github: "https://github.com/HYF-Connect/hyf-connect", website: "https://hackyourfuture.be/", title: "Project Title", description: "Project description. Maximum length: 40 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At non earum officia porro quae, modi ex quidem, consectetur architecto rem beatae illum sequi quis laudantium repudiandae ipsum repellat veniam eaque consequatur dolorem provident dolorum.", members: "Here goes all the names of the members of the group. Maximum length: 30 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit repellat veniam eaque consequatur dolorem provident dolorum" },
        { thumbnail: "project thumbnail from db.", github: "github link from db", website: "website link from db.", title: "Project Title from db.", description: "Project description from db.", members: "All the Team members from db." },
        { thumbnail: "", github: "", website: "", title: "", description: "", members: "" }
      ],
    };
  },
};

export default MainSection;
