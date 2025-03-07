let arme = document.getElementById("choice");
let partir = document.getElementById("go");
let fin = document.getElementById("countdownDisplay");

let timer = null; // Variable pour stocker l'intervalle
let countdown = 0; // Variable pour la durée actuelle


fin.style.fontSize = "80px";
fin.style.display = "flex";
fin.style.justifyContent = "center";
fin.style.letterSpacing = "3px";
fin.style.boxShadow = "5px 5px 5px 5px black;"

arme.addEventListener("input", () => {
    if (timer) {
        clearInterval(timer); 
        timer = null; 
        fin.textContent = ""; 
    }

    let minutes = parseInt(arme.value);
    if (!isNaN(minutes) && minutes > 0) {
        countdown = minutes * 60; 
        let remainingMinutes = Math.floor(countdown / 60);
        let remainingSeconds = countdown % 60;
        fin.textContent = `${remainingMinutes} : ${remainingSeconds}`; 
    } else {
        fin.textContent = "Veuillez entrer un nombre de minutes valide.";
    }
});


partir.addEventListener("click", () => {
    if (timer) {
        clearInterval(timer); 
        timer = null; 
    }

    timer = setInterval(() => {
        if (countdown > 0) {
            countdown--;
            let remainingMinutes = Math.floor(countdown / 60);
            let remainingSeconds = countdown % 60;
            fin.textContent = `${remainingMinutes} : ${remainingSeconds}`;
        } else {
            clearInterval(timer); 
            timer = null; 
            fin.textContent = "C'est terminé !"; 
        }
    }, 1000); 
});


partir.addEventListener("dblclick", () => {
    if (timer) {
        clearInterval(timer); 
        timer = null; 
        fin.textContent = "C'est terminé !"; 
    }
});
