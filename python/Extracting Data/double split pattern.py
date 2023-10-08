words = line.split()
email = words[1]
pieces = email.split('@')
print(pieces[1])



#Regax Version, [^] = match non blank character * = match many of them

import re
lin = 'from stephan@gmail.com sat jan 4 2023'
y = re.findall('@([^]*)',lin)