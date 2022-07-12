var layer = _.stage.withName("some sphere")
layer.vrDefaults()
layer.makeKeyboardCamera()

var myTriangles = layer.rawTriangles.myTriangles

myTriangles.open()
myTriangles.aux(1,0.3,0.6,0.8,1)
Shapes.sphere(1,15,10, myTriangles)
myTriangles.close()

var shader = layer.bindTriangleShader(_)

