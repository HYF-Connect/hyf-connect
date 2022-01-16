export const AvatarDropdown = {
   props: ["avatar"],
   template: `
   <div class="dropdown avatar-container">
   
  <button class="btn " type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,-5">
    <a class="" href="#" role="button">
        <img class="avatar-image" v-bind:src="avatar.url" v-if="avatar.url"/>
        <i class="fas fa-user-circle default-avatar-profile-picture" v-else></i>
    </a>
<div class="avatar-name">{{avatar.name}}</div>
  </button>
  <ul class="dropdown-menu" id="bg-menu" aria-labelledby="dropdownMenu1" >
    <li><a class="dropdown-item" id="item" href="/pages/edit-user-profile/edit-user-profile.html">My profile</a></li>
      <li><a class="dropdown-item"id="item" href="/pages/user-project/user-project.html">My projects</a></li>
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
