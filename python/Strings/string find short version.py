text = "X-DSPAM-Confidence:    0.8475"
look = text.find(':')
found = text[look+2:]
number = float(found)
print(number)