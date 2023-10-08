name = input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)


counts = dict()                                 
for line in handle: #This line iterates over each line in the file, one at a time, and assigns each line to the variable line.                           
    if line.startswith('From '): #This line checks if the current line starts with the string "From ". This is used to filter out any lines that don't contain email addresses.
        words = line.split() #This line splits the current line into a list of words (default delimiter is whitespace) and assigns the list to the variable words.
        email = words[1] #This line extracts the email address from the words list. The email address is assumed to be the second word on the line (i.e., words[1]).
        counts[email] = counts.get(email, 0) + 1  #This line updates the counts dictionary with the current email address.
                                                  #If the email address is not already in the dictionary, it sets the count to 0 and then adds 1.
                                                  #If the email address is already in the dictionary, it adds 1 to the existing count.                                       
email = None  #These lines initialize two variables, email and number, to None.
number = None #These variables will be used to keep track of the most prolific email address and the number of emails sent.                                
                                
for key, value in counts.items():        #This line iterates over each key-value pair in the counts dictionary      
    if number is None or value > number: #This line checks if number is None (i.e., no email address has been assigned yet) or if the current value is greater than the current maximum. If either of these conditions are true, it updates email and number to the current key-value pair.  
        email = key                      #These lines update email and number to the current key-value pair, if the current value is greater than the current maximum.                       
        number = value                      
                                               
print(email, number)                     #This line prints the most prolific email address and the number of emails sent by that address.