setTimeout(() => {
  const dynamicText = document.querySelector("h3 span");
  const words = [
    // "",
    "Web Developer",
    "Game Developer",
    "Web Designer",
    "Digital Marketer",
    "QA Tester",
  ];

  let wordIndex = 0;
  let charIndex = 1;
  let isDeleting = false;

  const typeEffect = () => {
    const currentWord = words[wordIndex];

    const currentchar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentchar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
      // If condition is true, type the next character
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      // If condition is true, remove the previous character
      charIndex--;
      setTimeout(typeEffect, 80);
    } else {
      // If word is deleted, then switch to the next word
      isDeleting = !isDeleting;
      dynamicText.classList.remove("stop-blinking");
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1200);
    }
  };

  typeEffect();
}, 1500);
