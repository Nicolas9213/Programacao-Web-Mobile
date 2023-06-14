let mudarCorFundo = document.getElementById("corFundo");
let mudarCorTitulo = document.getElementById("corTitulo");
let mudarCorParagrafo = document.getElementById("corParagrafo");
let mudarFonteTitulo = document.getElementById("fonteTitulo");
let mudarFonteParagrafo = document.getElementById("fonteParagrafo");
let mudarTudo = document.getElementById("mudarTudo");

function corAleatoria() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}
mudarCorFundo.addEventListener('click', function(){
    document.body.style.backgroundColor = corAleatoria()
});
mudarCorTitulo.addEventListener('click', function() {
    titulo.style.color = corAleatoria()
});
mudarCorParagrafo.addEventListener('click', function() {
    paragrafo.style.color = corAleatoria();
})
const fontes = [
    'Great Vibes',
    'IBM Plex Mono',
    'Kablammo',
    'Lobster',
    'Lora',
    'Montserrat',
    'Nova Cut',
    'Orbitron',
    'Oswald',
    'Poppins',
    'Roboto',
    'Rock 3D',
    'Russo One',
    'Shadows Into Light',
    'Ubuntu',
];
function fontesAleatorias() {
    return fontes[parseInt(Math.random() * fontes.length)];
}
mudarFonteTitulo.addEventListener('click', function() {
    titulo.style.fontFamily = fontesAleatorias();
})