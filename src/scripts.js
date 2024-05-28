//Select all "imagens"
const imagens = document.querySelectorAll('.imagens');

//when mouse is over, the text appear
imagens.forEach(imagem => {
    imagem.addEventListener('mouseover', () => {
        imagem.nextElementSibling.style.visibility = 'visible';
    });

//Mouse is out, the text disappear
    imagem.addEventListener('mouseout', () => {
        imagem.nextElementSibling.style.visibility = 'hidden';
    });
});
