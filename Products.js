let movienamee = document.getElementById("movieName");
let moviedescr = document.getElementById("movieDesc");
let topSection = document.getElementById("topMovies");
let HollywoodmovieGrid = document.getElementById("HolyWoodMovies");
let AnimeMovieGrid = document.getElementById("Anime");
let KdramaMovieGrid = document.getElementById("kdrama");
let BollywoodMovieGrid = document.getElementById("BollyWoodMovies");
let cartLayout = document.getElementById("cartitems");
let QuickView = document.querySelector(".popupView");
let CartClose = document.querySelector(".closeView");
let Cart = document.querySelector(".Cart");
let CartButton = document.querySelector(".cartContainer");
let mainSectin = document.getElementById("mainSection");
const QuickViewclose = document.querySelector(".closeButton");
let CustomAlert = document.querySelector(".alertContainer");
let topMoviesButton = document.querySelector(".addCartTopMovies");
let CheckoutButton = document.getElementById("CheckOutButton");

let PoductBody = document.getElementById("productsBody");
PoductBody.style.opacity = "0";

setInterval(function() {
    PoductBody.style.transition = "opacity 0.5s ease-in"
    PoductBody.style.opacity = "100";
}, 200);

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active")
    navmenu.classList.toggle("active")
})
document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click",()=> {
    hamburger.classList.remove("active")
    navmenu.classList.remove("active")
}))
function openIframe(iframeLink) {
    // Open the iframe link in a new tab
    window.open(iframeLink, '_blank');
}


