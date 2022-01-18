import {
  fetchUserById,
  fetchUserSkills,
} from "../../src/data-access/api-calls/calls.js";

const userProfileSkillsComponent = {
  template: `
      <div class="user-profile-projects" v-if="skillImages.length>0">
        <h1 class="user-profile-skills-title">My skills</h1>
        <div class="user-profile-skills">
            <div v-for="skillImage in skillImages" >
              <img class="user-profile-skill" v-bind:src="skillImage" />
            </div>
        </div>  
      </div>
      `,
  data() {
    return {
      skillImages: [],
    };
  },
  methods: {
    async getDataOnLoad() {
      const imageMap = {
        1: "/assets/html-logo.png",
        2: "/assets/css-logo.png",
        3: "/assets/figma-logo.png",
        4: "/assets/JS-logo.png",
        5: "/assets/nodejs-logo.png",
        6: "/assets/react-logo.png",
        7: "/assets/python-logo.png",
        8: "/assets/mongodb-logo.png",
        9: "/assets/MySQL-logo.png",
        10: "/assets/php-logo.png",
        11: "/assets/java-logo.png",
        12: "/assets/github-logo.png",
      };

      const id = this.getMemberId();
      const user = await fetchUserById(id);
      const skills = await fetchUserSkills(id);
      const imgURLs = [];
      for (let skill of skills) {
        imgURLs.push(imageMap[skill.SkillID]);
      }
      this.skillImages = imgURLs;
    },
    getMemberId() {
      const queryPart = window.location.search;
      const parts = queryPart.replace("?", "").split("&");
      for (let part of parts) {
        if (part.split("=")[0] === "memberId") {
          return part.split("=")[1];
        }
      }
    },
  },
  mounted: function () {
    this.getDataOnLoad();
  },
};

export default userProfileSkillsComponent;
