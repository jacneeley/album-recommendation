import os
from dotenv import load_dotenv
from flask import Flask, redirect , url_for , json
from utils.post_json_data import create_album_json
from flask_cors import CORS, cross_origin


load_dotenv()
proxy1 = os.getenv("PROXY1")
proxy2 = os.getenv("PROXY2")

create_album_json()

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
json_url = os.path.join(SITE_ROOT, 'utils/song_data/','album_data.json')
albums = json.load(open(json_url))

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/albums/*" : {"origins" : "*"},
                     r"/albums/<int:index>" : {"origins" : [proxy1, proxy2]}})

@app.route("/")
def index():
      return redirect(url_for('albums_api'))

@app.route("/albums/" , methods=['GET'])
def albums_api():
      return albums

@app.route("/albums/<int:index>/", methods = ['GET'])
@cross_origin(origin=[proxy1, proxy2],
                      headers=['Content- Type','Authorization'])
def api_response(index):
      return albums[index]

if __name__ == "__main__":
      app.run(debug=True)