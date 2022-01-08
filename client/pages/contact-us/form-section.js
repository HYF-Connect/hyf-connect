// import { registerUser } from "../../src/data-access/api-calls/calls.js";
export const FormSection = {
  template: `
  <div id="section-contact-template" class="section">
      <form method="post" action="/contact#contact_form" id="contact__form" accept-charset="UTF-8" class="contact-form" @submit.prevent="handleSubmit">
      <div class="alert alert-danger" role="alert" v-if="messageError">
        {{ messageError }}
        </div> 
      <input type="hidden" name="form_type" value="contact">
        <input type="hidden" name="utf8" value="✓">
        <div class="image1">
          <img class="rectangle" alt="rectangle" src="/images/contact-us/Rectangle 740.png"/>
        </div> 
        <div class="section contact__text">
          <p class="contact__text1">you have </p>
          <p class="contact__text2"> question </p>
          <p class="contact__text3"> or </p>
          <p class="contact__text4"> suggestion ? </p>
          <p class="contact__text5">contact us!</p>
      </div>
          <div class="contact__columns">
            <br class="clear">
            <div class="three columns alpha">
              <input type="text" id="contactFormName" name="contact" placeholder="Name" autocapitalize="words" value required="required">
              </input>
            </div>
            <div class="three columns omega">
            <input type="email" id="contactFormEmail" name="contact[email]" placeholder="Email" autocorrect="off" autocapitalize="off" value required="required">         </input>
            </div>
            <textarea  class="message" rows="10" cols="25.5"  placeholder="Message" required="required"></textarea>
            <button type="submit" id="action_button" value="submit">submit</button>
          </div>
        <br class="clear">
        <br class="clear">
        <div class="img__left">
        <img class="image2"  src="/images/contact-us/Screenshot_2021-12-08.png"/>
      </div>
      </form>
  <div >
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
            this.message.length <= 500
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
            console.log(`The result: Name: ${this.name}, eMail: ${this.email}, Message: ${this.message}`);
        }
      },
  },
};

export default FormSection;
