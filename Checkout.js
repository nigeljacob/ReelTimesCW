let yourDetailsLabel = document.getElementById("YourDetails");
let Payment  = document.getElementById("PaymentText");
let CartItems = document.getElementById("CartSummaryItems");
let CartAmount = document.getElementById("SummaryTotal");
let SumbitButton = document.getElementById("Submit");
let Form = document.getElementById("mainForm");
let CustomAlert = document.querySelector(".alertContainer");
let CustomProgress = document.querySelector(".PaymentProcessing");
const ValidTillInput = document.getElementById("ValidTill");
const CardNumberInput = document.getElementById("CardNumber");
let NameInput = document.getElementById("Name");
let CVV = document.getElementById("CVV");


setInterval(ReplaceColor, 1000);

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

var myArray = sessionStorage.getItem('myArray');
let Movies = JSON.parse(myArray);

DisplayCartSummary();

function DisplayCartSummary() {
    if (Movies != null) {
        var CartTotal = 0.00;
        CartItems.innerHTML = "";
        Movies.forEach((value, key) => {
            let movie = document.createElement('div');
            movie.style.display = "flex";
            movie.style.background = "#e7e7e7";
            movie.style.margin = "10px";
            movie.style.borderRadius = "10px";
            movie.style.padding = "10px";
            movie.style.height = "fit-content";
            movie.style.alignItems = "center";
            CartTotal = CartTotal + parseFloat(value.price);
            movie.innerHTML = `
            <div style = "margin-right: 10px; align-items: center; margin-top: 3px; flex: 1;">
            <img src="${value.productimage}" alt="movie Image" style = "width: 80px; border-radius: 10px"> </div>
            <div style= "flex: 3;">
            <h2 style = "font-weight: 400; font-size: 15px;">${value.movieName}<h2>
            <small style = "font-weight: 200; font-size: 14px; margin-top: -10px;">$${value.price}</small>
            </div>
            <div class="DeleteButtonDiv">
            <button class = "DeleteButton" onclick = removeItem(${key})> X </button>
            </div>
            `
            CartItems.appendChild(movie);
        });
        CartAmount.innerHTML = "$" + CartTotal.toFixed(2).toString();
    }
}

function removeItem(key) {
    Movies.splice(key, 1);
    sessionStorage.setItem("myArray", JSON.stringify(Movies))
    DisplayCartSummary();
}

window.onhashchange = function() {
    sessionStorage.setItem("myArray", JSON.stringify(myArray))
}

var count = 0;
var temp = "";
var month = "";
var year = "";
ValidTillInput.addEventListener("input", function() {
    var ValidTill = document.forms["MainForm"]["validTill"].value;
    if(ValidTill.toString().length == 2 && count == 0) {
        temp = ValidTill;
        month = ValidTill;
        ValidTillInput.value = temp + "/";
        count = count + 1;
    } else if (ValidTill.toString().length == 2 && count == 1) {
        ValidTillInput.value = temp;
        count = 0;
    }

    if (ValidTill.toString().length == 5 && parseInt(ValidTill) <= 12) {
        ValidTillInput.style.borderBottom = "2px solid #00FF00";
    } else {
        ValidTillInput.style.borderBottom = "2px solid #FF0000";
    }
})

// Input for Card Number (Seperates all number into 4 groups)
var Break = 4;
var times = 1;
var tempNumber = "";
var FinalNumber = "";
CardNumberInput.addEventListener("input", function() {
    var CardNumber = document.forms["MainForm"]["cardNumber"].value;
    if (CardNumber.toString().length == Break && times == 1)  {
        tempNumber = CardNumber;
        CardNumberInput.value = tempNumber + " ";
        Break = CardNumberInput.value.length + 4;
        console.log(Break);
    } 
    if (Break == 24) {
        Break = 4;
        times = 0;
    }

    if (CardNumber.toString().length == 18 && times == 0) {
        CardNumberInput.value = "";
    }
    if (CardNumber.toString().length < 2) {
        Break = 4;
        times = 1;
    }

    if (CardNumber.toString().length == 19) {
        // splits each string by space into 4 parts
        const result = CardNumber.split(" ");
        var temp = "";
        for (let i = 0; i < result.length; i++) {
            temp = temp + result[i];
        }

        FinalNumber = temp;
        if (!isNaN(FinalNumber)) {
            CardNumberInput.style.borderBottom = "2px solid #00FF00";
        }else {
            CardNumberInput.style.borderBottom = "2px solid #FF0000";
        }
        
    } else {
        CardNumberInput.style.borderBottom = "2px solid #FF0000";
    }
})

