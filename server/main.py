import os
from flask import Flask, redirect , url_for , json
from utils.post_json_data import data_path , create_album_json, is_data_old
from flask_cors import CORS, cross_origin

if os.path.exists(data_path) == False:
      create_album_json()
else:
      is_data_old()

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
json_url = os.path.join(SITE_ROOT, 'utils/song_data/','album_data.json')
albums = json.load(open(json_url))

app = Flask(__name__)
CORS(app, resources={r"/albums/*": {"origins": "*"}})

@app.route("/")
def index():
      return redirect(url_for('albums_api'))

@app.route("/albums/" , methods=['GET'])
def albums_api():
      return albums

@app.route("/albums/<int:index>/", methods = ['GET'])
def api_response(index):
      return albums[index]

if __name__ == "__main__":
      app.run(debug=True)