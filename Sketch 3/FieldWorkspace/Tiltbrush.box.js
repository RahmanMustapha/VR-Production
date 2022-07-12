var layer = _.stage.withName("my great layer")
layer.vrDefaults()

// clear all the lines when this box is run
// with arrow-up
layer.lines.clear()

// start with 'not down'
var down = false

// do this on trigger down
layer.vrButtons.triggerDown.myCallback = () => {
	down = true

	f = new FLine()
	f.color=vec(1,1,1,1)
	layer.lines.add(f)
}

layer.vrButtons.triggerUp.myCallback = () => {
	down = false
}

while(_.wait()) {
	if (down) {
		f.lineTo(layer.vrRightHandPosition())
	}
}