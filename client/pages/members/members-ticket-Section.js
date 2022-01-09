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
          <li class="memers-pagination--item">
            <button class="memers-pagination--item__btn" v-on:click="previousPage" v-bind:disabled="disablePrevious">Previous</button>
          </li>
          {{pageCount}}
          <li class="memers-pagination--item">
            <button class="memers-pagination--item__btn" v-on:click="nextPage" v-bind:disabled="disableNext">Next</button>
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
      hyfClass: -1,
      classes: [
        { ClassID: -1, Name: "Show all" },
        { ClassID: 1, Name: "Class 11-12" },
        { ClassID: 2, Name: "Class 13-14" },
        { ClassID: 3, Name: "Class 15" },
        { ClassID: 4, Name: "Lab Antwerp 1" },
      ],
    };
  },
  mounted: function () {
    this.onload();
  },
  methods: {
    async onload() {
      try {
        //this.classes = await fetchClasses();
        //this.classes = [{ Name: "select all", ClassID: -1 }, ...(await fetchClasses())];

        const imageMap = {
          1: "/assets/css-logo.png",
          2: "/assets/html-logo.png",
          3: "/assets/JS-logo.png",
          4: "/assets/logo-facebook.svg",
          5: "/assets/logo-github.svg",
          6: "/assets/logo-instagram.svg",
          7: "/assets/quote_icon.png",
          8: "/assets/logo_pc_full.png",
          9: "/assets/JS-logo.png",
          10: "/assets/JS-logo.png",
        };
        //console.log(imageMap[1]);
        const result = await fetchUsers();
        //console.log(result);

        //const skillsResult = await fetchUserSkills();
        //console.log(skillsResult);

        const classResult = await fetchAllClasses();
        //console.log(classResult);
        for (let i = 0; i < result.length; i++) {
          const skillsResult = await fetchUserSkills(result[i].UserID);
          //console.log(skillsResult);
          this.members.push({
            username: result[i].FirstName + " " + result[i].LastName,
            avatar: result[i].ProfilePicture,
            title: result[i].JobTitle,
            ClassID: classResult[i].ClassID,
            //skills: await fetchUserSkills(result[i].UserID),
            // icon1: imageMap[skillsResult.SkillID],
            // icon2: imageMap[skillsResult.SkillID],
            // icon3: imageMap[skillsResult.SkillID],
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
      if (this.hyfClass === -1) {
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
