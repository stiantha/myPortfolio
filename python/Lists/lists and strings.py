abc = 'with three words'
stuff = abc.split()
separate = abc.split(' ')
['with', 'three', 'words']
for w in stuff:
    print(w)
    
print(stuff)
print(len(stuff))
print(stuff[2])
print(separate)