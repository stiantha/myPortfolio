counts = dict()
names = ['sam', 'john', 'jane', 'paul', 'william', 'david', 'edward', 'edward', 'edward', 'sam']
for name in names:
    counts[name] = counts.get(name, 0) + 1

print (counts)

#2 same as 1 (worse)
#for name in names:
    #if name not in counts:
        #counts[name] = 1
    #else:
        #counts[name] += 1

#print (counts)

#3
#if name in counts:
    #x = counts[name]
#else:
    #x = 0
    
#x = counts.get(name, 0)