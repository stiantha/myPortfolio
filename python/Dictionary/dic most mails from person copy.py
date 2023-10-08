name = "mbox-short.txt"                           
handle = open(name)
#9.4 Write a program to read through the mbox-short.txt and
# figure out who has sent the greatest number of mail messages.
# The program looks for 'From ' lines and takes the second word of
# those lines as the person who sent the mail. The program creates a
# Python dictionary that maps the sender's mail address to a count of the
# number of times they appear in the file. After the dictionary is produced,
# the program reads through the dictionary using a maximum loop to find the most prolific committer.

counts = dict()                                 # creates dictionary
for line in handle:                             # reads lines in dictionary
    words = line.split()
    if words[0] == 'From':
        words = words[1] 

print(words)  # counts words in dictionary
                                                # /----------------------------------/
email = None                                 # creates new variable
number = None                                  # creates new variable
for word, count in counts.items():              # word variable goes through keys, count goes through values
    if number is None or count > number:    # if none on the first word, if current word is greater then previous
        email = word                          # remember word variable
        number = count                        # remember count variable
                                                # /----------------------------------/
print(email, number)  


#print(counts.keys())
#print(counts.values())
#print(counts.items())
#print(counts.keys())

#for key,value in counts.items():
#print(key, value)