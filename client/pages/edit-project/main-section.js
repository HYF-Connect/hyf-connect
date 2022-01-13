import ProjectFormComponent from "./project-form-component.js";
export const MainSection = {
   components: {
      ProjectFormComponent,
   },
   template: `
   <div class="add-new-project__main">
      <div class="editProject__banner">
         <h1 class= "editProject__title">edit your project here!</h1>
      </div>
      <project-form-component></project-form-component>
   </div>
   `,
};
export default MainSection;
