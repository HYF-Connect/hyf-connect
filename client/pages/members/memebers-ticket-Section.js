import memberComponent from "./member-Component.js";
import { fetchUsers } from "../../src/data-access/api-calls/calls.js";
import { fetchSkills } from "../../src/data-access/api-calls/calls.js";

export const membersTicketSection = {
  components: {
    memberComponent,
  },
  template: `
    <div class="members-ticket" v-on:load="onload()">
        <template v-for="member in members" >
            <member-component :member="member" />
        </template>
        
    </div>
    

`,
  data() {
    return {
      members: [
        {
          username: "",
          title: "FullStack Developer",
          icon1: "/assets/css-logo.png",
          icon2: "/assets/html-logo.png",
          icon3: "/assets/JS-logo.png",
          avatar: "/images/members/HajirA.jpg",
        },
      ],
    };
  },
  mounted: function () {
    this.onload();
  },
  methods: {
    async onload() {
      try {
        const result = await fetchUsers();
        const skillsResult = await fetchSkills();
        console.log(skillsResult[1].SelectedSkill);
        for (let i = 0; i < result.length; i++) {
          this.members[i].username =
            result[i].FirstName + " " + result[i].LastName;
          this.members[i].avatar = result[i].ProfilePicture;
          this.members[i].title = result[i].JobTitle;
          //this.members[i].icon1 = skillsResult[i].SelectedSkill;
          //this.members[i].icon2 = skillsResult[i].SelectedSkill;
          //this.members[i].icon3 = skillsResult[i].SelectedSkill;

          this.members.push(result[i]);
        }
      } catch (error) {
        console.log("error from members", error);
      }
    },
  },
};

export default membersTicketSection;
