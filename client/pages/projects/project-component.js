const ProjectComponent = {
  props: ['project'],
  template: `  
    <div class="projects__card--component">
      <div class="project__card--left-container">
        <div class="project__card--left-image-container">
          <div class="project__card--left-image"><img v-bind:src="project.thumbnail" alt="project thumbnail"></div>
        </div>
        <div class="project__card--left-buttons">
          <div class="project__github--btn">
            <a v-bind:href="project.github">see project</a>
          </div>
          <div class="project__website--btn">
            <a v-bind:href="project.website">visit website</a>
          </div>
        </div>
      </div>
      <div class="project__card--right-container">
        <h2 class="project__card--right-title" >{{project.title}}</h2>
        <p class="project__card--right-description">{{project.description}}</p>
        <h4 class="project__card--right-subtitle">team members:</h4>
        <p class="project__team--members">{{project.members}}</p>
      </div>
    </div>`
}

export default ProjectComponent;