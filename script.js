// const -> proměnná (konstanta - nemění se)
// let -> proměnná (může se měnit)
const tlačítko = document.getElementById("nova_hra"); //přístup k tlačítku

function stisknutiTlacitka(){
    window.location.reload()
}

tlačítko.addEventListener("mousedown", stisknutiTlacitka)

//KRESLENI
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "black"

//KOLECKA
function vytvorKolecko(x,y){
    ctx.beginPath()
    ctx.strokeStyle = "blue"
    ctx.arc(x, y, 50, 0, 2*Math.PI);
    ctx.stroke()
    ctx.closePath()
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return [x,y];
}

//KRIZEK
function nakresliKrizek(x,y){
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(x+20,y+20)
    ctx.lineTo(x+125,y+125)
    ctx.moveTo(x+20,y+125)
    ctx.lineTo(x+125,y+20)
    ctx.stroke()
    ctx.closePath()
}

//STRIDANI
let Stridani = true

canvas.addEventListener('mousedown', function(e) {
    if (win==false){
    const [x,y] = getCursorPosition(canvas, e)
    ctx.lineWidth = 5
    for (let i = 0; i<souradnice.length; i++){
        if (x >= souradnice[i].x && x < souradnice[i].x + 145 && y >= souradnice[i].y && y < souradnice[i].y + 145) {
            if(policka[i]!=1){
                if(Stridani){
                nakresliKrizek(souradnice[i].x, souradnice[i].y)
                policka[i] = 1
                souradnice[i].stav = "X"
                Stridani=false
                }
                else{
                vytvorKolecko(souradnice[i].x+72.5, souradnice[i].y+72.5)
                policka[i] = 1
                souradnice[i].stav = "O"
                Stridani=true
                }
                zkontrolujWin()
                break
            }
        }
    }}
})

//POLE

let policka = [
    {0:0},
    {1:0},
    {2:0},
    {3:0},
    {4:0},
    {5:0},
    {6:0},
    {7:0},
    {8:0},
]

const souradnice = [
    //souradnice[0(index)].x/.y <-- volani souradnic
    //prvni radek
    {"x": 0, "y": 0, stav: null},
    {"x": 145, "y": 0, stav: null},
    {"x": 290, "y": 0, stav: null},

    //druhy radek
    {"x": 0, "y": 145, stav: null},
    {"x": 145, "y": 145, stav: null},
    {"x": 290, "y": 145, stav: null},

    //treti radek
    {"x": 0, "y": 290, stav: null},
    {"x": 145, "y": 290, stav: null},
    {"x": 290, "y": 290, stav: null}
]

//misto int je tu let, jinak jako v C#
for (let i = 0; i<souradnice.length; i++){
    ctx.rect(souradnice[i].x, souradnice[i].y,145,145)
}
ctx.stroke()

let win = false;

function zkontrolujWin (){
    ctx.strokeStyle = "black"
    if (souradnice[0].stav == "X" && souradnice[1].stav == "X" && souradnice[2].stav == "X" || souradnice[0].stav == "O" && souradnice[1].stav == "O" && souradnice[2].stav == "O"){
        ctx.beginPath()
        ctx.moveTo(10, 72.5)
        ctx.lineTo(425, 72.5)
        ctx.stroke()
        ctx.closePath()
        win=true
    }
    if (souradnice[3].stav == "X" && souradnice[4].stav == "X" && souradnice[5].stav == "X" || souradnice[3].stav == "O" && souradnice[4].stav == "O" && souradnice[5].stav == "O"){
        ctx.beginPath()
        ctx.moveTo(10, 217.5)
        ctx.lineTo(425, 217.5)
        ctx.stroke()
        ctx.closePath()
        win=true
    }
    if (souradnice[6].stav == "X" && souradnice[7].stav == "X" && souradnice[8].stav == "X" || souradnice[6].stav == "O" && souradnice[7].stav == "O" && souradnice[8].stav == "O"){
        ctx.beginPath()
        ctx.moveTo(10, 362.5)
        ctx.lineTo(425, 362.5)
        ctx.stroke()
        ctx.closePath()
        win=true
    }
    if (souradnice[0].stav == "X" && souradnice[3].stav == "X" && souradnice[6].stav == "X" || souradnice[0].stav == "O" && souradnice[3].stav == "O" && souradnice[6].stav == "O"){
        ctx.beginPath()
        ctx.moveTo(72.5, 10)
        ctx.lineTo(72.5, 425)
        ctx.stroke()
        ctx.closePath()
        win=true
    }
    if (souradnice[1].stav == "X" && souradnice[4].stav == "X" && souradnice[7].stav == "X" || souradnice[1].stav == "O" && souradnice[4].stav == "O" && souradnice[7].stav == "O"){
        ctx.beginPath()
        ctx.moveTo(217.5, 10)
        ctx.lineTo(217.5, 425)
        ctx.stroke()
        ctx.closePath()
        win=true
    }
    if (souradnice[2].stav == "X" && souradnice[5].stav == "X" && souradnice[8].stav == "X" || souradnice[2].stav == "O" && souradnice[5].stav == "O" && souradnice[8].stav == "O"){
        ctx.beginPath()
        ctx.moveTo(362.5, 10)
        ctx.lineTo(362.5, 425)
        ctx.stroke()
        ctx.closePath()
        win=true
    }
    if (souradnice[0].stav == "X" && souradnice[4].stav == "X" && souradnice[8].stav == "X" || souradnice[0].stav == "O" && souradnice[4].stav == "O" && souradnice[8].stav == "O"){
        ctx.beginPath()
        ctx.moveTo(10, 10)
        ctx.lineTo(425, 425)
        ctx.stroke()
        ctx.closePath()
        win=true
    }
    if (souradnice[2].stav == "X" && souradnice[4].stav == "X" && souradnice[6].stav == "X" || souradnice[2].stav == "O" && souradnice[4].stav == "O" && souradnice[6].stav == "O"){
        ctx.beginPath()
        ctx.moveTo(10, 425)
        ctx.lineTo(425, 10)
        ctx.stroke()
        ctx.closePath()
        win=true
    }
}
