import requests
import json

try:
    req = requests.get('http://www.omdbapi.com/?t=The+Matrix&apikey=79174ddd')
except:
    print("Sorry, We've had a connetions' problem")
    exit()

Movie_List = json.loads(req.text)

print(Movie_List['Title'])
