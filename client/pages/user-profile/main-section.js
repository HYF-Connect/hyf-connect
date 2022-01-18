import ProfileImageComponent from "./profile-image-component.js";
import {
  fetchUserById,
  fetchUserTypes,
  fetchAllTypes,
} from "../../src/data-access/api-calls/calls.js";

const MainSection = {
  components: {
    ProfileImageComponent,
  },
  template: `
    <div class="profile-user__main">
      <div class="profile__main-arrow-right"></div>
      <div class="profile__main-arrow-left"></div>
      <profile-image-component></profile-image-component>
      <p class= "profile-user__main-title"> Meet <span class= "profile-user__span"> {{ name }}! </span></p>
    </div>
    `,
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    this.getDataOnLoad();
  },
  methods: {
    async getDataOnLoad() {
      const id = this.getMemberId();
      const member = await fetchUserById(id);
      const getAllTypes = await fetchAllTypes();
      const getUserTypes = await fetchUserTypes(id);
      this.name = member.FirstName + " " + member.LastName;
      if (getUserTypes.length > 0) {
        const typeName = getAllTypes.find(
          (all) => all.TypeID === getUserTypes[0].TypeID
        ).Title;
        this.name = typeName.toLowerCase() + " " + this.name;
      }
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
};

export default MainSection;
