FROM python:3.7.1


ENV PYTHONDONTWRITEBYTECODE 1
ENV FLASK_DEBUG True
ENV PYTHONPATH "/app"
ENV FLASK_APP "app/main.py"

RUN mkdir /app
WORKDIR /app

COPY . ./app
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

ADD . /app

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]