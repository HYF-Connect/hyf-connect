import TestimonialComponent from "./testimonial-component.js";

const TestimonialSection = {
  components: {
    TestimonialComponent,
  },
  template: `
  <div class="testimonial__section">  
    <h2 class="testimonial__title">listen to their stories about the community</h2>
    <div class="testimonial__container">
      <template v-for="testimonial in testimonials">
        <testimonial-component :testimonial="testimonial"/>
      </template>
    </div>
    <a class="members__link-btn" href="/pages/members/members.html">see all members</a>
    <div class="testimonial__background"></div>
  </div>
  `,
  data() {
    return {
      testimonials: [
        { quotes: "/assets/quote_icon.png", avatar: "/assets/bermarte.jpg", content: "I recommend to all newcomers in Belgium who want to seriously start a career in web development to participate in the HYF program. With HYF you'll find a dedicated and brought up to date training curriculum, there is nothing better. Bernardo Martelli." },
        { quotes: "/assets/quote_icon.png", avatar: "/images/members/RayaneS.jpg", content: "The Landscaping Professionals were quick, courteous and very helpful. They helped me restore my lawn and gardens completely after putting in my deck. I was worried it wouldnt be done in time for my garden party, but they finished the job with time to spare!" },
        { quotes: "/assets/quote_icon.png", avatar: "/images/members/LauraR.jpg", content: "The Landscaping Professionals were quick, courteous and very helpful. They helped me restore my lawn and gardens completely after putting in my deck. I was worried it wouldnt be done in time for my garden party, but they finished the job with time to spare!" },
      ],
    };
  },
};

export default TestimonialSection;