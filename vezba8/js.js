// let a = parseInt(prompt(`Unesi broj ocena:`));
// let zbir = 0;
// let brojac = 0;

// for (i=0 ; i<a ; i++) {
//     let ocena = parseInt(prompt(`Unesi ocenu:`));

//     if (ocena===1){
//         document.write(`ucenik je nedovoljan!`);
//         break;
//     }
//     else {
//     zbir += ocena;
//     brojac++;
//     }
//     prosek = zbir / brojac;
// }
// document.write(prosek);


let n = parseInt(prompt(`Koliko ocena zelite da evidentirate ?`));
let zbir = 0;
let brojac = 0;
let prosek;

for (let i = 0; i < n; i++) {
    let ocena = parseInt(prompt(`Unesite ocenu od 1 do 5`));

    if(ocena===1) {
        alert(`Ucenik je nedovoljan!!!`);
        break;
    }else {
        brojac++;
        zbir += ocena;
    }
    prosek = Math.round(zbir / brojac);
    if (brojac === n) {
        alert(prosek);
    }
}
