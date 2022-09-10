let arr = [2, 5, 0, 0,'e'];

function showMeaning(){
  for (let a = 0; a < arr.length; a++){
    if (arr[a] === 0){
        console.log('Это 0');
    } else if (typeof arr[a] == 'number'){
        if (arr[a] % 2 == 0){
        console.log('Это четное число');
        } else {
        console.log('Это нечетное число');
        }
    }else {
        console.log('Это не число');
    }  
  }
}

showMeaning();