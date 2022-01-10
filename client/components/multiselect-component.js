const multiSelect = {
   props: ["options", "selection", "dropdownid"],
   data() {
      return { selectedValues: this.selection };
   },
   template: ` <div>
                  <input v-bind:id="dropdownid" v-once class="form-control addnewproject__form--input" type="text">
                  <div class="pills">
                     <span class="badge rounded-pill bg-pill-hyf" v-on:click="removeSelected(s)" v-for="s in selectedValues">{{ s.label }} <i class="fas fa-times"></i></span>
                  </div>
               </div> `,
   mounted: function () {
      function bootstrapComponent() {
         console.log("we are inside the bootstrap component");
         console.log(this.options);
         if (this.options !== undefined && this.options.length > 0) {
            console.log("we are inside the if");
            const ac = new Autocomplete(
               document.getElementById(this.dropdownid),
               {
                  data: this.options,
                  treshold: 0,
                  highlightTyped: true,
                  highlightClass: "text-primary",
                  maximumItems: 10,
                  onSelectItem: ({ label, value }) => {
                     this.selectedValues = [
                        { label, value },
                        ...this.selectedValues,
                     ];
                     this.$emit("new-selection", this.selectedValues);
                     document.getElementById(this.dropdownid).value = "";
                  },
               }
            );
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
