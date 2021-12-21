export const FormSection = {
   template: `
    <form class="sign-up-form" @submit.prevent="handleSubmit">
      <h2>Sign Up</h2>
      <label class="register-label">First Name</label>
      <input type="text" required v-model="firstName">
      <label class="register-label">Last Name</label>
      <input type="text" required v-model="lastName">
      <label class="register-label">Email</label>
      <input type="email" required v-model="email">     
      <label class="register-label">Password</label>
      <input type="password" required v-model="password">
      <p v-if="passwordError"></div>
      <label class="register-label">Confirm Password</label> 
      <input type="password" required v-model="password">
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
         checkedTerms: false,
         passwordError: "",
      };
   },
   methods: {
      handleSubmit() {
         this.passwordError =
            this.password.length >= 6
               ? ""
               : "Password contains less than 6 characters!";
      },
   },
};

export default FormSection;
