const HeaderComponent = {
  template: `<div class="header-container">
    <div class="brand">
        <a href="/pages/homepage/homepage.html" class="logo"><img src="/assets/logo_pc_full.png" alt="logo" width="90" height="70"/></a>
        </div>
        <div class="nav-bar">
            <a class="nav-link" href="/pages/projects/projects.html">projects</a>
            <a class="nav-link" href="/pages/members/members.html">members</a>
            <a class="nav-link" href="/pages/about-us/about-us.html">about us</a>
            <a class="nav-link" href="/pages/contact-us/contact-us.html">contact us</a>
        </div>
        <div class="username" v-if="isLoggedIn">{{ username }} 
        <a class="sign-out-btn" href="" v-on:click="logOut">sign out</a>
        </div>
        <a class="sign-in-btn" href="/pages/login/login.html" v-else>sign in</a>
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
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.isLoggedIn = false;
    },
  },
};

export default HeaderComponent;
