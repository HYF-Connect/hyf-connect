const ProjectComponent = {
  props: ['project'],
  template: `  
  <div class="project__component--container">
    <div class="project__thumbnail">
      <img v-bind:src="project.thumbnail" alt="project thumbnail">
    </div>
    <div class="project__description">
      <h4 class="project__title" >{{project.title}}</h4>
      <p>{{project.description}}</p>
      <span class="project__subtitle">Team members</span>
      <p>{{project.members}}</p>
    </div>
    <div class="project__buttons">
      <div class="project__button">
        <a v-bind:href="project.github">see project</a>
      </div>
      <div class="project__button">
        <a v-bind:href="project.website">visit website</a>
      </div>
    </div>
  </div>`
}

export default ProjectComponent;