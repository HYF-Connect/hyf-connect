const memberComponent = {
  props: ["member"],
  template: `  
    <div class="members-ticket__card">
        <div class="members-ticket__card-img"><img class="members-ticket__card-img--member"v-bind:src="member.avatar"></div>
        <div class="members-ticket__card-content">
            <p class="members-ticket__card-content--name">{{member.username}}</p>
            <p class="members-ticket__card-content--title">{{member.title}}</p>
        </div>    
        <div class="members-ticket__card-icons">
            <img class="members-ticket__card-icon" v-bind:src="member.icon1">
            <img class="members-ticket__card-icon" v-bind:src="member.icon2">
            <img class="members-ticket__card-icon" v-bind:src="member.icon3">
        </div>
    </div>`,
};

export default memberComponent;