let Movies = [
    {
         // Hollywood 
        "Movie_id" : "001",
        "movieName" : "Fast And Furious 7",
        "movieDesc" : "Dominic Toretto and his crew face a vengeful enemy while dealing with personal struggles and high-speed action.",
        "image" : "./Images/fast7.png",
        "productimage" : "./Images/fast7product.png",
        "ReleaseDate" : "03/04/2015",
        "rating": "87",
        "link" : "./Videos/Fast7.mp4",
        "catagory" : "HolyWood",
        "price" : "5.00"
    },
    {
        "Movie_id" : "002",
        "movieName" : "CountDown",
        "movieDesc" : "In COUNTDOWN, a group of teens at a party stumbles on an app called Countdown that predicts the exact moment of a user's death. One teen is warned that she'll die that night, and -- despite the fact that she avoids a ride with her drunk boyfriend -- she still meets her end.",
        "image" : "./Images/CountDownSlide.jpeg",
        "productimage" : "./Images/CountDown.jpeg",
        "ReleaseDate" : "25/10/2019",
        "rating": "79",
        "link" : "./Videos/countdown.mp4",
        "catagory" : "HolyWood",
        "price" : "4.00"
    },{
        "Movie_id" : "003",
        "movieName" : "The Package",
        "movieDesc" : "When four teenage friends go on a camping trip during spring break, an unfortunate accident sets off a race against time to save one's most prized possession.",
        "image" : "./Images/ThePackage.jpeg",
        "productimage" : "./Images/ThePackage.jpeg",
        "ReleaseDate" : "10/08/2018",
        "rating": "84",
        "link" : "./Videos/ThaPackage.mp4",
        "catagory" : "HolyWood",
        "price" : "4.99"
    },{
        "Movie_id" : "004",
        "movieName" : "Spiderman Across the Spider Verse",
        "movieDesc" : "Miles Morales teams up with alternate Spider-People to save the multiverse from interdimensional threats.",
        "image" : "./Images/SpidermanSlide.jpg",
        "productimage" : "./Images/SpiderMan.jpg",
        "ReleaseDate" : "02/06/2023",
        "rating": "92",
        "link" : "./Videos/Spiderman.mp4",
        "catagory" : "HolyWood",
        "price" : "6.10"
    },{
        "Movie_id" : "005",
        "movieName" : "Good Kids",
        "movieDesc" : "A group of friends embark on a hilarious adventure to make their last summer memorable.",
        "image" : "./Images/GoodKids.jpeg",
        "productimage" : "./Images/GoodKids.jpeg",
        "ReleaseDate" : "21/10/2016",
        "rating": "81",
        "link" : "./Videos/goodKids.mp4",
        "catagory" : "HolyWood",
        "price" : "5.50"
    },{
        "Movie_id" : "006",
        "movieName" : "Jumanji Welcome to the Jungle",
        "movieDesc" : "Four teenagers get transported into a video game jungle and must complete challenges to return home.",
        "image" : "./Images/Jumanji.jpeg",
        "productimage" : "./Images/Jumanji.jpeg",
        "ReleaseDate" : "20/12/2017",
        "rating": "78",
        "link" : "./Videos/Jumanji.mp4",
        "catagory" : "HolyWood",
        "price" : "4.49"
    },
     // Anime
    {
        "Movie_id" : "007",
        "movieName" : "One Piece",
        "movieDesc" : "Monkey D. Luffy and his pirate crew embark on a grand adventure to find the legendary treasure, One Piece, while facing powerful enemies and uncovering the secrets of the world.",
        "image" : "./Images/OnePieceSlide.jpeg",
        "productimage" : "./Images/onePiece.jpeg",
        "ReleaseDate" : "20/10/1999",
        "rating": "79",
        "link" : "./Videos/Onepiece.mp4",
        "catagory" : "Anime",
        "price" : "4.99"
    },{
        "Movie_id" : "008",
        "movieName" : "Naruto",
        "movieDesc" : "Naruto Uzumaki, a young ninja with a powerful spirit inside him, strives to become the strongest ninja and protect his village while facing deadly adversaries and seeking to bring peace to the ninja world.",
        "image" : "./Images/Naruto.jpeg",
        "productimage" : "./Images/Naruto.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "86",
        "link" : "./Videos/Naruto.mp4",
        "catagory" : "Anime",
        "price" : "3.99"
    },{
        "Movie_id" : "009",
        "movieName" : "Demon Slayer",
        "movieDesc" : "In a world infested with demons, a young demon slayer named Tanjiro Kamado seeks revenge while protecting his sister and unraveling the mysteries of his family's tragic past.",
        "image" : "./Images/Demon.jpg",
        "productimage" : "./Images/Demon.jpg",
        "ReleaseDate" : "23/02/2023",
        "rating": "63",
        "link" : "./Videos/Demon.mp4",
        "catagory" : "Anime",
        "price" : "4.60"
    },{
        "Movie_id" : "010",
        "movieName" : "Jujutsu Kaisen",
        "movieDesc" : "Yuji Itadori, a high school student, becomes part of a secret organization of sorcerers, battling cursed spirits and unraveling the dark secrets of the Jujutsu world.",
        "image" : "./Images/Jujutsu.jpeg",
        "productimage" : "./Images/Jujutsu.webp",
        "ReleaseDate" : "23/02/2023",
        "rating": "73",
        "link" : "./Videos/Jujutsu.mp4",
        "catagory" : "Anime",
        "price" : "5.00"
    },{
        "Movie_id" : "011",
        "movieName" : "Bleach",
        "movieDesc" : "Ichigo Kurosaki, a teenager with the ability to see spirits, becomes a Soul Reaper and protects the living world from evil spirits while uncovering the truth behind his own powers and destiny.",
        "image" : "./Images/Bleach.jpeg",
        "productimage" : "./Images/Bleach.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "89",
        "link" : "./Videos/Bleach.mp4",
        "catagory" : "Anime",
        "price" : "4.09"
    },{
        "Movie_id" : "012",
        "movieName" : "Attack on Titan - Final Season",
        "movieDesc" : "In a world where humanity is threatened by giant humanoid creatures called Titans, Eren Yeager and his allies join the fight for survival, uncovering shocking truths about the Titans and their own existence.",
        "image" : "./Images/AttackOnTitan.jpeg",
        "productimage" : "./Images/AttackOnTitan.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "90",
        "link" : "./Videos/Attck.mp4",
        "catagory" : "Anime",
        "price" : "5.40"
    },
    // Kdrama
    {
        "Movie_id" : "013",
        "movieName" : "BloodHounds",
        "movieDesc" : "Bloodhounds depicts a story about two young boxers who set foot in the world of private loans in pursuit of money and get caught up in a huge force.",
        "image" : "./Images/BloodHounds.jpeg",
        "productimage" : "./Images/BloodHounds.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "86",
        "link" : "./Videos/BloodHounds.mp4",
        "catagory" : "Kdrama",
        "price" : "5.30"
    },{
        "Movie_id" : "014",
        "movieName" : "All of us are dead",
        "movieDesc" : "Korean students fight zombies in a high school, confronting fear and personal demons in survival.",
        "image" : "./Images/AllofUsAreDead.jpeg",
        "productimage" : "./Images/AllofUsAreDead.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "75",
        "link" : "./Videos/AllOfUsDead.mp4",
        "catagory" : "Kdrama",
        "price" : "5.10"
    },{
        "Movie_id" : "015",
        "movieName" : "Alchemy of Souls",
        "movieDesc" : "A powerful sorceress in a blind woman's body encounters a man from a prestigious family, who wants her help to change his destiny.",
        "image" : "./Images/Alchemy.jpeg",
        "productimage" : "./Images/Alchemy.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "87",
        "link" : "./Videos/Alchemy.mp4",
        "catagory" : "Kdrama",
        "price" : "4.90"
    },{
        "Movie_id" : "016",
        "movieName" : "Flower of evil",
        "movieDesc" : "Dark past haunts man, detective wife suspects. Suspenseful drama with mystery, romance entwined.",
        "image" : "./Images/Flower.jpeg",
        "productimage" : "./Images/Flower.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "91",
        "link" : "./Videos/Flower.mp4",
        "catagory" : "Kdrama",
        "price" : "5.70"
    },{
        "Movie_id" : "017",
        "movieName" : "Glory",
        "movieDesc" : "“The Glory” revolves around Moon Dong-eun, who makes it her life's mission to seek revenge on the people who bullied her in high school.",
        "image" : "./Images/Glory.webp",
        "productimage" : "./Images/Glory.webp",
        "ReleaseDate" : "23/02/2023",
        "rating": "87",
        "link" : "./Videos/Glory.mp4",
        "catagory" : "Kdrama",
        "price" : "5.40"
    }
    // BollyWood
    ,{
        "Movie_id" : "018",
        "movieName" : "Om Shanthi Om",
        "movieDesc" : "Reincarnated man seeks revenge, uncovers truth behind a famous actress's death. Bollywood drama with romance.",
        "image" : "./Images/OmShanthi.jpeg",
        "productimage" : "./Images/OmShanthi.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "89",
        "link" : "./Videos/OmShanthi.mp4",
        "catagory" : "Bollywood",
        "price" : "5.30"
    },{
        "Movie_id" : "019",
        "movieName" : "Marjaavan",
        "movieDesc" : "Vengeance-fueled love story with intense action, emotional struggles, and a menacing gangster. Bollywood drama.",
        "image" : "./Images/Marjaveen.jpeg",
        "productimage" : "./Images/Marjaveen.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "81",
        "link" : "./Videos/Marjaavan.mp4",
        "catagory" : "Bollywood",
        "price" : "4.59"
    },{
        "Movie_id" : "020",
        "movieName" : "Dilwale Dulhania Le Jayenge",
        "movieDesc" : "Young love defies tradition, culture in iconic Bollywood romance. Raj and Simran captivate audiences worldwide.",
        "image" : "./Images/DilwaleDulhaniaLeJayenge.jpg",
        "productimage" : "./Images/DilwaleDulhaniaLeJayenge.jpg",
        "ReleaseDate" : "23/02/2023",
        "rating": "79",
        "link" : "./Videos/Dul.mp4",
        "catagory" : "Bollywood",
        "price" : "5.90"
    },{
        "Movie_id" : "021",
        "movieName" : "Devdas",
        "movieDesc" : "Tragic love story of Devdas and Paro, torn apart by societal pressures and self-destructive choices.",
        "image" : "./Images/Devdas.jpeg",
        "productimage" : "./Images/Devdas.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "74",
        "link" : "./Videos/Devdas.mp4",
        "catagory" : "Bollywood",
        "price" : "4.90"
    },{
        "Movie_id" : "022",
        "movieName" : "Bajirao Mastani",
        "movieDesc" : "Epic historical romance between Bajirao, the Maratha warrior, and Mastani, testing love against cultural norms.",
        "image" : "./Images/Bajirao.jpeg",
        "productimage" : "./Images/Bajirao.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "72",
        "link" : "./Videos/Bajirao.mp4",
        "catagory" : "Bollywood",
        "price" : "4.40"
    },{
        "Movie_id" : "023",
        "movieName" : "Padmaavat",
        "movieDesc" : "Epic historical drama depicts the conflict between Queen Padmavati, Sultan Alauddin Khilji, and Rajput honor.",
        "image" : "./Images/Padmaavat.jpeg",
        "productimage" : "./Images/Padmaavat.jpeg",
        "ReleaseDate" : "23/02/2023",
        "rating": "83",
        "link" : "./Videos/Padmaavat.mp4",
        "catagory" : "Bollywood",
        "price" : "5.20"
    }
];

