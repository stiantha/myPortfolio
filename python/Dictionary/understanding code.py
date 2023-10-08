name = input("Enter file name: ")               # asks user for file name
handle = open(name)                             # opens file
                                                # /----------------------------------/
counts = dict()                                 # creates dictionary
for line in handle:                             # reads lines in dictionary
    words = line.split()                        # separates words from the lines in dictionary
    for word in words:                          # reads words from the lines in dictionary
        counts[word] = counts.get(word, 0) + 1  # counts words in dictionary
                                                # /----------------------------------/
bigcount = None                                 # creates new variable
bigword = None                                  # creates new variable
for word, count in counts.items():              # word variable goes through keys, count goes through values
    if bigcount is None or count > bigcount:    # if none on the first word, if current word is greater then previous
        bigword = word                          # remember word variable
        bigcount = count                        # remember count variable
                                                # /----------------------------------/
print(bigword, bigcount)                        # prints largest word and how many times it occurs