//. 1. BUSCAR Y ENCONTRAR EN UNA VARIABLE TODOS LOS ELEMENTOS IMG DE MI WEB

const myImgs = document.querySelectorAll('img')

console.log(myImgs);

//  2. RECORRED TODOS LOS ELEMENTOS IMG ENCONTRADOS Y CAMBIARLOS src
myImgs.forEach(imgNode =>{
    imgNode.src = 'enlace de la'
});
