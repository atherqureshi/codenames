FROM python:3.8.5

RUN pip install --upgrade pip

WORKDIR /app

COPY . /app/

ENV PYTHONPATH=$PYTHONPATH:/app/

RUN pip install -r requirements.txt