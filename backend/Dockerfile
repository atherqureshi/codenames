FROM python:3.8.5

WORKDIR /app

COPY . /app/

ENV PYTHONPATH=$PYTHONPATH:/app/

RUN pip install --upgrade pip

RUN pip install -r requirements.txt