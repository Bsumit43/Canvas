var canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = "#596275";
            c.stroke();
            c.fill();
        };
        this.update =()=> {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            this.x += this.dx;
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.y += this.dy;
            this.draw();
        };
    }
}

var circleArray = [];
for(var i=0;i<200;i++){
    var x=Math.random()*(innerWidth-radius*2)+radius;
    var dx=(Math.random()-0.5)*8;
    var y=Math.random()*(innerHeight-radius*2)+radius;
    var dy=(Math.random()-0.5)*8;
    var radius=30;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight)

    for(var i=0; i < circleArray.length;i++){
        circleArray[i].update();
    }
}
animate();