movieSlide();
movieProducts();

setInterval(movieSlide, 10000);


function movieSlide() {
    let count = Movies.length;
    let index = Math.floor(Math.random() * count);

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
        movie.style.height = "350px";
        movie.style.padding = "20px";
        movie.style.textAlign = "center";
        movie.style.margin = "20px";
        movie.style.background = "#c7c7c7";
        movie.style.opacity = "90%";
        movie.style.borderRadius = "20px";
        movie.innerHTML = `
            <img src="${value.productimage}" style = "width: 300px; height: 185px; border-radius: 20px"/>
            <div style = "color: Black; font-family: 'Poppins', sans-serif; font-size: 16px; margin-top: 10px;">${value.movieName}</div>
            <div style = "color: Black; font-family: 'Poppins', sans-serif; font-size: 14px; margin-top: 10px;"> $${value.price}</div>
            <div class= "buttons">
            <button id = ${Movies[key].Movie_id} class = "addCart" onclick = addtocart(${key})>Add To cart</button>
            <button class = "buyNow" onclick = quickView(${key}) >Quick View</button>
            </div>
        `;
        if (value.catagory == "HolyWood") {
            HollywoodmovieGrid.appendChild(movie);
        } else if(value.catagory == "Anime") {
            AnimeMovieGrid.appendChild(movie);
        } else if(value.catagory == "Kdrama"){
            KdramaMovieGrid.appendChild(movie);
        } else if (value.catagory == "Bollywood") {
            BollywoodMovieGrid.appendChild(movie);
        }
    });
}

