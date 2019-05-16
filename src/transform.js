const doc = document.documentElement; // Select the document
const card = document.querySelector('.card') // Select the card

// Debug
console.log("h = " + getComputedStyle(doc).width.slice(0,-2));
console.log("w = " + getComputedStyle(doc).height.slice(0,-2));

document.addEventListener('mousemove', function(e) {
  
  // Get the width & height of the page  
  let w =  getComputedStyle(doc).width.slice(0,-2);
  let h =  getComputedStyle(doc).height.slice(0,-2);
  
  // Set max tilt for card
  const maxTilt = 25;
  const tiltFactor = dimension => dimension / 2 / maxTilt ;
  
  // Calculate the transform for card
  let ry = (w / 2 - e.pageX) / tiltFactor(w);
  let rx = (h / 2 - e.pageY) / tiltFactor(h);
  
  // Apply via inline style
  // card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg`;
  card.style.transform = `rotateX(${rx}deg)`;
});