import {loginUser} from '../../src/data-access/api-calls/calls.js';
export const FormSection = {
    template: `
    <form class="form-container" @submit.prevent="handleSubmit">
        <div class="alert alert-danger" role="alert" v-if="errorMessage">
        {{ errorMessage }}
        </div>
        <div class="alert alert-success" role="alert" v-if="success">
        Access Granted :)
        </div> 
        <h2 class="form__title">Hello, Welcome</h2>
        <label class="form__label">Email</label>
        <input class="form__input" type="email" placeholder="example@example.com" required v-model="email">
        <label class="form__label">Password (6 or more characters)</label>
        <input class="form__input" type="password" required v-model="password">
        <button class= "form__btn-submit">Sign in</button>
        <label class="form__label-signup">not a memeber?</label>
        <button class= "form__btn-signup" onclick="window.location.href='../sign-up/sign-up.html'">Sign up</button>

        </form>
        
    `,
    data() {
        return {
            email: "",
            password: "",
            passwordError: "invalide email or password",
            //errorMessage: "invali",
            success: false,
        };
    },
    methods: {
        async handleSubmit() {
            this.passwordError =
            this.password.length >= 6
                ? ""
                : "Password contains less than 6 characters!";
            try {
                const result = await loginUser(
                this.email,
                this.password
            );
            //this.errorMessage = "";
            //this.success = true;
            //setTimeout(() => (window.location.href = "/"), 4000);
            } catch (error) {
            this.errorMessage = error;
            console.log("error from login", error);
            }
        },
        
    },
    
};

export default FormSection;