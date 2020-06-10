import requests

try:
    req = requests.get('http://www.omdbapi.com/?t=The+Matrix&apikey=79174ddd')
except:
    print("Sorry, We've had a connetions' problem")
    exit()

print(req.text)
