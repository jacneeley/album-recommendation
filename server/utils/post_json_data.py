import os
import json
import time

from utils.search import getAlbumData
from utils.data import albums , artists

parent_dir: str = os.path.dirname(__file__).replace("\\","/")
filename: str = "album_data.json"
directory: str = '/song_data/'
folder_path: str = parent_dir + directory
data_path: str = folder_path + filename

def is_data_old() -> None:
    days = 1
    day = 86400
    current_time = time.time()
    if os.path.exists(data_path) == True:
        file_time = os.stat(data_path).st_mtime
        
        if(file_time < current_time - day*days):
            print(f" Delete : {data_path}")
            os.remove(data_path)
        else:
            print("album_data.json is still fresh")
            return
    else:
        print("'% s' does not exist yet..." % filename)

def create_album_json() -> None:
    if os.path.exists(data_path) == False:
        if os.path.exists(folder_path) == False:
            os.mkdir(folder_path)
            print("Directory `% s` created" % directory)
        else:
            print("'% s' exists" % directory)
            is_data_old()

        album_data = getAlbumData(albums,artists)
        try:
            with open(f'{folder_path}'+'/album_data.json','w',encoding="utf-8") as handle:
                json.dump(album_data,handle,indent=4)   
            print(album_data)
        except UnicodeEncodeError:
            pass


    print('data % s found' % filename)
