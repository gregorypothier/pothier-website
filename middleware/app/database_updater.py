from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor


def db_updater():
    """
    Initiates the scheduler which updates the database at intervals.

    The news table and the weather table in the database are updated
    at configurable intervals.

    """

    from .models.models import BuildNews
    scheduler = BackgroundScheduler()
    scheduler.add_job(BuildNews.read_feeds, 'interval', seconds=300)
    scheduler.start()
"""
    from .models.models import BuildWeather
    scheduler2 = BackgroundScheduler()
    scheduler2.add_job(BuildWeather.weather_feeds, 'interval', seconds=600)
    scheduler2.start()
    """