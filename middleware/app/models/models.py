from flask_sqlalchemy import SQLAlchemy
from app import config, create_app
import feedparser
import logging
from dateutil import parser
import requests
import json
from datetime import datetime
import os
import re

#import boto3
#import base64
#from botocore.exceptions import ClientError


db = SQLAlchemy()

class BuildNews(db.Model):
    """
    Create the news table in the database.

    Create the structure and configuration for the news table.

    """
    
    __tablename__ = 'news'
    id = db.Column(db.Integer, primary_key=True)
    ico = db.Column(db.String(100))
    source = db.Column(db.String(100))
    title = db.Column(db.String(100))
    source_title = db.Column(db.String(100))
    link = db.Column(db.String(100))
    time_stamp = db.Column(db.String(100))
    summary = db.Column(db.String(100))
    tag = db.Column(db.String(100))

    @staticmethod
    def read_feeds():
        """
        Reads the feeds and inserts them into the database.

        Loops through the config file sources and inserts the data
        into the news table in the database.

        """

        logging.info('[-] Begin Reading News Feeds')
        feed_results = []

        for sites in config.d:

            for site in config.d[sites]:
                sub = config.d[sites][site]['name']
                logging.info(f'[-] Begin Reading {sub} Feeds')
                url = (config.d[sites][site]['url'])
                tag = (config.d[sites][site]['tag'])
                ico = (config.d[sites][site]['ico'])
                source_title = (config.d[sites][site]['title'])
                feed = feedparser.parse(url)

                for e in feed.entries[:20]:
                    # Remove links from Tweets
                    if ico == "twitter":
                      e.title = re.sub(r"(http\S+|pic.twitter.com\S+)", "", e.title)
                    if hasattr(e, 'updated'):
                        time_stamp = parser.parse(e.updated)
                        new_time_stamp = time_stamp.strftime("%a %b %d")
                        #print(e.updated)
                        t = BuildNews(source=sub, tag=tag, source_title=source_title, title=e.title, link=e.link, time_stamp=new_time_stamp, ico=ico)
                    elif hasattr(e, 'pubDate'):
                        time_stamp = parser.parse(e.pubDate)
                        new_time_stamp = time_stamp.strftime("%a %b %d")
                        #print(e.pubDate)
                        t = BuildNews(source=sub, tag=tag, source_title=source_title, title=e.title, link=e.link, time_stamp=new_time_stamp, ico=ico)
                    else:
                        t = BuildNews(source=sub, tag=tag, source_title=source_title, title=e.title, link=e.link, ico=ico)
                    feed_results.append(t)
                logging.info(f'[-] Finished Reading {sub} Feeds')
            logging.info('[-] Finished Updating News Feeds')

        logging.info('[-] Begin Updating News Table in Database')
        app = create_app()
        ctx = app.app_context()
        ctx.push()
        with ctx:
            BuildNews.query.delete()
            for i in feed_results:
                db.session.add(i)
        db.session.commit()
        ctx.pop()
        logging.info('[-] Finished Updating News Table in Database')


class BuildWeather(db.Model):
    """
    Create the weather table in the database.

    Create the structure and configuration for the weather table.

    """
    
    __tablename__ = 'weather'
    id = db.Column(db.Integer, primary_key=True)
    ico = db.Column(db.String(100))
    source = db.Column(db.String(100))
    high = db.Column(db.String(100))
    low = db.Column(db.String(100))
    temp = db.Column(db.String(100))
    city_name = db.Column(db.String(100))
    description = db.Column(db.String(100))
    day = db.Column(db.String(100))
    time_stamp = db.Column(db.String(100))


    @staticmethod
    def weather_feeds():
        """
        Reads the weather feeds and inserts them into the database.

        Loops through the config file sources and inserts the data
        into the weather table in the database.
        
        """

        # First use AWS secretes to retrieve API key for openweathermap api
        secret_name = "weatherapi"
        region_name = "us-east-1"

        # Create a Secrets Manager client
        session = boto3.session.Session()
        client = session.client(
            service_name='secretsmanager',
            region_name=region_name
        )
        try:
            get_secret_value_response = client.get_secret_value(
                SecretId=secret_name
            )
        except ClientError as e:
            if e.response['Error']['Code'] == 'DecryptionFailureException':
                raise e
            elif e.response['Error']['Code'] == 'InternalServiceErrorException':
                raise e
            elif e.response['Error']['Code'] == 'InvalidParameterException':
                raise e
            elif e.response['Error']['Code'] == 'InvalidRequestException':
                raise e
            elif e.response['Error']['Code'] == 'ResourceNotFoundException':
                raise e
        else:
            if 'SecretString' in get_secret_value_response:
                secret = get_secret_value_response['SecretString']
                print(secret)
            else:
                decoded_binary_secret = base64.b64decode(get_secret_value_response['SecretBinary'])
                print(decoded_binary_secret)
                
        json_content = json.loads(secret)

        logging.info('[-] Begin Reading Weather Feeds')
        WEATHER_API_KEY = json_content['WEATHER_API']

        feed_results = []

        # Pull the current weather conditions
        response = requests.get('https://api.openweathermap.org/data/2.5/weather?id=5391959&units=imperial&appid='+WEATHER_API_KEY)
        data = json.loads(response.text) 
        source = "current"
        icon = data['weather'][0]['icon']
        high = str(int(data['main']['temp_max']))
        low = str(int(data['main']['temp_min']))
        temp = str(int(data['main']['temp']))
        city_name = data['name']
        timezone = data['timezone']
        description = data['weather'][0]['description']

        # Obtain adjusted date time from original UTC by subtracting the time_zone difference
        dt = int(data['dt'])
        adjusted_dt = dt + timezone
        time_stamp = datetime.utcfromtimestamp(adjusted_dt).strftime('%A %Y-%m-%d %H:%M')
        day = time_stamp[:3]

        u = BuildWeather(source=source, ico=icon, high=high, low=low, temp=temp, city_name=city_name, time_stamp=time_stamp, day=day, description=description)
        feed_results.append(u)

        # Pull the forecast conditions
        response = requests.get('http://api.openweathermap.org/data/2.5/forecast?id=5391959&units=imperial&appid='+WEATHER_API_KEY)
        data = json.loads(response.text)
        timezone = int(data['city']['timezone'])
        source = "forecast"
        city_name = data['city']['name']
        
        for date in data['list']:
            dt = int(date['dt'])
            adjusted_dt = dt + timezone
            time_stamp = datetime.utcfromtimestamp(adjusted_dt).strftime('%A %Y-%m-%d %H:%M')
            forecast_day = time_stamp[:3]

            # Check that forcast doesn't include current day and grab 4PM local time
            if day != forecast_day and ("16:00" in time_stamp):
                icon = date['weather'][0]['icon']
                high = str(int(date['main']['temp_max']))
                low = str(int(date['main']['temp_min']))
                temp = str(int(date['main']['temp']))
                description = date['weather'][0]['description']
                u = BuildWeather(source=source, ico=icon, high=high, low=low, temp=temp, time_stamp=time_stamp, day=forecast_day, city_name=city_name, description=description)
                feed_results.append(u)
        logging.info('[-] Finished Updating Weather Feeds')

        logging.info('[-] Begin Updating Weather Table in Database')
        app = create_app()
        ctx2 = app.app_context()
        ctx2.push()
        with ctx2:
            BuildWeather.query.delete()
            for i in feed_results:
                db.session.add(i)
        db.session.commit()
        ctx2.pop()
        logging.info('[-] Finished Updating Weather Table in Database')

