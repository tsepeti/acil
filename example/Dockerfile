FROM node:10.20.1

RUN mkdir /app

WORKDIR /app

COPY . .

# Install
RUN yarn

## ENV VARIABLES
ENV SENDGRID_API_KEY=SG.XXX

## Expose ports
EXPOSE 3000

# run start
CMD yarn start