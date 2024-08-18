const buttonClicked= document.querySelector(".button");
const knownStatus = document.querySelector(".known")
console.log("I hav ebeen clicked")
let click = 0;

buttonClicked.addEventListener("click" ,function(){
    if (click  == 1) {
    knownStatus.innerHTML= "Stranger" ,
    knownStatus.style.color = 'Red',
    buttonClicked.innerHTML = "Add Friend",
    buttonClicked.style.color = "Green"
    console.log(click)
    click = 0
    }
    else{
        knownStatus.innerHTML = "Friend"
        knownStatus.style.color = 'Green',
        buttonClicked.innerHTML = "Remove Friend",
        buttonClicked.style.color = "red"
        click = 1
    }
})