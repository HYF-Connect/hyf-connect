import {
  fetchUserById,
  updatePicture,
} from "../../src/data-access/api-calls/calls.js";

const ProfileImageComponent = {
  template: `
      <div class="outer-area__img">
            <div class="rounded-area__img" >
               <img class="user-profile-picture" v-if="file" v-bind:src="file"/>
               <i class="fas fa-user-circle default-profile-picture" v-else ></i>
            </div>
      </div>
      `,
  data() {
    return {
      file: undefined,
    };
  },
  methods: {
    async getDataOnLoad() {
      const id = this.getMemberId();
      const user = await fetchUserById(id);
      this.file = user.ProfilePicture;
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

export default ProfileImageComponent;
