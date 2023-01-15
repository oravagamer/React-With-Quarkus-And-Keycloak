# React-With-Quarkus-And-Keycloak
Example of React Application with Quarkus backend and Keycloak as OIDC server

Chat, Calendar and more.

# How to start Keycloak server with Postgresql database

## Docker:

- ### Download and install the latest version of [Docker](https://www.docker.com/)
- ### Go to terminal and create network `192.168.0.0/29` called `keycloak-net` with default gateway `192.168.0.1` and [bridge driver](https://docs.docker.com/network/bridge/)
```shell
docker network create -d bridge --subnet 192.168.0.0/29 --gateway 192.168.0.1 keycloak-net
```

- ### Next you must create Postgresql server
```shell
docker run --name postgres-db --network keycloak-net --ip 192.168.0.3 -p 5432:5432 -e POSTGRES_USER=aaa -e POSTGRES_DB=aaa -e POSTGRES_PASSWORD=aaa -d postgres
```
This command creates a Postgresql server named `postgres-db` connected to `keycloak-net` network with ip address `192.168.0.3` on port `5432`.
Parameter `-e` tells that we are setting environment variable. 
Variable `POSTGRES_USER` creates user in this my case `aaa`.
Variable `POSTGRES_PASSWORD` creates password for user. Must be specified. I used `aaa`.

- ### After creating Postgres server we must create user, password and database for keycloak to connect
```sql
create database keycloak;
create user keycloak with password 'keycloak' superuser;
```

This query creates database named `keycloak`, user named 'keycloak' with password 'keycloak' and superuser privileges.
<span style="color: red;weight: 500;">Please note that you must use better password than this. It's only example!</span>

#### Connect to `psql` console
```shell
docker run -it --rm --network keycloak-net postgres psql -h 192.168.0.3 -p 5432 -U aaa
```

- ### Now you can create Keycloak server
```shell
docker run --name keycloak --network keycloak-net --ip 192.168.0.2 -p 8080:8080 -e KEYCLOAK_ADMIN=aaa -e KEYCLOAK_ADMIN_PASSWORD=aaa  quay.io/keycloak/keycloak:20.0.2 start-dev --db=postgres --db-url=jdbc:postgresql://192.168.0.3:5432/keycloak --db-username=keycloak --db-password=keycloak
```

* network: `192.168.0.2:8080`
* name of admin `KEYCLOAK_ADMIN`: `aaa`
* password of admin `KEYCLOAK_ADMIN_PASSWORD`: `aaa`
* `start-dev`: start keycloak in development mode
* database type `--db`: `postgres`
* jdbc url of database `--db-url`: `jdbc:postgresql://192.168.0.3:5432/keycloak`
* Username of database user `--db-username`: `keycloak`
* Password of user `--db-password`: `keycloak`

## Linux: