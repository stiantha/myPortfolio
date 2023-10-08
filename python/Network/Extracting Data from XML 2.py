import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET
import ssl

url = input("Enter location: ")
xml_data = urllib.request.urlopen(url).read()
tree = ET.fromstring(xml_data)
counts = tree.findall('.//count')
total = sum(int(count.text) for count in counts)

print("Retrieved", len(xml_data), "characters")
print("Count:", len(counts))
print("Sum:", total)