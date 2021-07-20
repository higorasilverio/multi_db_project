## ----- PostgresSQL
docker run \
    --name postgres \
    -e POSTGRES_USER=higorsilverio \
    -e POSTGRES_PASSWORD=goodluck9123 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker ps

(ON GIT BASH)
winpty docker exec -it postgres //bin//sh

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## ----- MongoDB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=goodluck9123 \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p goodluck9123 --authenticationDatabase herois \
    --eval "db.getSiblingDB('herois').createUser({user: 'higorsilverio', pwd: 'goodluck9123', roles: [{role: 'readWrite', db: 'herois'}]})"

docker container run --name mongodb --publish 27017:27017 -d mongo

docker container exec -it mongodb bash

mongo

use herois

db.createUser({ user: "higorsilverio", pwd: "goodluck9123", roles: [] })

mongo --port 27017 -u higorsilverio -p goodluck9123 --authenticationDatabase herois