let cartSize = document.getElementById("cartLength");

let CartList = [];

CheckoutButton.onclick = function() {
    var CartSize = CartList.length;
    console.log(CartSize);
    if (CartList != 0) {
        sessionStorage.setItem('myArray', JSON.stringify(CartList));
        location.href = "./CheckOut.html";
    } else {
        ShowAlert("Cannot proceed", "You cannot proceed to checkoout when cart is empty", "", "Ok", "alert");
    }

}

var myArray = sessionStorage.getItem('myArray');
if (myArray != null) {
    let CartArray = JSON.parse(myArray);
    CartList = CartArray;
    cartLayout.removeChild;
    displayCart();
    CartList.forEach((value,key) => {
        let Butn = document.getElementById(CartList[key].Movie_id);
        Butn.innerHTML = "&#x2713;Added to Cart";
    })
    cartSize.innerHTML = CartList.length.toString();
} else {
    CartList = []; 
}

CartButton.addEventListener('click', () => {
    Cart.classList.remove("animationout");
    Cart.style.transition = "0.5s";
    Cart.style.visibility = "visible";
    if (CartList.length == 0) {
        cartLayout.innerHTML = `
        <div>
            <h1 style = "color: red; font-size: 20px">Your cart is Empty</h1>
        </div>
        `
        cartLayout.style.height = "fit-content";
        cartLayout.style.display = "flex";
    }

    let RemoveAll = document.querySelector(".removeall");

    RemoveAll.addEventListener('click', () => {
        ShowAlert("Are you Sure?", "You cart will be empty if this action is performed", removeAllItems, "Yes", "prompt");
    })
    CartClose.addEventListener('click', () => {
        Cart.classList.add("animationout");
        Cart.style.visibility = "hidden";
    })
})

function removeAllItems() {
    CartList.forEach((value, key) => {
        let Butn = document.getElementById(CartList[key].Movie_id);
        Butn.innerHTML = "Add To cart";
    })
    CartList = [];
    sessionStorage.clear();
    cartSize.innerHTML = CartList.length.toString();
    displayCart();
    if (CartList.length == 0) {
        cartLayout.innerHTML = `
        <div>
            <h1 style = "color: red; font-size: 20px">Your cart is Empty</h1>
        </div>
        `
        cartLayout.style.height = "fit-content";
        cartLayout.style.display = "flex";
    }

    CustomAlert.classList.add("animationout");
    CustomAlert.style.visibility = "hidden";
    
}

function addtocart(key) {
    cartLayout.style.display = "grid";
    let butn = document.getElementById(Movies[key].Movie_id);
    if (butn.innerHTML == "Add To cart"){
        CartList.push(Movies[key]);
        sessionStorage.setItem("myArray", JSON.stringify(CartList));
        butn.innerHTML = "&#x2713;Added to Cart";
        cartSize.innerHTML = CartList.length.toString();
        displayCart();
        if (CartList.length < 2) {
            cartLayout.style.height = "fit-content";
        } else {
            cartLayout.style.height = "200px";
        }
    } else {
        ShowAlert("Item Already Exists", "You cannot add the same item again to the cart", "", "Ok", "alert");
    }
}


