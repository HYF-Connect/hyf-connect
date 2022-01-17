const ProjectComponent = {
  props: ["project"],
  template: `  
  <div class="project__component--container">
    <div class="project__thumbnail">
      <img v-bind:src="project.thumbnail" v-if="project.thumbnail" alt="project thumbnail">
      <i class="fas fa-image project project-photo"  v-else></i>
    </div>
    <div class="project__description">
      <div class="project__title-container">
       <div class="title_title">
        <h4 class="project__title" >{{project.title}}</h4>
        </div>
        <div class="project__edit--url" v-if="project.edit_url">
          <a v-bind:href="'/pages/edit-project/edit-project.html?projectId=' + project.edit_url">  <i  class="far fa-edit"></i> </a>
        </div>
      </div>
      <p>{{project.description}}</p>
      <span class="project__subtitle">Team members</span>
      <div class="project__members">
        <template v-for="member in project.members">
          <img v-bind:title="member.FirstName + ' ' + member.LastName" class="project__members__avatar" v-bind:src="member.ProfilePicture" v-if="member.ProfilePicture" v-on:click="navigate(member.UserID)"/>
          <i v-bind:title="member.FirstName + ' ' + member.LastName" class="fas fa-user-circle default-profile-picture" v-on:click="navigate(member.UserID)" v-else></i>
        </template>
      </div>
    </div>
    <div class="project__buttons">
      <div class="project__button" v-bind:class="{'project__button--disabled': !project.github_url}">
        <a v-if="project.github_url" v-bind:href="project.github_url" target="_blank">see project <i class="fab fa-github"></i> </a>
        <a v-else>see project <i class="fab fa-github"></i></a>
      </div>
      <div class="project__button" v-bind:class="{'project__button--disabled': !project.website_url}">
        <a v-if="project.website_url" v-bind:href="project.website_url" target="_blank"   >visit website</a>
        <a v-else> visit website </a>
      </div>
    </div>
  </div>`,
  methods: {
    async navigate(userId) {
      window.location.href = `../user-profile/user-profile.html?memberId=${userId}`;
    },
  },
};

export default ProjectComponent;
