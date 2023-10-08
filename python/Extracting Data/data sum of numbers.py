import re

file_path = "file10.txt"
with open(file_path) as file:
    text = file.read()

numbers = re.findall(r"[0-9]+", text)
result = sum(int(number) for number in numbers)

print(result)