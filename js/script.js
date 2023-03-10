const select=document.getElementById("option");
const div = document.getElementById("imgmomos1");
const div2 = document.getElementById("imgmomos2");
const div3 = document.getElementById("imgmomos3");
const div4 = document.getElementById("imgmomos4");

select.addEventListener("change", function(){
    if (select.value == "1") {
        div.style.display="block";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="none";
} else if (select.value == "2") {
        div.style.display="none";
        div2.style.display="block";
        div3.style.display="none";
        div4.style.display="none";
}else if (select.value == "3") {
        div.style.display="none";
        div2.style.display="none";
        div3.style.display="block";
        div4.style.display="none";
}else if (select.value == "4") {
        div.style.display="none";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="block";
}
});

function cambiarmomo(){
 const img =document.getElementById("previa2");
 const boton = event.target;
 const txt = document.getElementById("txtmeme");
 switch (boton.id) {
    case "imagenunoS":
      img.src = "image//chispop/chispop1.jpeg";
      txt.style.color="#fff";
      break;
    case "imagendosS":
      img.src = "image//chispop/chispop2.jpeg";
      txt.style.color="#fff";
      break;
    case "imagentresS":
      img.src = "image//chispop/chispop3.jpg";
      txt.style.color="#fff";
      break;

      case "imagenunoG":
        img.src = "image//grasa/grasa1.jpg";
        txt.style.color="#000000";
        break;
      case "imagendosG":
        img.src = "image//grasa/grasa2.jpg";
        txt.style.color="#000000";
        break;
      case "imagentresG":
        img.src = "image//grasa/grasa3.jpg";
        txt.style.color="#000000";
        break;

        case "imagenunoE":
            img.src = "image//especial/especial1.jpg";
            txt.style.color="#fff";
            break;
          case "imagendosE":
            img.src = "image//especial/especial2.jpg";
            txt.style.color="#fff";
            break;
          case "imagentresE":
            img.src = "image//especial/especial3.jpg";
            txt.style.color="#fff";
            break;

            case "imagenunoH":
                img.src = "image//hulk/hulk1.jpg";
                txt.style.color="#000000";
                break;
              case "imagendosH":
                img.src = "image//hulk/hulk2.jpg";
                txt.style.color="#000000";
                break;
              case "imagentresH":
                img.src = "image//hulk/hulk3.jpeg";
                txt.style.color="#000000";
                break;
  }
}

const openbtn = document.querySelector("#crear");
const closebtn = document.querySelector("#cerrar");
const modal = document.querySelector("#modal");

openbtn.addEventListener("click",()=>{
    modal.showModal();
})
closebtn.addEventListener("click",()=>{
    modal.close();
})
function Acrearmemes(){
const texto = document.getElementById("txtmeme");
let momazos = document.getElementById("momazo").value;

console.log(momazos);
texto.innerHTML=momazos;
}