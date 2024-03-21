from dotenv import load_dotenv
from requests import post,get
import json
from utils.authentication import get_auth_header , get_token


token = get_token()

#send request
def spotify_search(token,album_name,artist_name):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"?q={album_name,artist_name}&type=album,artist&market=ES&limit=1"

    query_url = url + query
    result = get(query_url,headers=headers)
    json_result = json.loads(result.content)['albums']['items']
    if len(json_result) == 0:
        print("No Artist Found...")
        return None
    return {"album":str(json_result[0]['name']),
        "artist":str(json_result[0]['artists'][0]['name']),
        "albumPictureUrl":str(json_result[0]['images'][1]['url'])}

def getAlbumData(albums,artists):
    album_data = []
    for album,artist in zip(albums,artists):
        try:
            album_id=spotify_search(token,album,artist)
            if album == None:
                album_data.append({"album":"albumPictureUrl","artist":"None","Album Picture Url":"None"})
                print("No Album Found...")
            else:
                album_data.append(album_id)
        except KeyError:
            continue
    return album_data