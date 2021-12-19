const MainSection = {
  data: () => ({ message: 'Members Main' }),
  template: `
  <div class="main">
    <h1>{{message}}</h1>
    <button v-on:click="message += ' row'">Add</button>
  </div>
  `
}

export default MainSection; 