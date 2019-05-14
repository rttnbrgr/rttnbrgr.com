console.log('woah');

const doc = document.documentElement;
const card = document.querySelector('.card')

console.log("h = " + getComputedStyle(doc).width.slice(0,-2));
console.log("w = " + getComputedStyle(doc).height.slice(0,-2));


document.addEventListener('mousemove', function(e) {
  
  let w =  getComputedStyle(doc).width.slice(0,-2);
  let h =  getComputedStyle(doc).height.slice(0,-2);
  
  const maxTilt = 45;
  const tiltFactor = h / 2 / maxTilt;
  
  let ry = (w / 2 - e.pageX) / 10;
  let rx = (h / 2 - e.pageY) / tiltFactor;
  
  card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg`;
});