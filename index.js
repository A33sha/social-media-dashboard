const btn = document.querySelector("#theme");
const body = document.querySelector("body");
const header = document.querySelector("header");
const box = document.querySelectorAll("section");
const h1 = document.querySelector("h1");
const h3 = document.querySelectorAll("h3");
const h2 = document.querySelector("h2");
const textColor = document.querySelectorAll(".p-white");
const whiteNumbers = document.querySelectorAll(".numbers");
btn.addEventListener("click", ()=>{
    body.classList.toggle("darkBg");
    header.classList.toggle("darkheader");
    h1.classList.toggle("p-dark");
    h2.classList.toggle("p-dark");
})
box.forEach((section) => {
    btn.addEventListener('click', () => {
      if(section.classList.contains("darksection")===false){
          section.classList.add("darksection");
          
      }else{
      section.classList.remove("darksection");

      }
    });
})
h3.forEach((heading) => {
    btn.addEventListener('click', () => {
      if(heading.classList.contains("darkh3")===false){
          heading.classList.add("darkh3");
      }else{
      heading.classList.remove("darkh3");
      }
    });
})
textColor.forEach((color) => {
    btn.addEventListener('click', () => {
        if(color.classList.contains("p-dark")===false){
        color.classList.remove("p-white")
          color.classList.toggle("p-dark");
        }
        else{
            color.classList.remove("p-dark")
            color.classList.toggle("p-white");
        }
    });
})
whiteNumbers.forEach((number) => {
    btn.addEventListener('click', () => {
   
     number.classList.toggle("darknumbers")
    });
})
