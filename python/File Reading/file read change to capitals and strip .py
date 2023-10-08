# Use words.txt as the file name
fname = input("Enter file name: ")
fhand = open(fname)
for line in fhand:        # loop through each line in the file and save it to a variable
    line = line.upper()
    line = line.strip()
    print(line)