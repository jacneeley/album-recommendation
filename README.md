# Shuffle
A full stack app that recommends a random album to the user based on NACC Radio Charts.
### Frameworks:
- React
- Flask

## Overview
This project was based on another one of my projects called "[KTSW Recommends](https://ktswblog.net/ktsw-recommends/)." Ktsw Recommends was a full stack appplication that would recommend a random album to the user.<br>
<br>
It was developed during my time as the Web Developer for KTSW 89.9, Texas State University's student ran college radio station. All the user had to do was click the "shuffle" button and a fetch request was made to a flask api built to hold album data as json.
KTSW has recorded the top 30 albums based on [NACC's top 200 Radio Chart](https://naccchart.com/charts/) data on a monthly basis since about 2015. The flask api built for this project contains NACC song data from 2020 - 2023.<br>

### Development
For simplicity, the frontend was written using VanillaJS and the backend was written using the Python library, Flask. First and for most, KTSW is a "student workshop" where students can apply for roles with zero experience. The idea was that you work for KTSW and GAIN meaningful, real world experience. With this in mind, I built the flask api to be very simple to mitigate any potential issues and chose to build the frontend with vanillaJS as there was no gurantee that a future web developer would have experience in frontend frameworks such as react.<br>
<br>Shuffle is a full stack web application that leverages the benefits of React to provide a more responsive and dynamic web app.

# Getting started
If you want to run this thing for yourself, here is how.

### Prerequisites
- install python
- install nodejs (one of the heaviest objects in the universe, so good luck)
- Clone this entire repo

## Backend
The backend is a simple Flask API. It handles routing and logic for the server to serve all of the data.

#### Dependencies
```
blinker==1.6.2
certifi==2023.7.22
charset-normalizer==3.3.0
click==8.1.7
Flask==3.0.0
Flask-Cors==4.0.0
idna==3.4
itsdangerous==2.1.2
Jinja2==3.1.2
MarkupSafe==2.1.3
numpy==1.26.0
pandas==2.1.1
python-dateutil==2.8.2
python-dotenv==1.0.0
pytz==2023.3.post1
requests==2.31.0
six==1.16.0
tzdata==2023.3
urllib3==2.0.6
Werkzeug==3.0.0
```
Alternatively, once you clone the repo navigate to the "server" directory. Open your terminal and enter the following command:
```
pip3 install -r requirements.txt

```

This essentially tells pip to read the contents of requirements text file and install each item. Pretty handy.<br>
If you want you could launch the flask server now. In the "server" directory, simply run in your terminal:
```
python3 main.py

```
### Pause
It is best practice when testing your flask server to create a virtual environment.
*If you are using windows refer to the windows commands below.*
```
python3 -m venv venv

```
```-m venv``` creates the virtual environment and the following ```venv``` sets the path.
```
source venv/bin/activate

```
This will activate your virtual environment.
*note: you may have to run* ```pip3 install -r requirements.txt```*again in your virtual environment.<br>*
Windows:
```
pip install -r requirements.txt
python main.py
python -m venv venv
source venv/Scripts/activate
```
### Proceed
You can now access the server from [localhost:5000](https://localhost:5000). The server will automatically redirect you to [localhost:5000/albums/](localhost:5000/albums/).<br>
To look at a specific album you can provide any number from 0 to 149 at the end of the url. For example, [localhost:5000/albums/49](localhost:5000/albums/49).<br>
To keep things interesting and fast, each day the server randomly picks 150 albums from approx. 3000 records. This project was built around the limitation that both the frontend and backend would be hosted for free. The backend serves album info by searching spotify for metadata using the spotify api. Randomly selecting 150 albums to randomly recommend to users cuts back on processing time significantly when using free hosting services.

## Frontend
The front end uses React and only has two components, the Header component, and the DisplayAlbums component.<br>
Move over to the "Client" directory and run the following commands:
```
npm install
npm run start
```
This will install all of the dependencies found in package.json.
If you have the Flask server running, you can start the react app and it will launch on [localhost:3000](https://localhost:3000). When you click the "Shuffle" button, the client will make a get request to localhost:5000/randomInt (the api server) and the page will re-render with a result.

Congrats! You should be up and running.
