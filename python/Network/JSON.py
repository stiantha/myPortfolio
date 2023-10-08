#JSON represents data as nested LISTS and DICTIONARIES
#''' represents list

import json
data = '''{
    "name": "test",
    "phone": {
        "type": "intl",
        "number": "+1 234 567 8930"
        },
        "email": {
            "hide": "yes"
            }
}'''

info = json.loads(data)
print('Name: ', info['name'])
print('hide: ', info['email']['hide'])




