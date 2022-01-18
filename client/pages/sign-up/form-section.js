import { registerUser } from "../../src/data-access/api-calls/calls.js";
export const FormSection = {
  template: `
    <form class="sign-up-form" @submit.prevent="handleSubmit">
      <div class="alert alert-danger" role="alert" v-if="errorMessage">
       {{ errorMessage }}
      </div>
      <div class="alert alert-success" role="alert" v-if="success">
        Your account has been successfully created!
      </div> 
      <h2 class="form__title">Sign up</h2>
      <label class="form__label">First Name</label>
      <input class="form__input" type="text" required v-model="firstName">
      <label class="form__label">Last Name</label>
      <input class="form__input" type="text" required v-model="lastName">
      <label class="form__label">Email</label>
      <input class="form__input" type="email" placeholder="example@example.com" required v-model="email">
      <label class="form__label">Password</label>
      <input class="form__input" type="password" required v-model="password">
      <div class="form__input-warning" v-if="passwordError">{{ passwordError }}</div>
      <label class="form__label">Confirm Password</label> 
      <input class="form__input" type="password" required v-model="confirmPassword">
      <div class="form__input-warning" v-if="passwordCheck">{{ passwordCheck }}</div>  
       <div class="terms-box">  
      <input class="form__input" type="checkbox" v-model="checkedTerms" required>
      <label class="form__label-terms">I've read and agree to the terms and conditions</label>
      </div>
      <button class= "form__btn-submit">create an account</button>
  </form>
    `,
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkedTerms: false,
      passwordError: "",
      passwordCheck: "",
      errorMessage: "",
      success: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.passwordError =
        this.password.length >= 6
          ? ""
          : "Password contains less than 6 characters!";
      this.passwordCheck =
        this.password === this.confirmPassword
          ? ""
          : "Passwords do not match. Try again!";

      try {
        if (this.password !== this.confirmPassword) {
          return;
        }
        const result = await registerUser(
          this.firstName,
          this.lastName,
          this.email,
          this.password
        );
        this.errorMessage = "";
        this.success = true;
        setTimeout(() => (window.location.href = "/"), 3000);
      } catch (error) {
        this.errorMessage = error;
        console.log("error from registration", error);
      }
    },
  },
};

export default FormSection;
