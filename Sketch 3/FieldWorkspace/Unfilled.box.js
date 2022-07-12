//var ll = new FLine()

ll.moveTo(40,20)
ll.lineTo(200,50)
ll.cubicTo(20,50,200,100,150,150)
ll.cubicTo(120,50,100,200,50,50)

_.lines.clear()
_.lines.add(ll)