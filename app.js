// Tooggle input search and menu

const search = document.getElementById("search");
const menu = document.getElementById("navigation-toogle");

document.getElementById("search-icon").addEventListener("click", (e) => {

    search.classList.toggle("toogle-left-search")
});

document.getElementById("menu-icon").addEventListener("click", (e) => {

    menu.classList.toggle("toogle-left-menu")
});

// Quitar default target
var sliderMenu1 = document.getElementById("slider-menu-1")
var linkExclusive1 = document.getElementById("link-exclusive1")

const quitarDefaultTargetSlider = () => {

    sliderMenu1.classList.remove("opacity1-default")
    linkExclusive1.classList.add("menu-exclusiveDefault")
}

const quitarDefaultTargetExclusive = () => {

    linkExclusive1.classList.remove("menu-exclusiveDefault")
    sliderMenu1.classList.add("opacity1-default")
}

// Cards kind dreess

const contentExclusiveCard = document.getElementById("content-exclusive-card")
const contentExclusiveCardInnerHtml = document.getElementById("content-exclusive-card").innerHTML

const showCardDestacados = () => {

    contentExclusiveCard.innerHTML = `
    
    <div class="card-exclusive">
    <div class="overflow-card" style="background: #f7f9f8; position: relative;">
        <div class="hover-more-card-exclusive">
            <ul>
                <li><i style="color: #87d6f0;" class="fa-solid fa-eye"></i></li>
                <li><i style="color: gainsboro;" class="fa-solid fa-cart-shopping"></i></li>
                <li><i style="color: #c63535;" class="fa-solid fa-heart"></i></li>
            </ul>
        </div>
        <img src="./img/img11.png" alt="imagen">
    </div>
    <div class="text-card-exclusive">
        <h3>Nombre Producto</h3>
        <h4>$20.000 <del style="text-decoration: revert;">$25.000</del> 20% off</h4>
        <div class="valoracion">
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
        </div>
    </div>
</div>

<div class="card-exclusive">
    <div class="overflow-card" style="background: #f7f9f8; position: relative;">
        <div class="hover-more-card-exclusive">
            <ul>
                <li><i style="color: #87d6f0;" class="fa-solid fa-eye"></i></li>
                <li><i style="color: gainsboro;" class="fa-solid fa-cart-shopping"></i></li>
                <li><i style="color: #c63535;" class="fa-solid fa-heart"></i></li>
            </ul>
        </div>
        <img src="./img/img12.png" alt="imagen">
    </div>
    <div class="text-card-exclusive">
        <h3>Nombre Producto</h3>
        <h4>$20.000 <del style="text-decoration: revert;">$25.000</del> 20% off</h4>
        <div class="valoracion">
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
        </div>
    </div>
</div>

<div class="card-exclusive">
    <div class="overflow-card" style="background: #f7f9f8; position: relative;">
        <div class="hover-more-card-exclusive">
            <ul>
                <li><i style="color: #87d6f0;" class="fa-solid fa-eye"></i></li>
                <li><i style="color: gainsboro;" class="fa-solid fa-cart-shopping"></i></li>
                <li><i style="color: #c63535;" class="fa-solid fa-heart"></i></li>
            </ul> 
        </div>
        <img src="./img/img13.png" alt="imagen">
    </div>
    <div class="text-card-exclusive">
        <h3>Nombre Producto</h3>
        <h4>$20.000 <del style="text-decoration: revert;">$25.000</del> 20% off</h4>
        <div class="valoracion">
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
        </div>
    </div>
</div>
    
    `
}

const showCardEspecial = () => {

    contentExclusiveCard.innerHTML = `
    
    <div class="card-exclusive">
    <div class="overflow-card" style="background: #f7f9f8; position: relative;">
        <div class="hover-more-card-exclusive">
            <ul>
                <li><i style="color: #87d6f0;" class="fa-solid fa-eye"></i></li>
                <li><i style="color: gainsboro;" class="fa-solid fa-cart-shopping"></i></li>
                <li><i style="color: #c63535;" class="fa-solid fa-heart"></i></li>
            </ul>
        </div>
        <img src="./img/img10.png" alt="imagen">
    </div>
    <div class="text-card-exclusive">
        <h3>Nombre Producto</h3>
        <h4>$20.000 <del style="text-decoration: revert;">$25.000</del> 20% off</h4>
        <div class="valoracion">
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
            <button>
                <i class="fas fa-star"></i>
            </button>
        </div>
    </div>
</div>
    
    `
}

