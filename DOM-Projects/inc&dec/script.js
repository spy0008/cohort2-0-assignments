let h1 = document.querySelector('h1')
let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')

let count = 0;

inc.addEventListener('click', function(){
    count++;
    h1.innerHTML = count;
})


dec.addEventListener('click', function(){
    if(count>0){
        count--;
        h1.innerHTML = count;
    } else{
        count = 0;
        h1.innerHTML = count;
    }
})