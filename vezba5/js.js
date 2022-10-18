let zbir = 0;
let brojac = 0;

for (let i = 1; i < 20 ; i++) {
    if(i%3==0){
        zbir += i;
        brojac++;
        
    }
    srednjaVrednost = zbir / brojac;
    
} document.write(srednjaVrednost);
document.write(`<br>${brojac}`);
document.write(`<br>${zbir}`);