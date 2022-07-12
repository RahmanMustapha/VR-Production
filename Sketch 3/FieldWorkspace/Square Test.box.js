var layer = _.stage.withName("square layer")
layer.is3D = true
layer.vrDefaults()
layer.makeKeyboardCamera()


var square = new FLine()
square.rect(0,0,200,200)

var sqOne = square * rotate(10, 100, 100) 

sqOne.filled=true
sqOne.color=vec(1,0,0,0.5)
_.lines.sqOne = sqOne
layer.lines.sqOne = sqOne

var sqTwo = square * rotate(-10, 100, 100) 

sqTwo.filled=true
sqTwo.color=vec(0,0,1,0.5)
_.lines.sqTwo = sqTwo
layer.lines.sqTwo = sqTwo