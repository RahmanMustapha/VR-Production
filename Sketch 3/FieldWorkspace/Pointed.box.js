//var ll = new FLine()

ll.moveTo(100,20)
ll.lineTo(200,50)
ll.cubicTo(20,50,20,200,150,150)
ll.cubicTo(120,50,100,200,50,50)

ll.filled = false
ll.color = vec(1,1,1,1)

_.lines.clear()
_.lines.add(ll)

ll.stroked = true

ll.fillColor = vec(1,1,1,1)
ll.strokeColor = vec(-7.15,-6.82,0.38,-13.64)
ll.pointed = true
ll.pointSize = 10