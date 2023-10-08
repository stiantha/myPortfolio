import urllib.request, urllib.parse, urllib.error

fhand = urllib.request.urlopen('http://www.pythonchallenge.com/pc/def/linkedlist')
for line in fhand:
    print(line.decode().strip())
    
counts = dict()
for line in fhand:
    words = line.decode().strip().split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

print(counts)