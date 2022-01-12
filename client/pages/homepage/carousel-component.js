const CarouselComponent = {
  template: `
  <div class="homepage__carousel">
      <h2 class="carousel__title">see what we have achieved as HYF community!</h2>
      <div class="homepage-carousel-container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="/images/homepage/projectcard_class13-14_handandpaw.png" alt="First slide">
              <h2 class="slide__tittle">hand and paw / class 13-14</h2>
              <p class="slide__description">Hand and paw makes animal adoption easier <br> for people, shelters and animals.</p>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/images/homepage/projectcard_class13-14_readeer.png" alt="Second slide">
              <h2 class="slide__tittle">readeer / class 13-14</h2>
              <p class="slide__description">Readeer promotes reading and sharing <br> books among children and parents.</p>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/images/homepage/projectcard_class11-12_just4giving.png" alt="Third slide">
              <h2 class="slide__tittle">just4giving / class 11-12</h2>
              <p class="slide__description">Just4Giving connect those who wants <br> to share with others in need.</p>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/images/homepage/projectcard_class11-12_helpy.png" alt="Fourth slide">
              <h2 class="slide__tittle">helpy / class 11-12</h2>
              <p class="slide__description">Platform to link people who need help with their groceries to volunteers who are willing to help.</p>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/images/homepage/projectcard_class9-10_hearmystory.png" alt="Fifth slide">
              <h2 class="slide__tittle">hearmystory / class 9-10</h2>
              <p class="slide__description">Be heard in your words, <br>on your own terms.</p>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>
      </div>
      <a class="carousel__projects--btn" href="pages/projects/projects.html">see all the projects</a>
    </div>
`
}

export default CarouselComponent; 