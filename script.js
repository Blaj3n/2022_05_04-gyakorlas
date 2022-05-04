window.addEventListener("load", function () {
  //betöltődik az oldal, utána futnak le ezek a kódok
  //document.getElementById("azonosito")-egyetlen elem
  //document.getElementsByClassName("valami") // több ilyen is lehet, tehát tömb
  document.querySelector("footer").innerText = "Ulrich Bence";
  const spanTomb = document.querySelectorAll("#proba span");

  /*let szamok = "";
  for (let index = 0; index < 100; index++) {
    let a;
    console.log(a);
    var b = 2;
    szamok += index + ", ";
    a = 5;
  }*/

  spanTomb[2].innerHTML = "szamok";

  const szinesElem = document.querySelector("#szines");

  let txt = "";
  for (let index = 0; index < 10; index++) {
    txt += "<div></div>";
  }
  szinesElem.innerHTML = txt;
  const szinesElembenDivTomb = document.querySelectorAll("#szines>div");

  for (let index = 0; index < szinesElembenDivTomb.length; index++) {
    const element = szinesElembenDivTomb[index];
    /*element.style.width = "10px";
    element.style.height = "10px";
    element.style.backgroundColor = "blue";
    element.style.margin = "2px";*/
    element.classList.add("formazas");
    element.classList.add("masikformazas");

    element.addEventListener("click", function () {
      console.log("Ügyesek vagyunk!");
    });
  }

  /*  const newNode = document.createElement("div");
  const textNode = document.createTextNode("Beszúrva");
  newNode.appendChild(textNode);

  const bodyElem = document.querySelector("footer");
  bodyElem.insertBefore(newNode, bodyElem.children[1]);*/
});
