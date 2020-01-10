from flask import jsonify, request
from sqlalchemy import and_
from app import database_updater, create_app, config
import logging

app = create_app()
database_updater.db_updater()


@app.route('/api/')
def home():
    """
    Serve the /api/.

    Connect to the database and extract the data into a json
    object which is serves /api/.

    Returns
    -------
    object
        the json response is returned.

    """

    from .models.models import BuildNews
    from .models.models import BuildWeather
    
    #logging.info('[-] Begin pulling News Feeds from database')
    # final_list will be the jsonified list we serve on the api
    final_list = []
    for tag in config.d:
        tag_dict = {'name':tag}
        tag_list = []

        for source in config.d[tag]:
            source_list = []
            source_dict = {}

            name = config.d[tag][source]['name']
            title = config.d[tag][source]['title']
            tmp = BuildNews.query.filter(BuildNews.source==name, BuildNews.tag==tag).all()
            for t in tmp:
                source_list.append({'tag':t.tag, 'source': t.source, 'link': t.link, 'title': t.title, 'time_stamp': t.time_stamp, 'ico':t.ico, 'id':t.id, 'source_title':t.source_title})
            if source_list:
                source_dict['name'] = name
                source_dict['title'] = title
                source_dict['ico'] = t.ico
                source_dict['data'] = source_list
                tag_list.append(source_dict)
        tag_dict['data'] = tag_list
        final_list.append(tag_dict)
        #logging.info('[-] End pulling News Feeds from database')

    logging.info('[-] Begin pulling Weather Feeds from database')
    # Reset all variables and create forecast dict
    tag_dict = {'name':'forecast'}
    tag_list = []
    source_list = []
    source_dict = {}

    t2 = BuildWeather.query.filter(BuildWeather.source=="forecast").all()
    for u in t2:
        source_list.append({'high':u.high, 'source': u.source, 'low': u.low, 'city_name': u.city_name, 'time_stamp': u.time_stamp, 'ico':u.ico, 'id':u.id, 'day':u.day, 'temp':u.temp})
    if source_list:
        source_dict['data'] = source_list
        tag_list.append(source_dict)

    tag_dict['data'] = tag_list
    final_list.append(tag_dict)

    # Reset all variables and create weather dict
    tag_dict = {'name':'weather'}
    tag_list = []
    source_list = []
    source_dict = {}

    t2 = BuildWeather.query.filter(BuildWeather.source=="current").all()
    for u in t2:
        source_list.append({'high':u.high, 'source': u.source, 'low': u.low, 'city_name': u.city_name, 'time_stamp': u.time_stamp, 'ico':u.ico, 'id':u.id, 'day':u.day, 'temp':u.temp})
    if source_list:
        source_dict['data'] = source_list
        tag_list.append(source_dict)

    tag_dict['data'] = tag_list
    final_list.append(tag_dict)
    logging.info('[-] End pulling Weather Feeds from database')

    # Serve final_list jsonified on /api/
    response = jsonify({'feed': final_list})
    return response


# Prevent cached responses
if app.config["DEBUG"]:
    @app.after_request
    def after_request(response):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
        response.headers["Expires"] = 0
        response.headers["Pragma"] = "no-cache"
        return response