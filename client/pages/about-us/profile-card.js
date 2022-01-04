import ProfileCardComponent from "./profilecard-component.js";

const ProfileCard = {
  components: {
    ProfileCardComponent,
  },
  template: `
  <div class="about-main">
    <template v-for="profile in profiles">
      <profile-component :profile="profile"/>
    </template>
  </div>
  `,
  data() {
    return {
      profiles: [
        { img: "/images/members/MoaminA.png", title: "Moamin", subtitle:"Full stack developer"},
        { img: "/images/members/InggritEN.jpeg",title: "Inggrit",subtitle:"Full stack developer"},
        { img: "/images/members/LauraR.jpg", title: "Laura",subtitle:"Full stack developer"},
        { img: "/images/members/RosaM.jpg", title: "Rosa", subtitle:"Full stack developer"},
        { img: "/images/members/HajirA.jpg",title: "Hajir",subtitle:"Full stack developer"},
        { img: "/images/members/RayaneS.jpg", title: "Rayane",subtitle:"Full stack developer" },
        { img: "/images/members/ReinaldoP.jpg", title: "Reinaldo",subtitle:"Full stack developer" },
        { img: "/images/members/Firewyni.jpg",title: "Firewyni",subtitle:"Full stack developer" },
        { img: "/images/members/MariaP.jpg", title: "Maria",subtitle:"Full stack developer" },
        { img: "/images/members/Axil.png", title: "Axil",subtitle:"Full stack developer" },
      ],
    };
  },
};

export default ProfileCard;