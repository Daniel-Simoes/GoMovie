import requests
import json


def user_request(title):
    try:
        req = requests.get(
            'http://www.omdbapi.com/?t=' + title + 'YOUR API KEY' + '&type=movie')
        movie_list = json.loads(req.text)
        return movie_list
    except:
        print("Sorry, We've had a connetions' problem")
        return None


def show_details(movie):
    print('Title:', movie['Title'])
    print('Year:', movie['Year'])
    print('Director:', movie['Director'])
    print('Actors:', movie['Actors'])
    print('Rating:', movie['imdbRating'])
    print('Awards:', movie['Awards'])
    print('Folder:', movie['Poster'])
    print('')


sign_out = False
while not sign_out:
    title_input = input(
        'Type a movie title to find the movie informations or OUT to exit the application: ')
    if title_input == 'OUT':
        sign_out = True
        print('we hope to have helped your research')
    else:
        movie = user_request(title_input)
        if movie['Response'] == 'False':
            print('Sorry, we did not find this movie. Are you sure that title is rigth?')
        else:
            show_details(movie)
