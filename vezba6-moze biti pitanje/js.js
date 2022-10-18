for (let i = 1; i <= 100 ; i++) {
    if(i%5==0 && i%3==0){
        document.write(`Fiz Baz <br>`);
    } else if(i%3==0){
        document.write(`Fiz <br>`);
    } else if(i%5==0){
        document.write(`Baz <br>`);
    }else { 
        document.write(`${i} <br>`);
    }
   
} 
//document.write(i);
