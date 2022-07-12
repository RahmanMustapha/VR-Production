//var ll = new FLine()

for(var i=0;i<1000;i++)
{
	ll.moveTo(vec(Math.random(),Math.random())*100)
}

ll.pointed=true
ll.pointSize=3
ll.color=vec(0,0,0,0.3)

_.lines.clear()
_.lines.add(ll)