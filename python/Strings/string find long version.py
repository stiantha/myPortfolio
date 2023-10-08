text = "X-DSPAM-Confidence:    0.8475"
start = text.find(':') + 1
end = len(text)
number_str = text[start:end].strip()
number = float(number_str)
print(number)