"use strict";
class Smartphone {
    constructor(tipo) {
        this.saldo = 0;
        this.numero_chiamate = 0;
        this.tipo = tipo;
    }
    ricarica(importo) { }
    chiamata(minuti) { }
    numero404() {
        // mostro il saldo
        console.log(`Il tuo saldo è di ${this.saldo}€`);
    }
    getNumeroChiamate() {
        // mostro il numero chiamate
        console.log(`Hai effettuato ${this.numero_chiamate} chiamate`);
        return this.numero_chiamate;
    }
    azzeraChiamate() {
        this.numero_chiamate = 0;
        console.log("Hai resettato il numero di chiamate effettuate");
    }
}
class Iphone extends Smartphone {
    chiamata(minuti) {
        // scalo il credito in base alla chiamata e aumento il numero chiamate
        this.numero_chiamate++;
        let costo_chiamata = minuti * 0.2;
        this.saldo = this.saldo - costo_chiamata;
        console.log(`Hai effettuato una chiamata di ${minuti} minuti, hai speso ${costo_chiamata}€`);
        return costo_chiamata;
    }
    ricarica(importo) {
        this.saldo += importo;
    }
}
class SamsungGalaxy extends Smartphone {
    chiamata(minuti) {
        // scalo il credito in base alla chiamata e aumento il numero chiamate
        this.numero_chiamate++;
        let costo_chiamata = minuti * 0.15;
        this.saldo = this.saldo - costo_chiamata;
        console.log(`Hai effettuato una chiamata di ${minuti} minuti, hai speso ${costo_chiamata}€`);
    }
    ricarica(importo) {
        this.saldo += importo;
        console.log(`Ricarica di ${importo}€ effettuata.`);
    }
}
class Huawei extends Smartphone {
    chiamata(minuti) {
        // scalo il credito in base alla chiamata e aumento il numero chiamate
        this.numero_chiamate++;
        let costo_chiamata = minuti * 0.1;
        this.saldo = this.saldo - costo_chiamata;
        console.log(`Hai effettuato una chiamata di ${minuti} minuti, hai speso ${costo_chiamata}€`);
    }
    ricarica(importo) {
        this.saldo += importo;
        console.log(`Ricarica di ${importo}€ effettuata.`);
    }
}
class Utente {
    constructor(name, surname, smartphone) {
        this.name = name;
        this.surname = surname;
        this.smartphone = smartphone;
    }
}
let user1 = new Utente("Mario", "Rossi");
let iphone = new Iphone("IPhone");
user1.smartphone = iphone;
let user2 = new Utente("Luigi", "Verdi");
let galaxy = new SamsungGalaxy("Samsung");
user2.smartphone = galaxy;
let user3 = new Utente("Luca", "Rota");
let huawei = new Huawei("Huawei");
user3.smartphone = huawei;
let userArr = [user1, user2, user3];
let bgArr = ["url('assets/img/iphone.png')", "url('assets/img/galaxy.png')", "url('assets/img/huawei.png')"];
function displayContent() {
    var _a;
    let container = document.querySelector(".container");
    // !SMARTPHONE DISPLAY
    let j = 0;
    for (let user of userArr) {
        //   creo il div PHONE
        let divContainer = document.createElement("div");
        divContainer.classList.add("phone");
        divContainer.style.backgroundImage = bgArr[j];
        j++;
        // creo il div PHONESCREEN
        let phoneScreen = document.createElement("div");
        phoneScreen.classList.add("phone-screen");
        //   creo il div infos
        let divInfos = document.createElement("div");
        divInfos === null || divInfos === void 0 ? void 0 : divInfos.classList.add("infos");
        // creo h3 e ci scrivo
        let h3Name = document.createElement("h3");
        h3Name.innerHTML = `${(_a = user.smartphone) === null || _a === void 0 ? void 0 : _a.tipo} di ${user.name} ${user.surname}`;
        // creo h3 e ci scrivo
        let h2Title = document.createElement("h2");
        h2Title.innerHTML = "Ricarica:";
        // creo il bottone 5€ metto l'id e creo l'event listener
        let ricButton5 = document.createElement("button");
        ricButton5.setAttribute("id", "ric5");
        ricButton5.innerHTML = "5€";
        ricButton5.addEventListener("click", () => {
            var _a, _b;
            (_a = user.smartphone) === null || _a === void 0 ? void 0 : _a.ricarica(5);
            divConsole.innerHTML = `La ricarica di 5€ è stata effettuata. Nuovo credito: ${(_b = user.smartphone) === null || _b === void 0 ? void 0 : _b.saldo}€`;
        });
        // creo il bottone 10€ metto l'id e creo l'event listener
        let ricButton10 = document.createElement("button");
        ricButton10.innerHTML = "10€";
        ricButton10.setAttribute("id", "ric10");
        ricButton10.addEventListener("click", () => {
            var _a, _b;
            (_a = user.smartphone) === null || _a === void 0 ? void 0 : _a.ricarica(10);
            divConsole.innerHTML = `La ricarica di 10€ è stata effettuata. Nuovo credito: ${(_b = user.smartphone) === null || _b === void 0 ? void 0 : _b.saldo}€`;
        });
        // creo il bottone 15€ metto l'id e creo l'event listener
        let ricButton15 = document.createElement("button");
        ricButton15.innerHTML = "15€";
        ricButton15.setAttribute("id", "ric15");
        ricButton15.addEventListener("click", () => {
            var _a, _b;
            (_a = user.smartphone) === null || _a === void 0 ? void 0 : _a.ricarica(15);
            divConsole.innerHTML = `La ricarica di 15€ è stata effettuata. Nuovo credito: ${(_b = user.smartphone) === null || _b === void 0 ? void 0 : _b.saldo}€`;
        });
        //   creo il bottone per visualizzare il saldo
        let btnSaldo = document.createElement("button");
        btnSaldo.classList.add("btn-big");
        btnSaldo.innerHTML = "SALDO";
        btnSaldo.addEventListener("click", () => {
            var _a, _b;
            (_a = user.smartphone) === null || _a === void 0 ? void 0 : _a.numero404();
            divConsole.innerHTML = `Il tuo saldo è: ${(_b = user.smartphone) === null || _b === void 0 ? void 0 : _b.saldo}€`;
        });
        //   creo il bottone per visualizzare il numero di chiamate
        let btnChiamate = document.createElement("button");
        btnChiamate.innerHTML = "chiamate";
        btnChiamate.classList.add("btn-big");
        btnChiamate.addEventListener("click", () => {
            var _a;
            divConsole.innerHTML = `Chiamate effettuate: ${(_a = user.smartphone) === null || _a === void 0 ? void 0 : _a.getNumeroChiamate()}`;
        });
        //   creo il bottone per azzerare le chiamate
        let btnAzzera = document.createElement("button");
        btnAzzera.innerHTML = "azzera chiamate";
        btnAzzera.classList.add("btn-big");
        btnAzzera.addEventListener("click", () => {
            var _a;
            (_a = user.smartphone) === null || _a === void 0 ? void 0 : _a.azzeraChiamate();
            divConsole.innerHTML = `Chiamate effettuate: 0`;
        });
        // inserisco tutto nel div infos
        divInfos.append(h3Name, h2Title, ricButton5, ricButton10, ricButton15, btnSaldo, btnChiamate, btnAzzera);
        //   inserisco il div infos nel div totale screen
        phoneScreen.appendChild(divInfos);
        //   creo il div Console e lo aggiungo al div totale screen
        let divConsole = document.createElement("div");
        divConsole.classList.add("phone-console");
        phoneScreen.appendChild(divConsole);
        // creo il bottone chiamata e lo aggiungo al div totale screen
        let callBtn = document.createElement("button");
        callBtn.setAttribute("id", "btn-phone");
        callBtn.innerHTML = '<i class="fa-solid fa-phone"></i>';
        let onCall = false;
        callBtn.addEventListener("click", () => {
            var _a, _b;
            if (!onCall) {
                startTimer(divConsole);
                onCall = true;
                callBtn.style.backgroundColor = "red";
            }
            else {
                onCall = false;
                callBtn.style.backgroundColor = "";
                clearInterval(interval);
                console.log(Number(s));
                let minuti = s;
                console.log(minuti);
                (_a = user.smartphone) === null || _a === void 0 ? void 0 : _a.chiamata(minuti);
                divConsole.innerHTML = `Chiamata terminata. Costo totale: ${(_b = user.smartphone) === null || _b === void 0 ? void 0 : _b.chiamata(minuti)}€`;
            }
        });
        phoneScreen.appendChild(callBtn);
        divContainer.appendChild(phoneScreen);
        container.appendChild(divContainer);
    }
}
onload = () => {
    displayContent();
};
let interval;
let s;
function startTimer(elem) {
    let s = 1;
    interval = setInterval(function () {
        if (s < 10) {
            elem.innerHTML = `0:0${s}`;
        }
        else {
            elem.innerHTML = `0:${s}`;
        }
        s++;
    }, 1000);
    console.log(s);
    return s;
}
