counts = dict()
line = input('Enter a line of text: ')
words = line.split()

print ('Words', words)
print ('counting . . .')

for word in words:
    counts[word] = counts.get(word, 0) + 1

print ('Counts', counts)


print(counts.keys())
print(counts.values())
print(counts.items())
print(counts.keys())

#for key,value in counts.items():
#print(key, value)