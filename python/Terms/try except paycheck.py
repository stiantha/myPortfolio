hrs = input("Enter Hours:")
rate = input("Enter Rate Per Hour:")

try:
    h = float(hrs)
    r = float(rate)

except:
    print("Only numbers, please")
    quit()


if h <= 40:
    pay = h * r
else:
    pay = 40 * r + (h - 40) * 1.5 * r

print(pay)




# Pay the hourly rate for the hours up to 40 and 1.5 times the hourly rate for all hours worked above 40 hours.
# Use 45 hours and a rate of 10.50 per hour to test the program (the pay should be 498.75).
# You should use input to read a string and float() to convert the string to a number.
# Do not worry about error checking the user input - assume the user types numbers properly.45
