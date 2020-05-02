# New Express.js app in Docker

You can create a new Express.js project in a fully dockerized development environment with this repositroy.

Requirements: `Docker`

Create and run:

```sh
docker-compose up -d
```

Run npm command from the host:

```sh
docker container exec <container name or id> npm <command>
```

If you use nginx proxy, change the docker network name in the docker-compose.yml.
