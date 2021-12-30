let count = 0
let counterVar = document.getElementById("count_el")
function countIncrementFun(){
    count += 1
    counterVar.textContent =count

}

let previusEl = document.getElementById('previus-data')
function saveFun(){
    previusEl.textContent =previusEl.innerText + " -"+count
    // console.log(saveEl.innerText);
    
    counterVar.textContent = 0
    count = 0
    
}

let mypoint = 3
function add3point(){

    mypoint +=3
    // console.log(mypoint);
}
add3point()
add3point()
add3point()
function remove1point(){
mypoint -=1
// console.log(mypoint);
}
remove1point()
remove1point()
console.log(mypoint);