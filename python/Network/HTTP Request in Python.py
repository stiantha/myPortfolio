#http = protocol
host = '127.0.0.1 or www.google.com'
document = 'index.html'

import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('127.0.0.1', 80))
cmd = 'GET /'+document+' HTTP/1.1\r\nHost: '+host
s.send(cmd.encode())

while True:
    data = s.recv(1024)
    if (len(data) < 1):
            break
    print(data.decode())
    s.close()
    
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/intro-short.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end='')

mysock.close()