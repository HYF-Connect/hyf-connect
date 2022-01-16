import ProjectFormComponent from "./project-form-component.js";
export const MainSection = {
   components: {
      ProjectFormComponent,
   },
   template: `
   <div class="add-new-project__main">
      <div class="addNewProject__banner">
         <h1 class= "addNewProject__title">add your new project here!</h1>
      </div>
      <project-form-component></project-form-component>
   </div>
   `,
};
export default MainSection;
