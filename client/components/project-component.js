const ProjectComponent = {
  props: ['project'],
  template: `  
  <div class="project__component--container">
    <div class="project__thumbnail"><img v-bind:src="project.thumbnail" alt="project thumbnail"></div>
    <div class="project__buttons">
      <div class="project__github--url">
        <a v-bind:href="project.github">see project</a>
      </div>
      <div class="project__website--url">
        <a v-bind:href="project.website">visit website</a>
      </div>
    </div>
    <div class="project__component_description">
      <h4 class="project__title" >{{project.title}}</h4>
      <p class="project__description">{{project.description}}</p>
      <span class="project__subtitle">team members:</span>
      <p class="project__members">{{project.members}}</p>
    </div>
  </div>`
}

export default ProjectComponent;