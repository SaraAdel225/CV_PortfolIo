
// icon in small Size
let icon = document.querySelector(".icon")
let ul = document.querySelector(".listHead")
let widthWindow = 1080


function checkScreenSize(){
    if(window.innerWidth  <= widthWindow ){
        icon.style.display = "block"
    }else{
        icon.style.display = "none"
    }
}
icon.onclick = function(){
    if(ul.style.display == "block"){
        ul.style.display = "none"
        icon.classList.remove("click")
    }else{
        ul.style.display = "block"
        icon.classList.add("click")
    }
}
setInterval(checkScreenSize,100) 
// END icon

// portfoilo
let switcher = document.querySelectorAll(".switcher li")
let gallery = document.querySelectorAll(".gallery a")

switcher.forEach( function(ele){
    ele.addEventListener("click",function(){
        switcher.forEach(li =>{
            li.classList.remove("active")
        })
        this.classList.add("active")
    })
    ele.addEventListener("click", function(){
        gallery.forEach(function(img){
        img.style ="display:none;" 
    })
    document.querySelectorAll(this.dataset.cat).forEach((img)=>{
        img.style = "display:block;"
    })
    })
})

// scroll 
let aboutPage = document.querySelector(".about_page")
let header = document.querySelector(".header")
let logo = document.querySelector(".logo")
let photoGra = document.querySelector(".photogra img") 

// scroll to skills
skillPage = document.querySelector(".Skill_page")
cricle = document.querySelectorAll(".cricle")
number = document.querySelectorAll(".cricle span")

window.onscroll = function() {
    // scroll to about page
    if(window.scrollY >= aboutPage.offsetTop - 100 ){
        header.style.backgroundColor = "var(--main_color)"
        logo.style.color = "white";
        photoGra.style = "left: 45%;"
    }
    else{
        header.style.backgroundColor = "transparent"
        logo.style.color = "var(--main_color)";
        photoGra.style.left = "-1000px;"
        photoGra.style = "left: -200px;"
    }
    // scroll to skill page
    // if(window.scrollY >= skillPage.offsetTop ){
//         cricle.forEach((el)=>{
//             let goal = el.dataset.goal
//             let count =0 
//             let counter = setInterval(()=>{
//                 el.style.background = `conic-gradient(var(--main_color) ${ count *3.6}deg, white 0deg)`
//                 if(count == goal){
//                 clearInterval(counter)
//                 }
//             count++ 
//             },50)
//         })
//         number.forEach((el)=>{
//             let goal = el.dataset.goal
//             let count =0 
//             let counter = setInterval(()=>{
//                 count++ 
//                 if(count == goal ){
//                 clearInterval(counter)
//                 }
//                 el.innerHTML = `${count}%`
//             },50)
//         })
// };

}
