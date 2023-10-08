fhand = open('#txt_files/romeo.txt')
counts = dict()
for line in fhand:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1
        
lst = list()
for key, value in counts.items():
    newtup = (value, key)
    lst.append(newtup)
    
lst = sorted(lst, reverse=True)

for value, key in lst[:10] :
    print(key, value)
    
c = {'a': 14211, 'b': 23, 'c': 31}            #Equivalent to line 8 - 11
print(sorted([(v,k) for k,v in c.items()]))
    
    
    
# WTF is a histogram ?=!
# https://www.geeksforgeeks.org/python-histogram/
# lol thanks for the help, lil geek ai

# we should understand this ..... but atlas... partly... mostly... replication be troublesome...

