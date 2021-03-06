import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import AvatarDropdown from "../../components/avatar-dropdown-component.js";

const avatarpage = Vue.createApp({
  components: {
    HeaderComponent,
    AvatarDropdown,
    FooterComponent
  },
  template: `
  <header-component></header-component>
  <avatar-dropdown :avatar="avatar"></avatar-dropdown>
  <footer-component></footer-component>
  `,
  data() {
    return {
      avatar: 
        {  
          "name":"Firewyni",
          "url":"/images/members/firewyni.jpg"
        }
    };
  },
}).mount("#avatar-page");

export default avatarpage;