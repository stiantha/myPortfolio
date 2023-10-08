data = 'from stephan.marquard@uct.ac.za Sat Jan 15 09:44:12 2023'
atpos = data.find('@')
print(atpos)
sppos = data.find(' ',atpos)
print(sppos)
host = data[atpos+1:sppos]
print(host)