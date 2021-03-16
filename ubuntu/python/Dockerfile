FROM ubuntu:20.04
RUN apt update
RUN apt install -y python 
RUN mkdir /app
COPY ./app/ /app/
CMD python /app/app.py