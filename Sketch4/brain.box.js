var PlyReaderToMesh = Java.type("trace.graphics.PlyReaderToMesh")

var layer = _.stage.withName("some layer")
layer.vrDefaults()
layer.makeKeyboardCamera()


// get a raw triangle builder
var myTriangles = layer.rawTriangles.myTriangles

myTriangles.open()
new PlyReaderToMesh().load("/Users/rahmanmustapha/Desktop/Brain_export.ply", myTriangles)
myTriangles.close()

var shader = layer.bindTriangleShader(_)