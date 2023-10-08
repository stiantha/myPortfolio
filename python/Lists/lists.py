friends = ['Stian', 'Ole', 'Michael', 'J','435']
count = 0
friends[2] = 'Steve'
for friend in friends:
    count = count + 1
    print('Greetings', friend)
    
#operations with lists

a = [1, 2, 3, 4, 5]
b = [6, 7, 8, 9, 10]
c = [11, 12, 22, 14, 15]
d = a + b + c
e = d[5:15]
d.append(16)
15 in a
d.sort()
print(e)





(range(len(friends)))