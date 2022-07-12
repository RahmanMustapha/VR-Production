var big = new FLine().circle(0,0,100)

big.filled = true
big.color = vec(0,0,1,0.5)

big = big * rotate(30) * scale(1,0.4) * rotate(20)

_.lines.big = big

var little = new FLine().rect(-5,-5,10,10)

little.filled = true
little.color = vec(1,0,0,0.5)

// here we multiply 'little' by a list sampled from the line 'big'
_.lines.little = little + big.sampleByNumber(20)