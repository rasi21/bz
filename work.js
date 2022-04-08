//carousel
const gap = 16;

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),

    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";

    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});
let width = carousel.offsetWidth;

window.addEventListener("resize", e => (width = carousel.offsetWidth));

//last carusel



//cards
let blg = [
    {
        title: 'Apple Macbook Air 13 M1 Chip 8GB',
        brand: 'Apple',
        price: '1550₾',
    },
    {
        title: 'Apple Macbook Air 13 M1 Chip 8GB',
        brand: 'Apple',
        price: '1550₾',
    },
    {
        title: 'Apple Macbook Air 13 M1 Chip 8GB',
        brand: 'Apple',
        price: '1550₾',
    },
    {
        title: 'Apple Macbook Air 13 M1 Chip 8GB',
        brand: 'Apple',
        price: '1550₾',
    },
    {
        title: 'Apple Macbook Air 13 M1 Chip 8GB',
        brand: 'Apple',
        price: '1550₾',
    },
    {
        title: 'Apple Macbook Air 13 M1 Chip 8GB',
        brand: 'Apple',
        price: '1550₾',
    },
    {
        title: 'Apple Macbook Air 13 M1 Chip 8GB',
        brand: 'Apple',
        price: '1550₾',
    },
]
blg.forEach(el => {
    let card = ` <div class="jw">
    <a href="">
        <div class="div">
        </div>
    </a>
    <div class="txt">
        <h6>${el.title}</h6>
        <p>${el.brand}</p>
        <h5>${el.price}</h5>
    </div>

</div> `;
    document.getElementById('content').innerHTML += card;

});

// second cards
let bl = [
    {
        title: 'Skytech Prism II Gaming Computer PC',
        price: '2550₾',
    },
    {
        title: 'Skytech Prism II Gaming Computer PC',
        price: '2550₾',
    },
    {
        title: 'Skytech Prism II Gaming Computer PC',
        price: '2550₾',
    },
    {
        title: 'Skytech Prism II Gaming Computer PC',
        price: '2550₾',
    },
    {
        title: 'Skytech Prism II Gaming Computer PC',
        price: '2550₾',
    },
    {
        title: 'Skytech Prism II Gaming Computer PC',
        price: '2550₾',
    },
    {
        title: 'Skytech Prism II Gaming Computer PC',
        price: '2550₾',
    },
]
bl.forEach(el => {
    let card = `  <div class="jw">
    <a href="">
        <div class="div-last">

        </div>
    </a>
    <div class="txt">
        <h6>${el.title}</h6>

        <h5>${el.price}</h5>
    </div>
</div>`;
    document.getElementById('con').innerHTML += card;

});
/// sale cards
let b = [
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },
    {
        title: 'DJI Osmo Action ND Filter Set',
        brand: 'Sony',
        price: '700₾',
        saleprice: '500₾',
    },

]
b.forEach(el => {
    let card = `   <div class="col-lg-3  ds">
    <div class="jw">

        <div class="div-second">
            <div class="sale ">
                <h6> SALE</h6>
            </div>
        </div>
        <div class="txt">
            <h6>${el.title}</h6>
            <p>${el.brand}</p>
            <h5>${el.price} <span>${el.saleprice}</span> </h5>
        </div>
    </div>
</div>`;
    document.getElementById('rjw').innerHTML += card;
});


















