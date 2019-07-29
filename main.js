const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI*2, false);
c.strokeStyle = 'blue';
c.stroke();
let x = 200;
function animate(){
    requestAnimationFrame(animate);
    console.log('How long it loops');
    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI*2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    x +=1;

}
animate();