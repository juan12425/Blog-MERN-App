FROM node 

RUN mkdir -p home/app
COPY . /home/app

RUN cd /home/app \
    && npm run build

CMD ["node", "/home/app/api/app.js"]