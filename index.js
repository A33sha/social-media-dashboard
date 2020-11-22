const btn = document.querySelector("#theme");
const body = document.querySelector("body");
const header = document.querySelector("header");
const box = document.querySelectorAll("section");
const h1 = document.querySelector("h1");
const h3 = document.querySelectorAll("h3");
const h2 = document.querySelector("h2");
const textColor = document.querySelectorAll(".p-dark");
const whiteNumbers = document.querySelectorAll(".darknumbers");
btn.addEventListener("click", ()=>{
    body.classList.toggle("whiteBg");
    header.classList.toggle("whiteheader");
    h1.classList.toggle("p-white");
    h2.classList.toggle("p-white");
})
box.forEach((section) => {
    btn.addEventListener('click', () => {
    //   if(section.classList.contains("whitesection")===false){
    //       section.classList.add("whitesection");
          
    //   }else{
    //   section.classList.remove("whiteection");

    //   }
    section.classList.toggle("whitesection");
    });
})
h3.forEach((heading) => {
    btn.addEventListener('click', () => {
      if(heading.classList.contains("whiteh3")===false){
          heading.classList.add("whiteh3");
      }else{
      heading.classList.remove("whiteh3");
      }
    });
})
textColor.forEach((color) => {
    btn.addEventListener('click', () => {
        if(color.classList.contains("p-white")===false){
        color.classList.remove("p-dark")
          color.classList.toggle("p-white");
        }
        else{
            color.classList.remove("p-white")
            color.classList.toggle("p-dark");
        }
    });
})
whiteNumbers.forEach((number) => {
    btn.addEventListener('click', () => {
   
     number.classList.toggle("whitenumbers")
    });
})
