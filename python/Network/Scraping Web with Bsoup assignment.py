import urllib.request
from bs4 import BeautifulSoup

# URL to the actual data
url = "http://py4e-data.dr-chuck.net/comments_1812821.html"

# Open the URL and read the HTML content
html = urllib.request.urlopen(url).read()

# Parse the HTML using BeautifulSoup
soup = BeautifulSoup(html, "html.parser")

# Find all <span> tags
span_tags = soup.find_all("span")

# Initialize variables for counting and summing
count = 0
total_sum = 0

# Iterate over each <span> tag
for span in span_tags:
    # Extract the text content of the <span> tag
    text = span.text
    
    # Convert the text to an integer and add it to the total sum
    number = int(text)
    total_sum += number
    
    # Increment the count
    count += 1

# Print the count and the total sum
print("Count:", count)
print("Sum:", total_sum)
