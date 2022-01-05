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
        <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
    

`,
  data() {
    return {
      members: [
        {
          username: "",
          title: "",
          icon1: "/assets/css-logo.png",
          icon2: "/assets/html-logo.png",
          icon3: "/assets/JS-logo.png",
          avatar: "",
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
        //console.log(result);
        const skillsResult = await fetchSkills();
        //console.log(skillsResult);
        for (let i = 0; i < result.length; i++) {
          this.members[i].username =
            result[i].FirstName + " " + result[i].LastName;
          this.members[i].avatar = result[i].ProfilePicture;
          this.members[i].title = result[i].JobTitle;
          //this.members[i].icon1 = skillsResult[i].SelectedSkill;
          //this.members[i].icon1 = skillsResult[i].SkillID;
          //this.members[i].icon2 = skillsResult[i].SelectedSkill;
          //this.members[i].icon2 = skillsResult[i].SkillID;
          //this.members[i].icon3 = skillsResult[i].SelectedSkill;
          //this.members[i].icon3 = skillsResult[i].SkillID;

          this.members.push(result[i]);
        }
      } catch (error) {
        console.log("error from members", error);
      }
    },
  },
};

export default membersTicketSection;
