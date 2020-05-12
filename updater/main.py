#!/usr/bin/env python3

import requests

URL = "https://brasil.io/api/dataset/covid19/caso/data/?city=Manaus"

data = requests.get(URL)

if data.status_code == 200:
    with open('./data/data.json', 'w') as f:
        f.write(data.text)
