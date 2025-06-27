# Dockerized version 
## Build instructions
build container

`podman build -t school-project -f .devcontainer/Dockerfile .`

run container

`podman run -d -p 5173:5173 school-project`

## Deploying
after building and running container, open shell inside the container:
- get container name using `podman ps`
- open a shell in the container `podman exec -it [CONTAINER NAME] /bin/bash`
- configure git inside the container:
```
git config user.name "[USERNAME]"
git config user.email "[USERNAME]@users.noreply.github.com"
```

- enter username and access token for github
- deploy `npm run deploy`
