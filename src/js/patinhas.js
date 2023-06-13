const numeroPatinhas = 10;
const color = '#dedede';

const canvas = document.getElementById("patinhas-canvas");
console.log(canvas);

const context = canvas.getContext('2d');

const img = new Image();
img.src = './src/media/paw.png';

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Patinha{
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.color = color;
        this.opacity = 0.1;

        this.alive = true;
        this.mature = false;

        return this;
    }
    updateState(){
        if (this.opacity < 0) {
            this.alive = false;
        }else{
            if(this.opacity < 1 && !this.mature){
                this.opacity += 0.01;
            }else{
                this.opacity -= 0.01;
                this.mature = true;
            }
        }
    }
    render(context){
        context.globalAlpha = this.opacity;
        context.globalCompositeOperation = 'source-over';

        context.fillStyle = this.color;
        context.fill();

        context.drawImage(img, this.x, this.y);

    }
}


let patinhas = [];

for(let i = 0; i < numeroPatinhas; i++){
    patinhas.push(novaPatinha());
}

function novaPatinha() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    return new Patinha(x, y);
}

function updateCanvas() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numeroPatinhas; i++) {
        if(patinhas[i].alive){
            patinhas[i].updateState();
            patinhas[i].render(context);
        }else{
            patinhas.splice(i, 1);
            patinhas.push(novaPatinha());
        }   
    }

    requestAnimationFrame(updateCanvas);
}

img.onload = updateCanvas();