import urllib.request
import xml.etree.ElementTree as ET

url = input("Enter location: ")
print("Retrieving", url)

# Read the XML data from the URL
xml_data = urllib.request.urlopen(url).read()

# Parse the XML data
tree = ET.fromstring(xml_data)

# Find all 'count' tags using XPath
counts = tree.findall('.//count')

# Calculate the sum of the numbers
total = sum(int(count.text) for count in counts)

print("Retrieved", len(xml_data), "characters")
print("Count:", len(counts))
print("Sum:", total)