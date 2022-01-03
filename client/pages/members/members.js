import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import membersTicketComponent from "./memebers-ticket-component.js";
import bannerSection from "./banner-section.js";

const page = Vue.createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    MainSection,
    membersTicketComponent,
    bannerSection,
  },
  template: `
<div class="page">
<header-component></header-component>
<main-section></main-section>
<banner-section></banner-section>
<members-ticket-component></members-ticket-component>
<footer-component></footer-component>
</div>
`,
}).mount("#members");

export default page;
