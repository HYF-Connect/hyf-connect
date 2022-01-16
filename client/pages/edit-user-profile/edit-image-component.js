import {
   fetchUserById,
   updatePicture,
} from "../../src/data-access/api-calls/calls.js";

const EditImageComponent = {
   template: `
      <div class="outer-area__img">
            <div class="rounded-area__img" >
              <div class="default-icon">
               <img class="user-profile-picture" v-if="file" v-bind:src="file"/>
                  <i class="fas fa-user-circle default-profile-picture" v-else ></i>
               </div>
            </div>
         <input v-on:change="handleImageUpload" id="inputFileToLoad" type="file">
      </div>
      `,
   data() {
      return {
         file: undefined,
      };
   },
   methods: {
      async getDataOnLoad() {
         const id = localStorage.getItem("userId");
         const user = await fetchUserById(id);
         this.file = user.ProfilePicture;
      },
      async handleImageUpload() {
         const filesSelected = document.getElementById("inputFileToLoad").files;
         if (filesSelected.length > 0) {
            const fileToLoad = filesSelected[0];
            const fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
               const srcData = fileLoadedEvent.target.result;
               this.file = srcData;
               updatePicture(srcData);
            }.bind(this);
            fileReader.readAsDataURL(fileToLoad);
         }
      },
   },
   mounted: function () {
      this.getDataOnLoad();
   },
};

export default EditImageComponent;
