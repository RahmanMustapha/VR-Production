


// build a curve
//var f = new FLine()
f.moveTo(0,0)
f.cubicTo(50,0,20,100,200,100)

// make it a transparent red
f.color = vec(1,0,0,0.5)

// and thick
f.thicken = 2

// make it 'tweakable'
f.tweaky=true

// add it to the list of lines
// to be drawn with this box
			
//_.lines.f = f
layer.lines.f = f

// apply any 'tweaks'
_.applyTweaks()

for (var theta of Anim.lineRange(0, 360*10, 1000))
{
	var f = new FLine()
	f.moveTo(0,0)
	f.polarCubicTo(1,90,1,theta,200,100)

	f.color = vec(1,0,0,0.4)
	f.thicken = 2

	f.tweaky=true
	_.lines.f = f

	_.applyTweaks()
	_.wait()
}