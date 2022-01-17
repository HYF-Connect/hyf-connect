import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import membersTicketSection from "./members-ticket-Section.js";
import bannerSection from "./banner-section.js";
const page = Vue.createApp({
  components: {
    HeaderComponent,
    FooterComponent,
    MainSection,
    membersTicketSection,
    bannerSection,
  },
  template: `
<div class="page">
<header-component></header-component>
<main-section></main-section>
<banner-section></banner-section>
<members-ticket-section></members-ticket-section>
<footer-component></footer-component>
</div>
`,
}).mount("#members");

export default page;
