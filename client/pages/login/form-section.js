import {loginUser} from '../../src/data-access/api-calls/calls.js';

export const FormSection = {
    template: `
    <form class="login-form-container" @submit.prevent="handleSubmit">
        <div class="alert alert-danger" role="alert" v-if="passwordError">
        {{ passwordError }}
        </div>
        <div class="alert alert-success" role="alert" v-if="success">
        Access Granted, Welcome 
        </div> 
        <h2 class="login-form__title">Hello, Welcome</h2>
        <label class="login-form__label">Email</label>
        <input class="login-form__input" type="email" placeholder="example@example.com" required v-model="email">
        <label class="login-form__label">Password (6 or more characters)</label>
        <input class="login-form__input" type="password" required v-model="password">
        <button class= "login-form__btn-submit">Sign in</button>
        <label class="login-form__label-signup">not a memeber?</label>
        <button class= "login-form__btn-signup" onclick="window.location.href='../sign-up/sign-up.html'">Sign up</button>
        </form>     
    `,
    data() {
        return {
            email: "",
            password: "",
            passwordError: "",
            success: false,
        };
    },
    methods: {
        async handleSubmit() {

            try {
                const result = await loginUser(
                this.email,
                this.password,
            );
            localStorage.setItem("token", result.token) ;
            this.passwordError = "";
            this.password = "";
            this.success = true;
            setTimeout(() => (window.location.href = "/pages/homepage/homepage.html"), 500);
            } catch (error) {
            this.passwordError = "Invalid email or password";
            this.success = false;
            console.log("error from login", error);
            
            }
        },  
        

    },
};

export default FormSection;