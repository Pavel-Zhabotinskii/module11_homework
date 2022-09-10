function a(b){
  return function(c = 3){
    let r = b + c;
    console.log(r);    
  }; 
}

const n = a(8);
n();