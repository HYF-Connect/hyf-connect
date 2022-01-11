import memberComponent from "./member-Component.js";
import {
  fetchUsers,
  fetchUserSkills,
  fetchAllClasses,
} from "../../src/data-access/api-calls/calls.js";

export const membersTicketSection = {
  components: {
    memberComponent,
  },
  template: `
     <div class= "members-form__select"> 
      <label class="members-form__select--label">filter by</label>
      <select class="members-form__select--options" v-model="hyfClass">
      <option v-for="hyfClass in classes" v-bind:value="hyfClass.ClassID">{{ hyfClass.Name }}
          </option>
      </select>
     </div>   
    <div class="members-ticket" v-on:load="onload()">
      
        <template v-for="member in showingMembers" >
            <member-component :member="member"  />
        </template>
        <nav aria-label="Page navigation example">
        <ul class="members-pagination">
          <li class="members-pagination--item">
            <button class="members-pagination--item__btn" v-on:click="previousPage" v-bind:disabled="disablePrevious">Previous</button>
          </li>
          {{pageCount}}
          <li class="members-pagination--item">
            <button class="members-pagination--item__btn" v-on:click="nextPage" v-bind:disabled="disableNext">Next</button>
          </li>
        </ul>
      </nav>
    </div>
    

`,
  computed: {
    // a computed getter
    showingMembers: function () {
      // `this` points to the vm instance
      const startingPosition = (this.pageCount - 1) * 5;
      return this.filterItems().slice(startingPosition, startingPosition + 5);
    },
    disablePrevious: function () {
      return this.pageCount === 1;
    },
    disableNext: function () {
      const limit = Math.ceil(this.filterItems().length / 5);
      return this.pageCount === limit;
    },
  },
  data() {
    return {
      members: [],
      pageCount: 1,
      hyfClass: 0,
      classes: [],
    };
  },
  mounted: function () {
    this.onload();
  },
  methods: {
    async onload() {
      try {
        this.classes = [
          { Name: "select all", ClassID: 0 },
          ...(await fetchAllClasses()),
        ];
        //console.log(this.members);
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
        //console.log(imageMap[1]);
        const result = await fetchUsers();

        for (let i = 0; i < result.length; i++) {
          let skills = await fetchUserSkills(result[i].UserID);
          skills = skills.slice(0, 3);

          this.members.push({
            username: result[i].FirstName + " " + result[i].LastName,
            avatar: result[i].ProfilePicture,
            title: result[i].JobTitle,
            ClassID: result[i].ClassID,
            UserID: result[i].UserID,
            icon1: imageMap[skills[0]?.SkillID],
            icon2: imageMap[skills[1]?.SkillID],
            icon3: imageMap[skills[2]?.SkillID],
          });
        }
      } catch (error) {
        console.log("error from members", error);
      }
    },
    nextPage() {
      this.pageCount++;
    },
    previousPage() {
      this.pageCount--;
    },
    filterItems() {
      const resultList = [];
      if (this.hyfClass === 0) {
        return this.members;
      }
      for (let member of this.members) {
        //console.log(
        //  `memberId ${member.ClassID} - filtering on: ${this.hyfClass}`
        //);
        if (member.ClassID == this.hyfClass) {
          // console.log("They are equal!");
          resultList.push(member);
        }
      }
      //console.log(resultList);
      return resultList;
    },
  },
};

export default membersTicketSection;
