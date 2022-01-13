import BenefitComponent from "./benefit-component.js";

const BenefitSection = {
  components: {
    BenefitComponent,
  },
  template: `
  <div class="benefit-section">
    <h2 class="benefit__title">Why Hack Your Future Connect</h2>  
    <div class="benefit__container">
      <template v-for="benefit in benefits">
        <benefit-component :benefit="benefit"/>
      </template>
    </div>
  </div>
  `,
  data() {
    return {
      benefits: [
        { avatar: "/images/homepage/key_benefit_first.png", content: "sharing knowledge & opportunities" },
        { avatar: "/images/homepage/key_benefit_second.png", content: "build & showcase your portfolio" },
        { avatar: "/images/homepage/key_benefit_third.png", content: "grow together & help each other" },
      ],
    };
  },
};

export default BenefitSection;