const BenefitComponent = {
  props: ['benefit'],
  template: `  
    <div class="benefit__card">
      <div class="benefit__card--avatar"><img v-bind:src="benefit.avatar"></div>
      <div class="benefit__card--content">{{benefit.content}}</div>    
    </div>`
}

export default BenefitComponent;