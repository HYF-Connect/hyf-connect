import AvatarDropdown from "./avatar-dropdown-component.js";
import { fetchUserById } from "../src/data-access/api-calls/calls.js";

const HeaderComponent = {
  components: {    AvatarDropdown,  },
  template: `
    <div class="header-container">
      <div class="brand">
        <a href="/pages/homepage/homepage.html" class="logo"><img src="/assets/hyh-connect-logo-header.png" alt="logo" height="80"/></a>
      </div>
      <div class="nav-bar header-menu-horizontal">
          <a class="nav-link" href="/pages/projects/projects.html">projects</a>
          <a class="nav-link" href="/pages/members/members.html">members</a>
          <a class="nav-link" href="/pages/about-us/about-us.html">about us</a>
          <a class="nav-link" href="/pages/contact-us/contact-us.html">contact us</a>
      </div>
      <div class="header-menu-avatar">
        <avatar-dropdown :avatar="avatar" v-if="isLoggedIn"></avatar-dropdown>
        <a class="sign-in-btn" href="/pages/login/login.html" v-else>sign in</a>
      </div>
      <div class="header-menu-burger">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#header-menu-burger">
          <span class="header-burger_line header-burger_line_first"></span>
          <span class="header-burger_line header-burger_line_second"></span>
          <span class="header-burger_line header-burger_line_third"></span>
        </button>
        <div id="header-menu-burger" class="collapse navbar-collapse header-menu-vertical">
          <button class="navbar-toggler header-burger-close" type="button" data-bs-toggle="collapse" 
              data-bs-target="#header-menu-burger">
            <span class="header-menu-close-line"></span>
            <span class="header-menu-close-line"></span>
          </button>
          <a class="burger-link" href="/pages/projects/projects.html">projects</a>
          <a class="burger-link" href="/pages/members/members.html">members</a>
          <a class="burger-link" href="/pages/about-us/about-us.html">about us</a>
          <a class="burger-link" href="/pages/contact-us/contact-us.html">contact us</a>
          <a class="burger-link" href="/pages/login/login.html">sign in</a>
          <a class="burger-link" href="/pages/user-profile/user-profile.html">sign out</a>
        </div >
      </div>
    </div>`,
  data() {
    let isLoggedIn = true;
    //console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") == undefined) {
      isLoggedIn = false;
    }
    return {
      isLoggedIn,
      username: localStorage.getItem("username"),
      avatar: {
        name: localStorage.getItem("username"),
        url: undefined,
      },
    };
  },
  methods: {
    async getDataOnLoad() {
      const id = localStorage.getItem("userId");
      const user = await fetchUserById(id);
      this.avatar.url = user.ProfilePicture;
    },
    logOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.isLoggedIn = false;
    },
  },
  mounted: function () {
    this.getDataOnLoad();
  },
};

export default HeaderComponent;
