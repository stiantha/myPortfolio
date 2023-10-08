import urllib.request
import urllib.parse
import json

service_url = 'http://py4e-data.dr-chuck.net/json?'

# Prompt for a location
location = input("Enter location: ")

# Create the URL with parameters
params = {
    'address': location,
    'key': '42'  # Replace 'YOUR_API_KEY' with your actual API key
}
url = service_url + urllib.parse.urlencode(params)

print("Retrieving", url)

# Call the API and retrieve the JSON data
data = urllib.request.urlopen(url).read().decode()
print("Retrieved", len(data), "characters")

# Parse the JSON data
json_data = json.loads(data)

# Extract the place_id
place_id = json_data['results'][0]['place_id']
print("Place id", place_id)
