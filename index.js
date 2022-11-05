
let countEl=document.getElementById("count-el")
console.log(countEl)
let count=0
function increment(){
    count+=1
    countEl.innerText=count
}

let saveEl=document.getElementById("save-el")
function save(){
    let save=count + " - "
    saveEl.textContent+=save
    count=0
    countEl.innerText=0
}



