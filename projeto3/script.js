console.log("Óla pessoal");

//variável para importar a tag <a> do #id=menu que consta no html
let menus = document.querySelectorAll('#menu a');

//versao javascript 6
const DefineNome = () => {
    //define o nome do link da tag <a>
    menus[0].innerHTML = "Home";
    menus[1].innerHTML = "Contato";
    menus[2].innerHTML = "Buscar";
}
DefineNome();

//versao javascript 5
/*
function DefineNome1() {
    menus[0].innerHTML = "Home";
    menus[1].innerHTML = "Contato";
}
*/

const DefineLink = () => {
    //define o nome do link da tag <a>
    menus[0].href = "Home";
    menus[1].href = "Contato";
    menus[2].href = "http://www.google.com.br"
}
DefineLink();