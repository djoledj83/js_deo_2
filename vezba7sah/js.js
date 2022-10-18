let a = parseInt(prompt(`Unesite broj redova`));
let b = parseInt(prompt(`Unesite broj kolona`));
let sadrzaj = 0;

document.write(`<table>`);

for (let i = 0; i < a; i++) {
    document.write(`<tr>`);

    for (let j = 0; j < b; j++) { 
        // sadrzaj++;
        if((j+i)%2==0){
            document.write(`<td class="polje">${sadrzaj}</td>`);
        } else{
            document.write(`<td>${sadrzaj}</td>`);
        } 
    }
    document.write(`</tr>`);
}

document.write(`</table>`);



