 .\jdk\win\jbrsdk\bin\java.exe -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005 -classpath ".\target\classes\;.\lib\;.\src\main\java\;.\target\dependency\*;.\lib\jars\*" -DappDir="c:/field/" --add-opens java.desktop/java.awt.event=ALL-UNNAMED fieldbox.FieldBox -retina 0 -extraZoomLevel 1.0


(need to use ngrok too)
—-

Click to start
mouseDown.f = (e) => {
	clearAFrame()
	window.audioContext.resume()
	print("hello!")	
}


Set head
var Mat4 = Java.type('field.linalg.Mat4')
var SimpleOculusTarget = Java.type("trace.graphics.SimpleOculusTarget")
var Space = Java.type("trace.graphics.remote.Space")
var Stage = Java.type('trace.graphics.Stage')

var so = SimpleOculusTarget.Companion
Stage.Companion.rs.nowHeadless()

var layer = _.stage.withName("asdf")
layer.vrDefaults()

var space = new Space(Stage.Companion.rs)

__.space = space

space.setRoomDimensions(100,100,100)

space.setRoomMaterial("plywood")
tick = 0
_r = () => {
	var m = new Mat4(so.o2.rightView().get())
	var m2 = new Mat4(layer.__camera.view().get())
	m2 = m2.transpose()

	// optional, if we are looking for this in world space
	m = Mat4.mul(m, m2, new Mat4())
	m.invert()

	a = m.transform(vec(0,0,0,1))
	b = m.transform(vec(0,0,-1,1))
	c = m.transform(vec(0,1,0,1))
	a = vec(a.x, a.y, a.z) * (1/a.w)
	b = vec(b.x, b.y, b.z) * (1/b.w)
	c = vec(c.x, c.y, c.z) * (1/c.w)

	// gaze direction is b-ashader.V = ()=> new Mat4().identity()
	gaze = b-a
	up = c-a

	__.location = a
	
	if (tick%10==0)
	{
		space.r.execute("window.songbird.setListenerPosition("+a.x+", "+a.y+", "+a.z+")")	
		space.r.execute("window.songbird.setListenerOrientation("+gaze.x+", "+gaze.y+", "+gaze.z+", "+up.x+", "+up.y+", "+up.z+")")	
	}

	tick+=1
	//_.out(up)
}


Fuzzy
var layer = _.stage.withName("something or other")
var ll = _.space.withFile("c:/Users/VR User/Desktop/AFAF/AFAF2.wav")

// this sets up the camera and scale properly
layer.vrDefaults()

// get right hand position
layer.vrRightHandPosition()

// drive the camera around with the keyboard 
// rather than your head
layer.makeKeyboardCamera()

position = vec(2,0,-4)

var amp = 1
var tick = 0

while(true)
{
	//layer.lines.clear()
	
	
	if (tick++%200 == 0)
	{
		position = vec(0,0,0).noise(2)
		amp = 4
		ll.play(0)
		ll.position(position)
		
		var choose = Math.floor(Math.random() * 4);
		var cc = (amp/4) * Math.random()
		var cv = vec(0,0,0,0)

		if (choose == 0)
		{
			cv = vec(1*cc,1,1,1)
		}
		if (choose == 1)
		{
			cv = vec(1,1*cc,1,1)
		}
		if (choose == 2)
		{
			cv = vec(1,1,1*cc,1)
		}
		if (choose == 3)
		{
			cv = vec(1,1,1,1*cc)
		}
	}
	var f = new FLine()
	for(var i=0;i<100;i++)
	{
		f.lineTo(vec(position.x, position.y, position.z).noise(0.1*amp))
	}

	f.color = cv
	layer.lines.f = f

	amp *= 0.99
	_.stage.frame()
}







Osc
var OSCOut = Java.type("trace.sound.OSCOut")

var o = new OSCOut("10.150.5.149",6600)

o.values["/filter"][0]

Untitled
var Mat4 = Java.type('field.linalg.Mat4')
var SimpleOculusTarget = Java.type("trace.graphics.SimpleOculusTarget")
var Space = Java.type("trace.graphics.remote.Space")
var Stage = Java.type('trace.graphics.Stage')

var so = SimpleOculusTarget.Companion

// this gets a vec3 of the location of the head
_.location

// this gets a float of how much the right trigger is down.
so.o2.buttons.axesMap["axis1_right_x"]



