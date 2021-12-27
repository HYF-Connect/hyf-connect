const BenefitComponent = {
  props: ['benefit'],
  template: `  
    <div class="benefit__card">
      <div><img v-bind:src="benefit.avatar"></div>
      <div>{{benefit.content}}</div>    
    </div>`
}

export default BenefitComponent;