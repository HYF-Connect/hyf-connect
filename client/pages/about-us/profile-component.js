const ProfileComponent = {
    props: ['profile'],
    template: `  
    <div class="About-main">
        <div class="profile-card--img"><img v-bind:src="profile.img"></div>
        <div class="profile__card--caption">{{profile.caption}}</div>    
    </div>`
}

export default ProfileComponent;