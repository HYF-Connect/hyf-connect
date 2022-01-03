const ProfileCardComponent = {
    props: ['profile'],
    template: `  
    <div class="about-main">
    <div class="profile-card--img"><img v-bind:src="profile.img"></div>
    <div class="profile__card--title">{{profile.title}}</div>   
    <div class="profile__card--subtitle">{{profile.subtitle}}</div>
</div>`
}

export default ProfileCardComponent;