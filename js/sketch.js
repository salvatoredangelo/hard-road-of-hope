let cnv;
let brand;
let clientH;
let clientW;
let offSetH;
let offSetW;

let theta = 0;

let color;

function preload() {
    brand = loadImage('/sources/images/actOut.png');
}

function setup() {
    clientH = document.getElementById('brand-ctn').clientHeight;
    clientW = document.getElementById('brand-ctn').clientWidth;
    offSetH = document.getElementById('brand-ctn').offsetHeight;
    offSetW = document.getElementById('brand-ctn').offsetWidth;
    cnv = createCanvas(clientW, clientH, WEBGL);
    cnv.parent('brand-ctn');
    color = getComputedStyle(document.documentElement)
        .getPropertyValue('--emphasized-text');

}

function draw() {
    ortho();
    background(0, 0);
    translate(0, 0, 100);
    //generate responsize rotating box primative
    push();
    rotateZ(theta * 0.1);
    rotateX(theta * 0.1);
    rotateY(theta * 0.1);
    texture(brand);
    strokeWeight(2);
    stroke(color);
    if (clientW >= clientH) {
        box(clientH / 2);
    } else {
        box(clientW / 2);
    }
    pop();
    //rotation increment
    theta += 0.005;
}

function windowResized() {
    canvas = resizeCanvas(clientW, clientH);
}

