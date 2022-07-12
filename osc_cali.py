from rehamove import *          # Import our library
import time
from pythonosc import dispatcher
from pythonosc import osc_server



thevalue = 0

dispatcher = dispatcher.Dispatcher()
def handler(add, args):
    print(args)
    global thevalue
    thevalue = 10

dispatcher.map("/filter", handler)

import threading

def launch():
    server = osc_server.ThreadingOSCUDPServer( ("0.0.0.0", 6600), dispatcher)
    server.serve_forever()

threading.Thread(target=launch).start()

r = Rehamove('/dev/tty.usbserial-1420')            # Open USB port (on Windows)

while 1:
    if (thevalue==0):
        time.sleep(0.1)
        print(time.time())
    else:
        print('hi')
        for i in range(0, 1):

            for i in range(0, 70):
                r.pulse('red', 7, 200)     # Send pulse every second stronger shock when closer
                #r.pulse("blue", 8, 300)     # Send pulse every second
                #r.pulse("white", 10, 300)     # Send pulse every second
                time.sleep(0.01)
                #time.sleep(1)

            time.sleep(1.00)
            break
