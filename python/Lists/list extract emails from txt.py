fname = input("Enter file name: ")
if len(fname) < 1:
    fname = "mbox-short.txt"

fh = open(fname)
count = 0
emails = []

for line in fh:
    
    if line.startswith("From: "):
        emails.append(line.split()[1])
        count += 1

print('\n'.join(emails))
print("There were", count, "lines in the file with From as the first word")







