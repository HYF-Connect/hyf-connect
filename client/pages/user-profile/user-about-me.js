import {
  fetchUserById,
  updatePicture,
} from "../../src/data-access/api-calls/calls.js";

const ProfileBioComponent = {
  template: `
      <div class="user-about-me-box">
      <h1 class="user-about-me--title">About me</h1>   
      <span class="user-about-me-text">{{bio}}</span>   
      </div>
      `,
  data() {
    return {
      bio: "",
    };
  },
  methods: {
    async getDataOnLoad() {
      const id = this.getMemberId();
      const user = await fetchUserById(id);
      this.bio = user.Bio;
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

export default ProfileBioComponent;
