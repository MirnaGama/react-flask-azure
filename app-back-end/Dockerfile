FROM python:2.7

COPY . /app-back-end

WORKDIR /app-back-end

RUN pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python"]

CMD ["api.py"]