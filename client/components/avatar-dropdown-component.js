export const AvatarDropdown = {
   props: ["avatar"],
   template: `
  <div class="dropdown avatar-container">
    <a class="" href="#" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
        <img class="avatar-image" v-bind:src="avatar.url" v-if="avatar.url"/>
        <i class="fas fa-user-circle default-avatar-profile-picture" v-else></i>
        <div class="avatar-name">{{avatar.name}}</div>
    </a>
    <ul class="dropdown-menu avatar-dropdown" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="/pages/edit-user-profile/edit-user-profile.html">My profile</a></li>
      <li><a class="dropdown-item" href="/pages/add-new-project/add-new-project.html">My projects</a></li>
      <li><a class="dropdown-item" href="#">Account setting</a></li>
      <li><a class="dropdown-item" href="#">Get help</a></li>
      <li><a class="dropdown-item" href="#">Invite another HYF</a></li>
      <li class="avatar-sign-out-btn-container"><a class="sign-out-btn" href="" v-on:click="logOut">sign out</a></li>
    </ul>
  </div>
    `,
   methods: {
      logOut() {
         localStorage.removeItem("token");
         localStorage.removeItem("username");
      },
   },
};
export default AvatarDropdown;
