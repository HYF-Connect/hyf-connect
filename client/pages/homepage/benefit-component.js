const BenefitComponent = {
  props: ['benefit'],
  template: `
  <section class="benefit-section">  
  <h2 class="benefit__title">Why Hack Your Future Connect</h2>  
  <div class="benefit__container">   
    <div class="benefit__card">
      <div>{{benefit.avatar}}
      <div>{{benefit.content}}      
    </div>    
  </div>
</section>`
}

export default BenefitComponent; 