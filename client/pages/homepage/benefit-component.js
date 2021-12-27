const BenefitComponent = {
  props: ['benefit'],
  template: `
  <section class="benefit-section";>  
  <h2 class="benefit__title">Why Hack Your Future Connect</h2>  
  <div class="benefit__container">   
    <div class="benefit__card">
      <img class="benefit__card--avatar" src="images/key_benefit_first.png" alt="" />
      <p class="benefit__card--content">sharing knowledge <br />& opportunities</p> 
    </div>    
    <div class="benefit__card">
        <img class="benefit__card--avatar" src="images/key_benefit_second.png" alt="" />
        <p class="benefit__card--content">build & showcase <br> your portfolio</p> 
    </div>   
    <div class="benefit__card">
        <img class="benefit__card--avatar" src="images/key_benefit_third.png" alt="" />
        <p class="benefit__card--content">grow together <br>& help each other</p> 
    </div>
  </div>
</section>`
}

export default BenefitComponent; 