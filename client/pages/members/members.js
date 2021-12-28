import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";
import membersTicketSection from "./memebers-ticket-section.js";

const page = Vue.createApp({
components: {
HeaderComponent,
FooterComponent,
MainSection,
membersTicketSection
},
template: `
<div class="page">
<header-component></header-component>
<main-section></main-section>
<members-ticket-section></members-ticket-section>
<members-ticket-section></members-ticket-section>
<members-ticket-section></members-ticket-section>
<members-ticket-section></members-ticket-section>
<members-ticket-section></members-ticket-section>
<members-ticket-section></members-ticket-section>
<members-ticket-section></members-ticket-section>
<footer-component></footer-component>
</div>
`,
}).mount("#members");

export default page;
