// import { registerUser } from "../../src/data-access/api-calls/calls.js";
export const FormSection = {
   template: `
   <form class="main__contact">
    <div class="image1">
      <img class="rectangle" alt="rectangle" src="/images/contact-us/Rectangle 740.png"/>
    </div>
    <div class="image2">
      <img alt="screenshot-img" src="/images/contact-us/Screenshot_2021-12-08.png" width="78px" height="78px"/>
    </div>  
      <div class="contact__text">
          <p class="contacts__text1">you have </p>
          <p class="contacts__text2">question</p>
          <p class="contacts__text3">or</p>
          <p class="contacts__text4">suggestion?</p>
          <p class="contacts__text5">contact us!</p>
      </div>
      
    </form>
    <form class="contact-us-form" @submit.prevent="handleSubmit">
      <div class="alert alert-danger" role="alert" v-if="errorMessage">
       {{ errorMessage }}
      </div>
      <div class="alert alert-success" role="alert" v-if="success">
        Your message has been send it successfully !
      </div> 
      <label class="form__label">Name</label>
      <input class="form__input" type="text" required v-model="firstName">
      <label class="form__label">Email</label>
      <input class="form__input" type="email" required v-model="email">
      <label class="form__label">Message</label>
      <input class="form__input" type="message" required v-model="message">
      <div class="form__input-warning" v-if="messageError">{{ messageError }}</div>
      
      <button class= "form__btn-submit">submit</button>
  </form>
    `,
   data() {
      return {
         name: "",
         email: "",
         message: "",
         messageError: "",
         messageCheck: "",
         messageConfirm:"",
         success: false,
      };
   },
   methods: {
      async handleSubmit() {
         this.messageError =
            this.message.length >= 500
               ? ""
               : "Message contains more than 500 characters!";
         this.messageCheck =
            this.message === this.messageConfirm
               ? ""
               : "Message do not match, more than 500 characters. Try again!";
         try {
            const result = await contactUs(
               this.name,
               this.email,
               this.message
            );
            this.errorMessage = "";
            this.success = true;
            setTimeout(() => (window.location.href = "/"), 4000);
         } catch (error) {
            this.errorMessage = error;
            console.log("error from message", error);
         }
      },
   },
};

export default FormSection;
