import warnings
warnings.filterwarnings("ignore", category=UserWarning, module='bs4')

import urllib.request
from bs4 import BeautifulSoup

url = input("Enter URL: ")
count = int(input("Enter count: "))
position = int(input("Enter position: "))

for i in range(count):
    print("Retrieving:", url)
    html = urllib.request.urlopen(url).read()
    soup = BeautifulSoup(html, 'html.parser')
    anchors = soup('a')
    url = anchors[position - 1].get('href', None)

last_name = url.split('_')[-1].split('.')[0]
print("Last name in sequence:", last_name)