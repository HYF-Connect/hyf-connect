const TestimonialComponent = {
  props: ['testimonial'],
  template: `  
    <div class="testimonial__card">
      <div class="testimonial__quotes"><img v-bind:src="testimonial.quotes"></div>
      <div class="testimonial__card--content">{{testimonial.content}}</div>    
      <div class="testimonial__avatar"><img v-bind:src="testimonial.avatar"></div>
    </div>`
}

export default TestimonialComponent;