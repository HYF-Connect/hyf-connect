import ProfileCardComponent from "./profilecard-component.js";

const ProfileCard = {
  components: {
    ProfileCardComponent,
  },
  template: `
      <template v-for="profile in profiles">
      <profile-card-component :profile="profile"/>
    </template>
  `,
  data() {
    return {
      profiles: [
        { img: "/images/members/MoaminA.png", title: "Moamin", subtitle:"Full Stack Dev"},
        { img: "/images/members/InggritEN.jpeg",title: "Inggrit",subtitle:"UI Design / Frontend Dev"},
        { img: "/images/members/LauraR.jpg", title: "Laura",subtitle:"Frontend Dev"},
        { img: "/images/members/RosaM.jpg", title: "Rosa", subtitle:"Frontend Dev"},
        { img: "/images/members/HajirA.jpg",title: "Hajir",subtitle:"QA & Testing"},
        { img: "/images/members/RayaneS.jpg", title: "Rayane",subtitle:"Full Stack Dev" },
        { img: "/images/members/ReinaldoP.jpg", title: "Reinaldo",subtitle:"UI Design / Frontend Dev" },
        { img: "/images/members/Firewyni.jpg",title: "Firewyni",subtitle:"UI Design / Frontend Dev" },
        { img: "/images/members/MariaP.jpg", title: "Maria",subtitle:"Management" },
        { img: "/images/members/Axil.png", title: "Axil",subtitle:"Management" },
      ],
    };
  },
};

export default ProfileCard;