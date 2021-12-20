export const FormSection = {
   data: () => ({ message: "Sign up" }),
   template: `
    <form>
      <h2>Sign Up</h2>
      <label for="first name">First name</label>
        <input id="first-name" v-model="first-name" type="text"  required>
      <label for="last name">Last name</label>
        <input id="last-name" v-model="last-name" type="text"  required>
      <label for="email">Email</label>
        <input id="email" v-model="email" type="email"  required>
      <label for="password">Password</label>  
        <input id="password" v-model="password" type="password"  required>    
      <label for="confirm password">Confirm Password</label> 
        <input id="password" v-model="password" type="password"  required>
      <div>
          <input id="terms" v-model="terms" type="checkbox" required>
          <label for "terms and conditions">I've read and agree to the terms and conditions</label>
      </div>
      <div class="button-account">
        <button class="submit" type="submit">Create an account</button>
      </div>
    </form>
    `,
};

export default FormSection;
