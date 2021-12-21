import { registerUser } from "../../data-access/api-calls/calls.js";

export const FormSection = {
   template: `
    <form class="sign-up-form" @submit.prevent="handleSubmit">
      <div class="alert alert-danger" role="alert" v-if="errorMessage">
       {{ errorMessage }}
      </div>
      <div class="alert alert-success" role="alert" v-if="success">
        User is created!
      </div> 
      <h2>Sign Up</h2>
      <label class="register-label">First Name</label>
      <input type="text" required v-model="firstName">
      <label class="register-label">Last Name</label>
      <input type="text" required v-model="lastName">
      <label class="register-label">Email</label>
      <input type="email" required v-model="email">     
      <label class="register-label">Password</label>
      <input type="password" required v-model="password">
      <div class="warning" v-if="passwordError">{{ passwordError }}</div>
      <label class="register-label">Confirm Password</label> 
      <input type="password" required v-model="confirmPassword">
      <input type="checkbox" v-model="checkedTerms" required>
      <label class="terms-label">I've read and agree to the terms and conditions</label>
      <button class= "btn-submit">Create an account</button>
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
         try {
            const result = await registerUser(
               this.firstName,
               this.lastName,
               this.email,
               this.password
            );
            this.errorMessage = "";
            this.success = true;
            setTimeout(() => (window.location.href = "/"), 6000);
         } catch (error) {
            this.errorMessage = error;
            console.log("error from registration", error);
         }
      },
   },
};

export default FormSection;
