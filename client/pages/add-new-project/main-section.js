const MainSection = {
  data: () => ({ message: "Add new project" }),
  template: `
  <div class="addnewproject__banner">
  <h1>Add your new project here!</h1>
</div>
<div class="addnewproject__wrapper">
  <div class="addnewproject__wrapper--form">
    <div class="addnewproject__wrapper--inputfield">
      <label>Project Title</label>
      <input type="text" class="input" placeholder="Your project's title" style="width: 400px">
    </div>
    <div class="addnewproject__wrapper--inputfield">
      <label>Project URL</label>
      <input type="url" class="input" placeholder="url of the project" style="width: 400px">
    </div>
    <div class="addnewproject__wrapper--inputfield">
      <label>Github Repo</label>
      <input type="url" class="input" placeholder="Github repo of the project" style="width: 400px">
    </div>
    <div class="addnewproject__wrapper--inputfield">
      <label>Description</label>
      <textarea class="textarea" placeholder="Describe your project" style="width: 400px; height:50px"></textarea>
    </div>
    <div class="addnewproject__wrapper--inputfield">
      <label>Team Members</label>
      <input type="text" class="input" placeholder="Tag your team member of this project starting with '@' " style="width: 400px">
    </div>
    <div class="addnewproject__wrapper--inputfield">
      <label>Add Thumbnail</label>
      <input type="file" class="input" accept="Image/*" style="width: 400px;">
    </div>
    <div class="addnewproject__wrapper--inputfield">
      <input type="submit" value="save project" class="addnewproject__btn">
    </div>
  </div>
</div>
    `,
};

export default MainSection;
