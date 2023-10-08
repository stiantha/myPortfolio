hrs = input("Enter Hours:")
rph = input("Enter Rate Per Hour:")

try:
    h = float(hrs)
    r = float(rph)

except:
    print("Only numbers, please")
    quit()

def computepay(h, r):
    if h <= 40:
        p = h * r
    else:
        p = 40 * r + (h - 40) * 1.5 * r
    return p

p = computepay(h, r)
print("Pay", p)