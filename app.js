const form = document.querySelector('#memeGenerator')
const imageInput = document.querySelector('#img')
const TopTextInput = document.querySelector('#toptext')
const BottomTextInput = document.querySelector('#bottomtext')
const memeSubmitted = document.querySelector('#memeSubmitted');

memeGenerator.addEventListener("submit", function(e) {
    e.preventDefault();
    const newMeme = makeMeme(
        console.log(imageInput.value, 
        TopTextInput.value, 
        BottomTextInput.value)
    );
    memeSubmitted.append(newMeme);
});
 function TopText(TopText) {
     const topWord = document.createElement('h2');
     meme.innerText = TopText;
     return TopText;

 }
 function BottomText (BottomText) {
    const bottomWord = document.createElement('h2');
    meme.innerText = BottomText;
    return BottomText;
 }
 function Image(Image) {
    const meme = document.createElement('h2');
    meme.image.src= Image;
    return Image;
 }

 function makeMeme (TopText, BottomText, Image) {

 }
 