Name.addEventListener("input", function() {
    var NameLength = document.forms["MainForm"]["name"].value.toString().length;
    if (NameLength >= 1) {
        Name.style.borderBottom = "2px solid #00FF00";
    } else {
        Name.style.borderBottom = "2px solid #FF0000";
    }
})

CVV.addEventListener("input", function() {
    var CVVLength = document.forms["MainForm"]["cvv"].value;
    if (CVVLength.toString().length == 3 && !isNaN(CVVLength)) {
        CVV.style.borderBottom = "2px solid #00FF00";
    } else {
        CVV.style.borderBottom = "2px solid #FF0000";
    }
})

Form.addEventListener('submit', function(event) {
    var CardNumber = document.forms["MainForm"]["cardNumber"].value;
    var Zip = document.forms["MainForm"]["zip"].value;
    var CVV = document.forms["MainForm"]["cvv"].value;

    if (isNaN(FinalNumber)) {
        event.preventDefault();
        ShowAlert("Invalid Card Number", "Card Number only consists on Numbers", "", "Ok", "alert");
    } else if (CardNumber.toString().length != 20) {
        console.log(CardNumber.toString().length);
        event.preventDefault();
        ShowAlert("Invalid Card Number", "Enter a valid Card Number", "", "Ok", "alert");
    } else if(Zip.toString().length != 5) {
        event.preventDefault();
        ShowAlert("Invalid Zip Code", "Enter a valid postal code", "", "Ok", "alert");
    } else if (CVV.toString().length != 3 && isNaN(CVV)) {
        event.preventDefault();
        ShowAlert("Invalid CVV Code", "Enter a correct cvv", "", "Ok", "alert");
    } else {
         event.preventDefault();
        ShowProgress();
    }
})


function ReplaceColor() {
    var FirstName = document.forms["MainForm"]["fname"].value;
    var LastName = document.forms["MainForm"]["lname"].value;
    var Address = document.forms["MainForm"]["address"].value;
    var Email = document.forms["MainForm"]["Email"].value;
    var City = document.forms["MainForm"]["city"].value;
    var Zip = document.forms["MainForm"]["zip"].value;

    var CardNumber = document.forms["MainForm"]["cardNumber"].value;
    var Name = document.forms["MainForm"]["name"].value;
    var ValidTill = document.forms["MainForm"]["validTill"].value;
    var CVV = document.forms["MainForm"]["cvv"].value;

    if (FirstName != "" && LastName != "" && Address != "" && City != "" && Zip != "" && Email != "") {
        yourDetailsLabel.style.color = "#5cb85c";
        yourDetailsLabel.innerHTML = "&#x2713; Your Details";
    } else {
        yourDetailsLabel.style.color = "#A7A7A7";
        yourDetailsLabel.innerHTML = "Your Details";
    }

    if(CardNumber != "" && Name != "" && ValidTill != "" && CVV != "") {
        Payment.style.color = "#5cb85c";
        Payment.innerHTML = "&#x2713; Payment";
    } else {
        Payment.style.color = "#A7A7A7";
        Payment.innerHTML = "Payment";
    }
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

function ShowProgress(EmailAddress) {
    CustomProgress.classList.remove("animationout");
    CustomProgress.style.transition = "0.5s";
    CustomProgress.style.visibility = "visible";

    let headingText = document.querySelector(".HeadingText");
    let LoadngBar = document.getElementById("LoadingBar");
    let Message = document.querySelector(".messagText");


    setTimeout(function() {
        LoadngBar.src = "./Images/check-mark-verified.gif";
        headingText.innerHTML = "Payment Done";
        Message.innerHTML = "";
        setTimeout(function() {
            sessionStorage.clear();
            location.href = "./ThankYou.html";
        }, 1500)
    }, 4000)
}

function sendEmail() {
    Email.send({ 
      Host: "smtp.gmail.com",
      Username: "nigeljacob245@gmail.com",
      Password: "jqygefcurcphquvg",
      To: "nigeljacob245@gmail.com",
      From: "nigeljacob245@gmail.com",
      Subject: "Your Order from Reel Times",
      Body: "Thank you for placing your order on Reel Times",
    })
      .then(function (message) {
        sessionStorage.clear();
        location.href = "./ThankYou.html";
      });
  }