let movienamee = document.getElementById("movieName");
let moviedescr = document.getElementById("movieDesc");
let topSection = document.getElementById("topMovies");
let movieGrid = document.getElementById("HolyWoodMovies");
let QuickView = document.getElementById("popupView");
let mainSectin = document.getElementById("mainSection");
const QuickViewclose = document.querySelector(".closeButton");

let movieData = {
    1: {"movieName" : "Fast And Furious 7", "movieDesc": "Furious 7 (also known as Fast & Furious 7 or Wild Speed: Sky Mission in Japan) is a 2015 action film directed by James Wan and written by Chris Morgan. It is the sequel to Fast & Furious 6 (2013) and The Fast and the Furious: Tokyo Drift (2006), and the seventh installment in the Fast & Furious franchise.", "image": "./Images/fast7.png","price": "$5.00"}, 
    2: {"movieName" : "Fast X" , "movieDesc" : "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.", "image": "./Images/fastx.png","price" : "$6.00"}
};

let Movies = [
    {
        "movieName" : "Fast And Furious 7",
        "movieDesc" : "Furious 7 (also known as Fast & Furious 7 or Wild Speed: Sky Mission in Japan) is a 2015 action film directed by James Wan and written by Chris Morgan. It is the sequel to Fast & Furious 6 (2013) and The Fast and the Furious: Tokyo Drift (2006), and the seventh installment in the Fast & Furious franchise",
        "image" : "./Images/fast7.png",
        "productimage" : "./Images/fast7product.png",
        "catagory" : "HolyWood",
        "price" : "$5.00"
    },
    {
        "movieName" : "Fast X",
        "movieDesc" : "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.",
        "image" : "./Images/fastx.png",
        "productimage" : "./Images/fastxproduct.png",
        "catagory" : "HolyWood",
        "price" : "$6.00"
    },{
        "movieName" : "Fast X",
        "movieDesc" : "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.",
        "image" : "./Images/fastx.png",
        "productimage" : "./Images/fastxproduct.png",
        "catagory" : "HolyWood",
        "price" : "$6.00"
    },{
        "movieName" : "Fast X",
        "movieDesc" : "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.",
        "image" : "./Images/fastx.png",
        "productimage" : "./Images/fastxproduct.png",
        "catagory" : "HolyWood",
        "price" : "$6.00"
    },{
        "movieName" : "Fast And Furious 7",
        "movieDesc" : "Furious 7 (also known as Fast & Furious 7 or Wild Speed: Sky Mission in Japan) is a 2015 action film directed by James Wan and written by Chris Morgan. It is the sequel to Fast & Furious 6 (2013) and The Fast and the Furious: Tokyo Drift (2006), and the seventh installment in the Fast & Furious franchise",
        "image" : "./Images/fast7.png",
        "productimage" : "./Images/fast7product.png",
        "catagory" : "HolyWood",
        "price" : "$5.00"
    },{
        "movieName" : "Fast And Furious 7",
        "movieDesc" : "Furious 7 (also known as Fast & Furious 7 or Wild Speed: Sky Mission in Japan) is a 2015 action film directed by James Wan and written by Chris Morgan. It is the sequel to Fast & Furious 6 (2013) and The Fast and the Furious: Tokyo Drift (2006), and the seventh installment in the Fast & Furious franchise",
        "image" : "./Images/fast7.png",
        "productimage" : "./Images/fast7product.png",
        "catagory" : "HolyWood",
        "price" : "$5.00"
    },{
        "movieName" : "Fast And Furious 7",
        "movieDesc" : "Furious 7 (also known as Fast & Furious 7 or Wild Speed: Sky Mission in Japan) is a 2015 action film directed by James Wan and written by Chris Morgan. It is the sequel to Fast & Furious 6 (2013) and The Fast and the Furious: Tokyo Drift (2006), and the seventh installment in the Fast & Furious franchise",
        "image" : "./Images/fast7.png",
        "productimage" : "./Images/fast7product.png",
        "catagory" : "HolyWood",
        "price" : "$5.00"
    },{
        "movieName" : "Fast And Furious 7",
        "movieDesc" : "Furious 7 (also known as Fast & Furious 7 or Wild Speed: Sky Mission in Japan) is a 2015 action film directed by James Wan and written by Chris Morgan. It is the sequel to Fast & Furious 6 (2013) and The Fast and the Furious: Tokyo Drift (2006), and the seventh installment in the Fast & Furious franchise",
        "image" : "./Images/fast7.png",
        "productimage" : "./Images/fast7product.png",
        "catagory" : "HolyWood",
        "price" : "$5.00"
    }
];

movieSlide();
movieProducts();

setInterval(movieSlide, 10000);

function movieSlide() {
let index = Math.floor(Math.random() * Movies.length);

let dict = Movies[index];
var newMovieName = dict["movieName"];
var newMOvieDesc = dict["movieDesc"];
var newImage = dict["image"];

movienamee.textContent = newMovieName;
moviedescr.innerHTML = newMOvieDesc;
topSection.style.backgroundImage = "url(" + newImage + ")";
topSection.style.transition = "1000ms";
}

function movieProducts() {
    Movies.forEach((value, key) => {
        let movie = document.createElement('div');
        movie.style.width = "fit-content";
        movie.id = value.movieName;
        movie.style.height = "350px";
        movie.style.padding = "20px";
        movie.style.textAlign = "center";
        movie.style.margin = "20px";
        movie.style.background = "#303030";
        movie.style.opacity = "90%";
        movie.style.borderRadius = "20px";
        movie.innerHTML = `
            <img src="${value.productimage}" style = "width: 300px; border-radius: 20px"/>
            <div style = "color: white; font-family: 'Gruppo', sans-serif; font-size: 20px; margin-top: 10px;">${value.movieName}</div>
            <div style = "color: white; font-family: 'Gruppo', sans-serif; font-size: 19px; margin-top: 10px;">${value.price}</div>
            <div class= "buttons">
            <button class = "addCart">Add To cart</button>
            <button class = "buyNow" onclick = quickView(${key}) >Quick View</button>
            </div>
        `;
        movieGrid.appendChild(movie);
    });
}
QuickView.style.visibility = "hidden";

function quickView(key) {
    let QuickViewName = document.getElementById("quickViewname");
    let QuickViewDesc = document.getElementById("quickViewdesc");
    let QuickViewPrice = document.getElementById("quickViewPrice");
    let QuickViewImage = document.getElementById("movieImageQuickView");
    let divId = document.getElementById(Movies[key].movieName);
    QuickView.style.visibility = "visible";
    QuickViewName.innerHTML = Movies[key].movieName;
    QuickViewDesc.innerHTML = Movies[key].movieDesc;
    QuickViewPrice.innerHTML = Movies[key].price;
    QuickViewImage.src = Movies[key].productimage;
    mainSectin.style.filter = "blur(20px)";
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' });

    QuickViewclose.addEventListener('click', function() {
        QuickView.style.visibility = "hidden";
        mainSectin.style.filter = "blur(0px)";
        divId.scrollIntoView({behavior: 'smooth', block: 'start'});
    })

}

