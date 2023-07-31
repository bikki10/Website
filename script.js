const dynamicText = document.querySelector("h1 span");
const words=['Web Developer','Game Developer','Web Designer', 'Digital Marketer', 'QA Engineer'];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = ()=>{
    const currentWord= words[wordIndex];
    const currentchar=currentWord.substring(0, charIndex);
    dynamicText.textContent = currentWord; 

    if(!isDeleting && charIndex<currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex >0){
        charIndex--;
        setTimeout(typeEffect, 100);
    } else{
        isDeleting = !isDeleting;
        
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();