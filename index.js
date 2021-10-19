let cars = [
    {
        car_img: "benz",
        name: "Mercedes Benz",
        price: "$3000"
    },
    {
        car_img: "lamborghini",
        name: "Lamborghini",
        price: "$3500"
    },
    {
        car_img: "suv",
        name: "Suv",
        price: "$2000"
    },
    {
        car_img: "truck",
        name: "Truck",
        price: "$700"
    },
    {
        car_img: "citreon",
        name: "Citreon",
        price: "$1300"
    },
    {
        car_img: "ferrari",
        name: "Ferrari",
        price: "$3300"
    },
    {
        car_img: "fiat",
        name: "Fait",
        price: "$1800"
    },
    {
        car_img: "jaguar",
        name: "Jaguar",
        price: "$8000"
    },
    {
        car_img: "lamdRover",
        name: "Land Rover",
        price: "$5500"
    },
    {
        car_img: "McLaren",
        name: "McLaren",
        price: "$4500"
    },
    {
        car_img: "volkswagen",
        name: "Volkswagen",
        price: "$5600"
    },
    {
        car_img: "Audi",
        name: "Audi",
        price: "$9000"
    }
]


let gallery = document.getElementById("gallery-wrapper");
let html = "";
cars.forEach(e =>{
    html += `
            <div class="card show-on-scroll inline-pic" style="width: 21rem;">
                <img src="images/${e.car_img}.jpg" class="card-img-top" alt="benz">
                    <div class="card-body">
                        <h3 class="card-title font-weight-bold">${e.name}</h3>
                        <p class="card-text font-weight-bold">Price: <span class="text-warning">${e.price}</span></p>
                    </div>
            </div>
    `

    gallery.innerHTML = html;
})


//show on scroll animation


var scroll = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000/60);
}

var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop(){
    elementsToShow.forEach(function (element){
        if(isElementInViewport(element)){
            element.classList.add("is-visible")
        }else{
            element.classList.remove("is-visible")
        }
      })
    scroll(loop)
}

loop();

function isElementInViewport(el){
    if(typeof jQuery === "function" && el instanceof jQuery){
        el=el[0]
    }


var rect = el.getBoundingClientRect();
    return(
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );

}



