// import { registerUser } from "../../src/data-access/api-calls/calls.js";
export const FormSection = {
  template: `
  <div id="section-contact-template" class="section">
      <form method="post" action="/contact#contact_form" id="contact__form" accept-charset="UTF-8" class="contact-form">
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
          <div class="img">
            <img class="image2"  src="/images/contact-us/Screenshot_2021-12-08.png"/>
          </div>
          <div class="contact__columns">
            <br class="clear">
            <div class="three columns alpha">
              <label for="contactFormName">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Name</font>
                </font>
                <span class="white">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">*</font>
                  </font>
                </span>
              </label>
              <input type="text" id="contactFormName" name="contact" placeholder="name" autocapitalize="words" value required="required">
                <div pseudo="-webkit-input-placeholder" id="placeholder" style="display: block !important;">Name</div>
              </input>
            </div>
          <div class="three columns omega">
            <label for="contactForEmail">Email
              <span class="white">*</span>
            </label>
            <input type="email" id="contactFormEmail" name="contact[email]" placeholder="Email" autocorrect="off" autocapitalize="off" value required="required">
            
              <div pseudo="-webkit-input-placeholder" id="placeholder" style="display: block !important;">Email
              </div>
            </input>
          </div>
          <label for="contactFormMessage">Message
            <span class="white">*
            </span>
          </label>
          <textarea rows="5" id="contactFormMessage" name="contact[body]" placeholder="Message" required="required">
            <div pseudo="-webkit-input-placeholder" id="placeholder" style="display: block !important;">Message
            </div>
          </textarea>
          <input type="submit" class="submit action_button" value="submit">submit</input>
        </div>
        <br class="clear">
        <br class="clear">
      </form>
  <div >
    `,
   // data() {
   //    return {
   //       name: "",
   //       email: "",
   //       message: "",
   //       messageError: "",
   //       messageCheck: "",
   //       messageConfirm:"",
   //       success: false,
   //    };
   // },
   // methods: {
   //    async handleSubmit() {
   //       this.messageError =
   //          this.message.length >= 500
   //             ? ""
   //             : "Message contains more than 500 characters!";
   //       this.messageCheck =
   //          this.message === this.messageConfirm
   //             ? ""
   //             : "Message do not match, more than 500 characters. Try again!";
   //       try {
   //          const result = await contactUs(
   //             this.name,
   //             this.email,
   //             this.message
   //          );
   //          this.errorMessage = "";
   //          this.success = true;
   //          setTimeout(() => (window.location.href = "/"), 4000);
   //       } catch (error) {
   //          this.errorMessage = error;
   //          console.log("error from message", error);
   //       }
   //    },
   // },
};

export default FormSection;
