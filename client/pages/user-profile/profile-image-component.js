import {
   fetchUserById,
   updatePicture,
} from "../../src/data-access/api-calls/calls.js";

const ProfileImageComponent = {
   template: `
      <div class="outer-area">
            <div class="rounded-area__img" >
               <img class="profile-picture" v-if="file" v-bind:src="file"/>
               <i class="fas fa-user-circle default-profile-picture" style="font-size:200px" v-else ></i>
            </div>
            <div class="profile-image-jobTitle">
              {{jobTitle}}
            </div>
      </div>
      `,
   data() {
      return {
         file: undefined,
         jobTitle: "",
      };
   },
   methods: {
      async getDataOnLoad() {
         const id = this.getMemberId();
         const user = await fetchUserById(id);
         this.file = user.ProfilePicture;
         this.jobTitle = user.JobTitle;
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
