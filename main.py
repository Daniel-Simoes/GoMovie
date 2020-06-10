import requests

req = requests.get('http://www.omdbapi.com/?t=The+Matrix&apikey=79174ddd')

print(req.text)
