#!/usr/bin/env python3

import json
import requests

URL = "https://brasil.io/api/dataset/covid19/caso/data/?city=Manaus"

d = requests.get(URL)

print(d.text)