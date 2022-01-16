import { sendForm } from "../../src/data-access/api-calls/calls.js";

export const FormSection = {
   template: `
  <div>
      <form method="post" @submit.prevent="handleSubmit">
         <div class="contact__banner">
            <img class="contact__banner--img" src="/images/contact-us/Rectangle 740.png"/>
      
            <div class="contact__banner--text">
               <div class="contact__text contact__text_purple">you have </div>
               <div class="contact__text contact__text_white">a question </div>
               <div class="contact__text contact__text_purple">or </div>
               <div class="contact__text contact__text_white">a suggestion ? </div>
               <div class="contact__text contact__text_purple contact__text_contact">Contact us !</div>
            </div>
         </div> 

         <div class="alert alert-danger" role="alert" v-if="messageError">{{ messageError }}</div>

         <div class="contact__form">
            <div>
               <img class="contact__form--image"  src="/images/contact-us/Screenshot_2021-12-08.png"/>
            </div>
            <div class="contact__input-container">
               <input type="text" class="contact__input" placeholder="Name" required="required" v-model="name">
               <input type="email" class="contact__input" placeholder="Email" required="required" v-model="email">  
               <textarea  class="contact__input" rows="10" placeholder="Message" required="required" v-model="message"></textarea>
               <div class="contact__input alert alert-success" role="alert" v-if="success">Your message was sent, thank you :) </div>
               <div class="container__submit">
                  <button class= "container__submit__btn-submit" type="submit" id="action_button" value="submit">submit</button>
               </div>
            </div>
         </div>
      </form>
  </div>
    `,
   data() {
      return {
         name: "",
         email: "",
         message: "",
         messageError: "",
         messageCheck: "",
         messageConfirm: "",
         success: false,
      };
   },
   methods: {
      async handleSubmit() {
         this.messageError =
            this.message.length <= 500
               ? ""
               : "Message contains more than 500 characters!";
         this.messageCheck =
            this.message === this.messageConfirm
               ? ""
               : "Message do not match, more than 500 characters. Try again!";
         try {
            await sendForm(this.name, this.email, this.message);
            this.errorMessage = "";
            this.success = true;
            setTimeout(
               () =>
                  (window.location.href = "/pages/contact-us/contact-us.html"),
               500
            );
         } catch (error) {
            this.errorMessage = error;
            this.success = false;
            console.log(error);
         }
      },
   },
};

export default FormSection;
