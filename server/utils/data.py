import pandas as pd
from dotenv import load_dotenv
import os

load_dotenv()
path = os.getenv("FILE_PATH")

df = pd.read_csv(path)
df.rename(columns={"Record" : "Album"}, inplace=True)
df = df.sample(n=150)
df.reset_index(drop=True,inplace=True)
df.drop(columns=['Unnamed: 0'],inplace=True)

albums = []
artists = []
for i in df['Album']:
    albums.append(i.replace('"',"").replace("[","").replace("]","").lower())

for i in df['Artist']:
    artists.append(i)
