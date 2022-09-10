const c = setInterval(function(a,b) {
    a = + a;
    b = + b;
    if (a === b){
        return console.log(a);
    } else if (a < b){
        
        for (let i = a; i <= b; i++){
            console.log(i);
        }
    } else {
        for (let i = b; i <= a; i++){
            console.log(i);
        }
    }
}, 1000, prompt('number 1'), prompt('number 2'));

setTimeout(function(){
    clearInterval(c);
},5000);