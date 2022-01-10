const memberComponent = {
  props: ["member"],
  template: `  
    <div class="members-ticket__card" v-on:click="navigate">
        <div class="members-ticket__card-img">
            <img class="members-ticket__card-img--member" v-bind:src="member.avatar" v-if="member.avatar">
            <i class="fas fa-user-circle default-profile-picture" v-else></i>
        </div>
        <div class="members-ticket__card-content">
            <p class="members-ticket__card-content--name">{{member.username}}</p>
            <p class="members-ticket__card-content--title">{{member.title}}</p>
        </div>    
        <div class="members-ticket__card-icons">
            <img class="members-ticket__card-icon" v-bind:src="member.icon1" v-if="member.icon1">
            <img class="members-ticket__card-icon" v-bind:src="member.icon2" v-if="member.icon2">
            <img class="members-ticket__card-icon" v-bind:src="member.icon3" v-if="member.icon3">
        </div>
    </div>`,
  methods: {
    async navigate() {
      window.location.href = `../user-profile/user-profile.html?memberId=${this.member.UserID}`;
    },
  },
};

export default memberComponent;
