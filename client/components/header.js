const HeaderComponent = {

    template: `<div class="header">
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
        <a href="#" class="navbar-brand">
            <img src="/client/public/assets/logo_pc_icon.png" alt="logo" width="85" height="75"
                class="d-sm-inline-block align-top" /> <small>hyf-connect</small></a>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                </li>
            </ul>
            <ul class="navbar-nav">
                <li><a class="nav-link" href="#">about us</a></li>
                <li><a class="nav-link" href="#">members</a></li>
                <li><a class="nav-link" href="#">projects</a></li>
                <li><a class="nav-link" href="#">contact us</a></li>
            </ul>
            <a href="#link" class="btn">Sign in</a>
        </div>
    </div>
</nav>
</div>`
}

export default HeaderComponent; 