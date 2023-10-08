# /n = new line

#file counter
fhand = open('input.txt')
count = 0
for line in fhand:
    count += 1
    line = line.rstrip()
    if not line.startswith('#') :
        continue
    print('line count: ', count, line)