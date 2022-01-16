import { sendForm } from "../../src/data-access/api-calls/calls.js";

export const FormSection = {
  template: `
  <div id="section-contact-template" class="section">
      <form method="post" action="/contact#contact_form" id="contact__form" accept-charset="UTF-8" class="contact-form" @submit.prevent="handleSubmit">
      <div class="alert alert-danger" role="alert" v-if="messageError">
        {{ messageError }}
        </div>  
        <div class="image1">
          <img class="rectangle" alt="rectangle" src="/images/contact-us/Rectangle 740.png"/>
       
        <div class="contact__text">
        <span class="contact__text">
          <span class="contact__text_color">Do you have
          <span class="contact__text_white"> question </span>
          <span class="contact__text_purple"> or </span>
          <span class="contact__text_white"> suggestion</span>
          <span class="contact__text_purple"> ? </span>
          <br>
          <span class="contact__tex5">contact us! </span>
          </span>
          </span>
        </div>
         </div> 
        <div class="contact__form">
          <div class="img__left">
            <img class="contact__input_image"  src="/images/contact-us/Screenshot_2021-12-08.png"/>
          </div>
          <div class="contact__columns">
          <input type="text" class="contact__input" id="contactFormName" name="contact" placeholder="Name" autocapitalize="words" value required="required" v-model="name">
          <input type="email" class="contact__input" id="contactFormEmail" name="contact[email]" placeholder="Email" autocorrect="off" autocapitalize="off" value required="required" v-model="email">  
            <div class="container__textarea">
              <textarea  class="contact__input-message" rows="10" cols="25.5" placeholder="Message" required="required" v-model="message"></textarea>
            </div>
            <div class="contact__input alert alert-success" role="alert" v-if="success">
              Your message was sent, thank you :)
            </div>
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
          () => (window.location.href = "/pages/contact-us/contact-us.html"),
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
