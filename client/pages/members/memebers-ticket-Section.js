import memberComponent from "./member-Component.js";

export const membersTicketSection = {
  components: {
    memberComponent,
  },
  template: `
    <div class="members-ticket">
        <template v-for="member in members">
            <member-component :member="member"/>
        </template>
    </div>

`,
  data() {
    return {
      members: [
        {
          avatar: "/images/members/HajirA.jpg",
          username: "Hajir Ali",
          title: "FullStack Developer",
          icon1: "/assets/css-logo.png",
          icon2: "/assets/html-logo.png",
          icon3: "/assets/JS-logo.png",
        },
      ],
    };
  },
};

export default membersTicketSection;