const showCardLlegados = () => {

    contentExclusiveCard.innerHTML = `
    
    <div class="card-exclusive">
                                <div class="overflow-card" style="background: #f7f9f8; position: relative;">
                                    <div class="hover-more-card-exclusive">
                                        <ul>
                                            <li><i style="color: #87d6f0;" class="fa-solid fa-eye"></i></li>
                                            <li><i style="color: gainsboro;" class="fa-solid fa-cart-shopping"></i></li>
                                            <li><i style="color: #c63535;" class="fa-solid fa-heart"></i></li>
                                        </ul>
                                    </div>
                                    <img src="./img/img7.png" alt="imagen">
                                </div>
                                <div class="text-card-exclusive">
                                    <h3>Nombre Producto</h3>
                                    <h4>$20.000 <del style="text-decoration: revert;">$25.000</del> 20% off</h4>
                                    <div class="valoracion">
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="card-exclusive">
                                <div class="overflow-card" style="background: #f7f9f8; position: relative;">
                                    <div class="hover-more-card-exclusive">
                                        <ul>
                                            <li><i style="color: #87d6f0;" class="fa-solid fa-eye"></i></li>
                                            <li><i style="color: gainsboro;" class="fa-solid fa-cart-shopping"></i></li>
                                            <li><i style="color: #c63535;" class="fa-solid fa-heart"></i></li>
                                        </ul>
                                    </div>
                                    <img src="./img/img8.png" alt="imagen">
                                </div>
                                <div class="text-card-exclusive">
                                    <h3>Nombre Producto</h3>
                                    <h4>$20.000 <del style="text-decoration: revert;">$25.000</del> 20% off</h4>
                                    <div class="valoracion">
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="card-exclusive">
                                <div class="overflow-card" style="background: #f7f9f8; position: relative;">
                                    <div class="hover-more-card-exclusive">
                                        <ul>
                                            <li><i style="color: #87d6f0;" class="fa-solid fa-eye"></i></li>
                                            <li><i style="color: gainsboro;" class="fa-solid fa-cart-shopping"></i></li>
                                            <li><i style="color: #c63535;" class="fa-solid fa-heart"></i></li>
                                        </ul>
                                    </div>
                                    <img src="./img/img9.png" alt="imagen">
                                </div>
                                <div class="text-card-exclusive">
                                    <h3>Nombre Producto</h3>
                                    <h4>$20.000 <del style="text-decoration: revert;">$25.000</del> 20% off</h4>
                                    <div class="valoracion">
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="card-exclusive">
                                <div class="overflow-card" style="background: #f7f9f8; position: relative;">
                                    <div class="hover-more-card-exclusive">
                                        <ul>
                                            <li><i style="color: #87d6f0;" class="fa-solid fa-eye"></i></li>
                                            <li><i style="color: gainsboro;" class="fa-solid fa-cart-shopping"></i></li>
                                            <li><i style="color: #c63535;" class="fa-solid fa-heart"></i></li>
                                        </ul>
                                    </div>
                                    <img src="./img/img6.png" alt="imagen">
                                </div>
                                <div class="text-card-exclusive">
                                    <h3>Nombre Producto</h3>
                                    <h4>$20.000 <del style="text-decoration: revert;">$25.000</del> 20% off</h4>
                                    <div class="valoracion">
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-star"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
    
    `
}

const showCardTodos = () => {

    contentExclusiveCard.innerHTML = contentExclusiveCardInnerHtml
}


// Slider Product

const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");
const sliderProduct = document.querySelector(".slider-product");

arrowLeft.addEventListener("click", (e) => {

    sliderProduct.scrollLeft -= sliderProduct.offsetWidth;
})

arrowRight.addEventListener("click", (e) => {

    sliderProduct.scrollLeft += sliderProduct.offsetWidth;
})


