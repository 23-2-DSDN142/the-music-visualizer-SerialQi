let firstRun = true 
let Image1 //the pink/blue...background 
let Image2 //Taylor drawing 
let Image3 //"lover" cruel summer album name  
let Image4 //is the backhround with some element about the song 
let barrage // the moving background behind the Taylor
//let Snail = []

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
//function draw_one_frame(vocal, drum, bass, other) {
    background(20)
    rectMode(CENTER)
    textFont('Helvetica')
    //textSize(20)

if(firstRun){

   // imageMode(CENTER)
    Image1 = loadImage('smallbackground.png')
    Image2 = loadImage('TaylorSwift.png')
    Image3 = loadImage('word.png')
    Image4 = loadImage('background3.png')
    //barrage = height*2
    //Snail.push(loadImage('refrainTaylor.png'))
    //Snail.push(loadImage('refrainWord.png'))
    firstRun = false
}

push()

image(Image1,0,0) // background 

// three squre...?
stroke(255)
noFill()
let yellowColor = color(255,208,20)
//let blueColor = color (195,241,255)
let blueColor = color (92,175,244)
let pinkColor = color(255,135,157)

let vocalLerpNumber = map(vocal, 0,100, 0,1)
let vocalColor = lerpColor( yellowColor,blueColor,vocalLerpNumber)
let vocalColor2 = lerpColor( pinkColor,blueColor,vocalLerpNumber)
let vocalColor3 = lerpColor( yellowColor,pinkColor,vocalLerpNumber)

strokeWeight(3)
let sizeOfBlock = 200
// top
for (let i = 0; i < sizeOfBlock; i++){
    let gradentAmount = map(i,0, sizeOfBlock,0,1)
    let strokeColor = lerpColor(blueColor,vocalColor, gradentAmount)
    
    stroke(strokeColor)
    fill(strokeColor)
    line(0,0+i, width,100+i)
}
//middle 
let sizeOfBlock1 = 200
for (let i = 0; i < sizeOfBlock1; i++){
    let gradentAmount = map(i,0, sizeOfBlock1,0,1)
    let strokeColor = lerpColor(vocalColor2,pinkColor, gradentAmount)
    
    stroke(strokeColor)
    fill(strokeColor)
    line(0,390+i, width,300+i)
}

strokeWeight(5)
stroke(195,241,255)//Non Photo blue
//drum circle background
fill(255)
if(drum> 15){
    stroke(255,180,197) //Cherry blossom pink
}
if(drum> 60){
    stroke(243,214,93) //Naples yellow
}
 //Naples yellow 
var drumMap = map(drum, 0, 100, 15, 40)

for (var ii = 1; ii<= 20; ii++){
    var yStep = ii*50; 
    for(var i = 1; i <= 10; i++)
    ellipse(50* i, yStep, drumMap)
}
// down
let sizeOfBlock2 = 200
for (let i = 0; i < sizeOfBlock2; i++){
    let gradentAmount = map(i,0, sizeOfBlock2,0,1)
    let strokeColor = lerpColor(vocalColor3,blueColor, gradentAmount)
    
    stroke(strokeColor)
    fill(strokeColor)
    line(0,600+i, width,700+i)
}

//wave 1 bass 
strokeWeight(3)
stroke(179,61,113)
noFill(179,61,113)

let baseWave = map(bass, 0,100, 20,120)
let waveHight = baseWave
let waveFreq = 4

let baseLook = height/2.5
beginShape()
for(let i = 0; i < width; i++){
    vertex(i, baseLook -waveHight*sin(waveFreq * i))
    
}
endShape()

//wave 2 
strokeWeight(3)
stroke(255)
noFill(179,61,113)
//if(other>65){
   // stroke(71,131,181)
    //stroke(92,175,244)
    //fill(255)
//}

let OtherWave = map(other, 0,100, 20,120)
let OtherHight =  OtherWave
let OtherFreq = 3

let OtherLook = height/2.5
beginShape()
for(let i = -50; i < width; i++){
    vertex(i,  OtherLook -OtherHight*sin(OtherFreq * i))
    
}
endShape()
//var VocalFrame = int(map(bass, 0,100, 0,2))
//console.log(VocalFrame)
//push()
//scale()
//image(Snail[VocalFrame], width/2, height/2)

//image(Image4,width,barrage)//how to move???
//pop()

//barrage= barrage-5;

//if(barrage < 0){
  //  barrage = height*2
//}
//top background 
//image(Image4,400,420)//how to move 
image(Image4,-10,10)
image(Image3,0,-80)
image(Image2,0,220) //TaylorSwift 

stroke(71,131,181)
fill(255)
if(vocal, drum, bass, other <=50){
    stroke(178,58,112)
    fill(255) //blue 
}
textAlign(CENTER)
textSize(vocal)
text(words, width/2, height/2.5)

}
