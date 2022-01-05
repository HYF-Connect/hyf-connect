export const filterSection = {
  template: `
 <div class="dropdown" style = "margin: 2% 2% 1% 75%">
  <label class="dropdown-label" style = "margin-right: 10px;">filter by</label>
 <a
    class="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    style = "background-color:rgba(223, 215, 239, 1); color: black;"
  >select filter
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" style = "color:black;" href="#">class15</a>
    <a class="dropdown-item" style = "color:black;" href="#">class 13-14</a>
    <a class="dropdown-item" style = "color:black;" href="#">class 11-12</a>
    <a class="dropdown-item" style = "color:black;" href="#">privouse classes</a>
  </div>
</div>

    `,
};

export default filterSection;
