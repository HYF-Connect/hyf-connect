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
    <a class="members__link-btn" href="/pages/members/members.html">members</a>
    <div class="testimonial__background"></div>
  </div>
  `,
  data() {
    return {
      testimonials: [
        { quotes: "/assets/quote_icon.png", avatar: "/assets/bermarte.jpg", content: "I recommend to all newcomers in Belgium who want to seriously start a career in web development to participate in the HYF program. With HYF you'll find a dedicated and brought up to date training curriculum, there is nothing better. Bernardo Martelli." },
        { quotes: "/assets/quote_icon.png", avatar: "/assets/Mame.jpeg", content: "School and teachers are very important to people who have dreams. HYF has shown me many things for tech and self-development. Currently, I am working as a web developer. I would like to improve my tech knowledge and in the future learn mobile applications and AI as a hobby. I am so grateful to the people who helped me during my journey. Mamé Azad" },
        { quotes: "/assets/quote_icon.png", avatar: "/assets/Alina.jpg", content: "I've joined the HYF program to learn how to become a web-developer, but this course gave me so much more than knowledge of technology. Support of incredibly compassionate and dedicated HYF team gave me inspiration and strength to follow my ambitious attempt to change my life for the best. Alina Marasca" },
      ],
    };
  },
};

export default TestimonialSection;