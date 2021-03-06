const multiSelect = {
  props: ["options", "selection", "dropdownid"],
  data() {
    return { selectedValues: this.selection };
  },
  template: ` <div class="select-container">
                  <div class="select-menu">
                     <input v-bind:id="dropdownid" v-once class="form-control-ms addnewproject__form--input" type="text" placeholder="multiple answers are possible">
                     <div class="selected-tags">
                        <span class="badge rounded-pill bg-pill-hyf" v-on:click="removeSelected(s)" v-for="s in selectedValues">{{ s.label }} <i class="fas fa-times"></i></span>
                     </div>
                  </div>
               </div> `,
  mounted: function () {
    function bootstrapComponent() {
      if (this.options !== undefined && this.options.length > 0) {
        const ac = new Autocomplete(document.getElementById(this.dropdownid), {
          data: this.options,
          treshold: 0,
          highlightTyped: true,
          highlightClass: "text-primary",
          maximumItems: 10,
          onSelectItem: ({ label, value }) => {
            this.selectedValues = [{ label, value }, ...this.selectedValues];
            this.$emit("new-selection", this.selectedValues);
            document.getElementById(this.dropdownid).value = "";
          },
        });
      } else {
        setTimeout(bootstrapComponent.bind(this), 1000);
      }
      if (this.selection.length != 0) {
        this.selectedValues = this.selection;
        this.$emit("new-selection", this.selectedValues);
      }
    }
    setTimeout(bootstrapComponent.bind(this), 1000);
  },

  methods: {
    removeSelected(selected) {
      this.selectedValues = this.selectedValues.filter(
        (v) => v.value !== selected.value
      );
      this.$emit("new-selection", this.selectedValues);
    },
  },
};
export default multiSelect;
