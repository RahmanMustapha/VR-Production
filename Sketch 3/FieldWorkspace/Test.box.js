var ll = new FLine()

for(var i=0;i<1000;i++)
{
	ll.moveTo(vec(Math.random(),Math.random())*100)
}

ll.pointed=true
ll.pointSize=3
ll.color=vec(0,0,0,0.3)

_.lines.clear()
_.lines.add(ll)


var square = new FLine()
square.rect(0,0,20,20)

var sqOne = square * rotate(10, 100, 100) 

sqOne.filled=true
sqOne.color=vec(1,0,0,0.5)

_.lines.sqOne = sqOne

var sqTwo = square * rotate(-10, 100, 100) 

sqTwo.filled=true
sqTwo.color=vec(0,0,1,0.5)

_.lines.sqTwo = sqTwo