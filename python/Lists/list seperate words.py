fname = input("Enter file name: ")
fh = open(fname)

wordlist = []
for line in fh:
    words = line.strip().split()
    wordlist.extend(words)

wordlist.sort()
print(wordlist)