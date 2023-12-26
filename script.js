var heading=document.querySelector("h5")
var btn=document.querySelector("#button")
var flag=0

button.addEventListener("click",function(){
    if(flag==0){
        heading.innerHTML="Friends!"
        heading.style.color="white"
        btn.style.backgroundColor= "black"
        btn.style.color="white"
        btn.innerHTML="Remove Friend"
        flag=1
    }else{
        heading.innerHTML="Not a Friend"
        heading.style.color="black"
        btn.style.color="black"
        btn.style.backgroundColor= "white"
        btn.innerHTML="Add Friend"
        flag=0
    }
})