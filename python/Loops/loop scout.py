largest_so_far = -1
for the_num in [42, 623, 12, 4, 324, 2342, 34226, 143, 13, 32, 5235235] :
    if the_num > largest_so_far :
        largest_so_far = the_num
        print(largest_so_far,the_num)
        
print('Largest Number:',largest_so_far)