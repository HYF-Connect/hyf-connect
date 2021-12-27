import BenefitComponent from "./benefit-component.js";

const BenefitSection = {
  components: {
    BenefitComponent,
  },
  template: `
  <section class="benefit">
    <template v-for="benefit in benefits">
      <benefit-component :benefit="benefit" />
    </template>
  </section>
  `,
  data() {
    return {
      benefits: [
        { avatar: "./public/images/homepage/key_benefit_first.png", content: "sharing knowledge & opportunities" },
        { avatar: "/images/homepage/key_benefit_second.png", content: "build & showcase your portfolio" },
        { avatar: "/images/homepage/key_benefit_third.png", content: "grow together & help each other" },
      ],
    };
  },
};

export default BenefitSection;