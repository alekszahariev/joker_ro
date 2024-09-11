let input = document.getElementById("code")
let button = document.getElementById("submitbtn")

button.addEventListener("click", function(){
    checkcase()
})

input.addEventListener('keypress', (event)=>{

    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;

    // 13 points the enter key
    if(keyCode === 13) {
      // call click function of the buttonn 
      checkcase()
    }
      
  });


let uliki_martin = [
    {name:"Жокер №1", info:"Началото е в снимките."},
    {name:"Жокер №2", info:"Имената имат значение."},
    {name:"Жокер №3", info:"Понякога се налага да се обърнеш. #3"},
    {name:"Жокер №4", info:"Търсите човек, който яде човек :)"},
    {name:"Жокер №5", info:"Не е Тодор!"},
    {name:"Жокер №6", info:"Стига толкова жокери.. успех! :)"}
]

let uliki_rebeca = [
    {name:"Joker #1", info:"Parola de pe telefon este direct legată de Rebecca. Informațiile ei personale."},
    {name:"Joker #2", info:"Există ceva important în istoricul căutărilor pe internet!"},
    {name:"Joker #3", info:"Îți place să numeri? Caută în Note.Acolo este un mesaj codat."},
    {name:"Joker #4", info:"Cine întreține site-ul web al școlii?"}
]

let uliki_ardjikov = [
    {name:"Жокер №1", info:"Използвайте търсачката за да намерите емайла на Арджиков."},
    {name:"Жокер №2", info:"Шифърът в папката (бялото листче с йероглифи) може да разрешите от приложението Photos"},
    {name:"Жокер №3", info:"За да намерите ип адреса трябва да влезете във фейсбук и да намерите скрития номер и да му звъннете."},
    {name:"Жокер №4", info:"Любимия актьор на арджиков може да откриете , като намеруте любимия му филм в Photos.."},
    {name:"Жокер №5", info:"Използвайте функцията - забравена парола"}
]

function checkcase(){
    let code = input.value.toLowerCase().replace(/\s/g, '')
    let hashedcode = CryptoJS.SHA256(code).toString();
    let casename;
    console.log(hashedcode);

    if(hashedcode==="06cb230ace635df5ad2e2ecd87ae3814d287735f162a1c43b3162497a5d440bb"){
        casename = "sara";
        input.value=""
        ShowSara()
    }
    if(hashedcode==="f721b72c5e5d6e27f8378016f0caac1b7e599086aaad15d007b3eeade46a1399"){
        casename = "maria";
        input.value=""
        ShowMaria()
    }
    
    if(hashedcode==="0cb2d16d9feb7298d9c428cb9fc49cc74f9ff3920d69e4b571839cca4b8a55cd"){
        casename = "martin"
        input.value=""
        ShowMartin()
    }

    if(hashedcode==="ac105ed1d820acb545904f13b709adcc19dba64ad6f66d5b286be9efca6da430"){
        casename = "rebecca"
        input.value=""
        ShowRebecca()
    }
     if(hashedcode==="e8b8d420b0a1e566dc7397dd73fefa85c0d320a64a8e44bf207b22699520e359"){
        casename = "ardjikov"
        input.value=""
        ShowArdjikov()
    }
    

    if(casename===undefined){
        let button = document.getElementById("submitbtn")
        button.innerHTML="Cod greșit"
        button.style.background="#dd0000"
        input.value=""
        setTimeout(() => {
            button.innerHTML="Deschis"
            button.style.background="#146c43"
        }, 1000);
    }
}


function ShowMaria(){
    // Iterate over each object in the array
uliki_maria.forEach((ulika) => {
    document.getElementById("title_case").innerHTML = "Случай: Мария"
    document.querySelector(".writecode").style.display = "none";
    const uliki_div = document.querySelector(".uliki");
    uliki_div.innerHTML += ` <div class="ulika">
    <span>${ulika.name}</span>
    <p>${ulika.info}</p>
</div>`

let AllUliki = document.querySelectorAll(".ulika")

AllUliki.forEach((single_ulika) =>{
    single_ulika.addEventListener("click", function(){
       let paragraph = single_ulika.querySelector("p")
       if(paragraph.style.display==="block"){
        paragraph.style.display="none"
       }else{
        paragraph.style.display="block"
       }
    })
})
});
}

function ShowMartin(){
    // Iterate over each object in the array
uliki_martin.forEach((ulika) => {
    document.getElementById("title_case").innerHTML = "Случай: Мартин"
    document.querySelector(".writecode").style.display = "none";
    const uliki_div = document.querySelector(".uliki");
    uliki_div.innerHTML += ` <div class="ulika">
    <span>${ulika.name}</span>
    <p>${ulika.info}</p>
</div>`

let AllUliki = document.querySelectorAll(".ulika")

AllUliki.forEach((single_ulika) =>{
    single_ulika.addEventListener("click", function(){
       let paragraph = single_ulika.querySelector("p")
       if(paragraph.style.display==="block"){
        paragraph.style.display="none"
       }else{
        paragraph.style.display="block"
       }
    })
})
});
}

function ShowRebecca(){
     // Iterate over each object in the array
uliki_rebeca.forEach((ulika) => {
    document.getElementById("title_case").innerHTML = "Dosarul: Rebecca"
    document.querySelector(".writecode").style.display = "none";
    const uliki_div = document.querySelector(".uliki");
    uliki_div.innerHTML += ` <div class="ulika">
    <span>${ulika.name}</span>
    <p>${ulika.info}</p>
</div>`

let AllUliki = document.querySelectorAll(".ulika")

AllUliki.forEach((single_ulika) =>{
    single_ulika.addEventListener("click", function(){
       let paragraph = single_ulika.querySelector("p")
       if(paragraph.style.display==="block"){
        paragraph.style.display="none"
       }else{
        paragraph.style.display="block"
       }
    })
})
});
}

function ShowSara(){
    // Iterate over each object in the array
uliki_sara.forEach((ulika) => {
    document.getElementById("title_case").innerHTML = "Случай: Сара"
    document.querySelector(".writecode").style.display = "none";
    const uliki_div = document.querySelector(".uliki");
    uliki_div.innerHTML += ` <div class="ulika">
    <span>${ulika.name}</span>
    <p>${ulika.info}</p>
</div>`

let AllUliki = document.querySelectorAll(".ulika")

AllUliki.forEach((single_ulika) =>{
    single_ulika.addEventListener("click", function(){
       let paragraph = single_ulika.querySelector("p")
       if(paragraph.style.display==="block"){
        paragraph.style.display="none"
       }else{
        paragraph.style.display="block"
       }
    })
})
});
}

function ShowArdjikov(){
    // Iterate over each object in the array
uliki_ardjikov.forEach((ulika) => {
    document.getElementById("title_case").innerHTML = "Случай: Арджиков"
    document.querySelector(".writecode").style.display = "none";
    const uliki_div = document.querySelector(".uliki");
    uliki_div.innerHTML += ` <div class="ulika">
    <span>${ulika.name}</span>
    <p>${ulika.info}</p>
</div>`

let AllUliki = document.querySelectorAll(".ulika")

AllUliki.forEach((single_ulika) =>{
    single_ulika.addEventListener("click", function(){
       let paragraph = single_ulika.querySelector("p")
       if(paragraph.style.display==="block"){
        paragraph.style.display="none"
       }else{
        paragraph.style.display="block"
       }
    })
})
});
}
