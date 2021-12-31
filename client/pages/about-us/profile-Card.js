import ProfileComponent from "./profileCard-component.js";

const ProfileCard = {
  components: {
    ProfileComponent,
  },
  template: `
  <div class="About-main">
  <div class="profile-card">
    <template v-for="profile in profiles">
      <profile-component:profile="profile"/>
    </template>
  </div>
  </div>
  `,
  data() {
    return {
      Profiles: [
        { img: "/images/members/MoaminA.png", caption: "Moamine","Full stack developer"},
        { img: "/images/members/InggritEN.jpg",caption: "Inggrit","Full stack developer"},
        { img: "/images/members/LauraR.jpg", caption: "Laura","Full stack developer"},
        { img: "/images/members/RosaM.jpg", caption: "Rosa", "Full stack developer"},
        { img: "/images/members/HajirA.jpg",caption: "Hajir","Full stack developer"},
        { img: "/images/members/RayaneS.jpg", caption: "Rayane","Full stack developer" },
        { img: "/images/members/ReinaldoP.jpg", caption: "Reinaldo","Full stack developer" },
        { img: "/images/members/Firewyni.jpg",caption: "Firewyni","Full stack developer" },
        { img: "/images/members/MariaP.jpg", caption: "Maria","Full stack developer" },
        { img: "/images/members/MoaminA.png", caption: "Moamin","Full stack developer" },
      ],
    };
  },
};

export default ProfileCard;