function displayCart() {
    let cartAmount = document.getElementById("cartTotal");
    let numberOfItems = document.getElementById("numberofitems");
    var cartTotal = 0;
    cartLayout.innerHTML = "";
    CartList.forEach((value, key) => {
        let element = document.createElement('div');
        element.style.background = "#E3E3E3";
        element.style.margin = "10px";
        element.style.padding = "10px 20px 10px 20px";
        element.style.borderRadius = "20px";
        element.style.height = "fit-content";
        cartTotal = cartTotal + parseFloat(value.price);
        element.style.display = "flex";
        element.innerHTML = `
        <div style = "text-align: start;">
            <img src="${value.productimage}" style = "width: 100px; border-radius: 10px"/>
        </div>
        <div style = "text-align: start; margin-left: 20px; align-items: center;">
            <h1 style = "font-size: 18px;">${value.movieName}</h1>
            <h2 style = "font-size: 10px;">${value.catagory}</h2>
            <h1 style="font-size: 15px;">$${value.price}</h1>
        </div>
        <div style = "flex : 1; text-align: end;">
            <div>
                <button style = "cursor: pointer; background: red; padding: 5px 10px 5px 10px; border-radius: 50%; color: white; border: none; margin-right: -10px;" onclick = removeElement(${key})>X</button>
            </div>
        </div> `
        cartLayout.appendChild(element);
    })

    cartAmount.innerHTML = "$" + cartTotal.toString();
    cartAmount.style.fontSize = "23px";
    numberOfItems.innerHTML = CartList.length.toString();

}

function removeElement(key) {
    let Butn = document.getElementById(CartList[key].Movie_id);
    CartList.splice(key, 1);
    sessionStorage.setItem("myArray", JSON.stringify(CartList));
    Butn.innerHTML = "Add To cart";
    cartSize.innerHTML = CartList.length.toString();
    displayCart();
    if (CartList.length == 0) {
        cartLayout.innerHTML = `
        <div>
            <h1 style = "color: red; font-size: 20px">Your cart is Empty</h1>
        </div>
        `
        cartLayout.style.height = "fit-content";
        cartLayout.style.display = "flex";
    }
}

function quickView(key) {
    QuickView.classList.remove("animationout");
    QuickView.style.transition = "0.5s";
    QuickView.style.visibility = "visible";
    let QuickViewName = document.getElementById("quickViewname");
    let QuickViewDesc = document.getElementById("quickViewdesc");
    let QuickViewPrice = document.getElementById("quickViewPrice");
    let QuickViewTrailer = document.getElementById("movieImageQuickView");
    let Release = document.getElementById("Release");
    let Rating = document.getElementById("rate");

    var Rate = parseInt(Movies[key].rating);
    Rating.innerHTML =  Rate + "% Match for you"
    if (Rate > 75) {
        Rating.style.color = "#90EE90";
    } else if (Rate > 50 && Rate < 75) {
        Rating.style.color = "#FEC20C";
    }

    let divId = document.getElementById(Movies[key].movieName);
    QuickViewName.innerHTML = Movies[key].movieName;
    QuickViewDesc.innerHTML = Movies[key].movieDesc;
    Release.innerHTML = Movies[key].ReleaseDate;
    QuickViewPrice.innerHTML = "$" + Movies[key].price;
    QuickViewTrailer.setAttribute('src', Movies[key].link);
    QuickViewTrailer.setAttribute("Poster", Movies[key].productimage);
    mainSectin.style.filter = "blur(10px)";
    mainSectin.style.opacity = "20%";


    QuickViewclose.addEventListener('click', function() {
        QuickView.classList.add("animationout");
        QuickView.style.visibility = "hidden";
        QuickViewTrailer.setAttribute('src', "");
        mainSectin.style.filter = "blur(0px)";
        mainSectin.style.opacity = "100%";
    })

}
function ShowAlert(heading, message, func, confirmText, type) {
    CustomAlert.classList.remove("animationout");
    CustomAlert.style.transition = "0.5s";
    CustomAlert.style.visibility = "visible";

    let headingText = document.getElementById("heading");
    let messageText = document.getElementById("message");
    let confirm = document.querySelector(".confrm");
    let cancel = document.querySelector(".cancel");
    let container = document.getElementById("alertButtons");
    let OKcontainer = document.getElementById("alertButton");
    let okButton = document.querySelector(".okbutton");

    headingText.innerHTML = heading;
    messageText.innerHTML = message;

    if (type == "prompt"){
        
        OKcontainer.hidden = true;
        container.hidden = false;

        confirm.textContent = confirmText;

        confirm.addEventListener('click', () => {
            func();
        })
    
        cancel.addEventListener('click', () => {
            CustomAlert.classList.add("animationout");
            CustomAlert.style.visibility = "hidden";
        })
    } else if (type == "alert"){

        OKcontainer.hidden = false;
        container.hidden = true;

        okButton.textContent = confirmText;

        okButton.addEventListener('click', () => {
            CustomAlert.classList.add("animationout");
            CustomAlert.style.visibility = "hidden";
        })
    }




}
