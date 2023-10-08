import urllib.request
import json

url = input("Enter location: ")
print("Retrieving", url)

# Read the JSON data from the URL
data = urllib.request.urlopen(url).read().decode()
print("Retrieved", len(data), "characters")

# Parse the JSON data
json_data = json.loads(data)

# Extract the comment counts
comments = json_data['comments']
counts = [comment['count'] for comment in comments]

# Compute the sum of the comment counts
total = sum(counts)
print("Count:", len(counts))
print("Sum:", total)