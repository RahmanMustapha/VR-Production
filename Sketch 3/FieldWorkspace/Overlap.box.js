//var f = new FLine()
f.rect(0,0,200,200)

var redOne = f * rotate(10, 100, 100) 

redOne.filled=true
redOne.color=vec(1,0,0,0.5)

_.lines.redOne = redOne

var blueOne = f * rotate(-10, 100, 100) 

blueOne.filled=true
blueOne.color=vec(0,0,1,0.5)

_.lines.blueOne = blueOne