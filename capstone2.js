var layer = _.stage.withName("something or other")

// this sets up the camera and scale properly
layer.vrDefaults()

// drive the camera around with the keyboard 
// rather than your head
layer.makeKeyboardCamera()

while(true)
{
	layer.lines.clear()
	
	position = vec(2,0,-4)

	var amp = 1
	var tick = 0


		if (tick++%200 == 0)
		{
			position = vec(0,0,0).noise(2)
			amp = 4
			
		}

		var f = new FLine()
		for(var i=0;i<100;i++)
		{
			f.lineTo(vec(position.x, position.y, position.z).noise(0.1*amp))
		}

		f.color = vec(1,1,1,1)

		layer.lines.f = f

		amp *= 0.99

	
	_.stage.frame()
}

Works:
var layer = _.stage.withName("something or other")

// this sets up the camera and scale properly
layer.vrDefaults()

// drive the camera around with the keyboard 
// rather than your head
layer.makeKeyboardCamera()


	position = vec(2,0,-4)

	var amp = 1
	var tick = 0


		if (tick++%200 == 0)
		{
			position = vec(0,0,0).noise(2)
			amp = 4
			
		}

		var f = new FLine()
		for(var i=0;i<100;i++)
		{
			f.lineTo(vec(position.x, position.y, position.z).noise(0.1*amp))
		}

		f.color = vec(1,1,1,1)

		layer.lines.f = f

		amp *= 0.99

	
	_.stage.frame()
Wip:
var layer = _.stage.withName("something or other")

// this sets up the camera and scale properly
layer.vrDefaults()

// drive the camera around with the keyboard 
// rather than your head
layer.makeKeyboardCamera()


	position = vec(0,0,0)

	var amp = 1
	var tick = 0


		if (tick++%200 == 0)
		{
			position = vec(0,0,0).noise(2)
			amp = 2
			
		}

		var f = new FLine()
		for(var i=0;i<100;i++)
		{
			f.lineTo(vec(position.x, position.y, position.z).noise(0.1*amp))
			amp *= 0.99
		}

		f.color = vec(1,1,1,1)

		layer.lines.add(f)

		

	
	_.stage.frame()



Yes?
var layer = _.stage.withName("something or other")

// this sets up the camera and scale properly
layer.vrDefaults()

// drive the camera around with the keyboard 
// rather than your head
layer.makeKeyboardCamera()


	position = vec(2,0,-4)

	var amp = 1
	var tick = 0

	while(true)
	{

	
		
		
		
		if (tick++%200 == 0)
		{
			position = vec(0,0,0).noise(2)
			amp = 4
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
	





