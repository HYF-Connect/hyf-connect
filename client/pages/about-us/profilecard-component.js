const ProfileCardComponent = {
    props: ['profile'],
    template: `  
    <div class="profile-card">
    <div class="about-img">
        <img v-bind:src="profile.img"/></div>
        <div class="caption"><h3>{{profile.title}}</h3><p>{{profile.subtitle}}</p>
    </div>
        </div>`
}

export default ProfileCardComponent;

