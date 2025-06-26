[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/yRVOMUHS)
# Dockerized version 
## Build instructions
build container

`podman build -t school-project -f .devcontainer/Dockerfile .`

run container

`podman run -d -p 5173:5173 school-project`

## Deploying
after building and running container, open shell inside the container:
- get container name using `podman ps`
- open a shell in the container `podman exec -it /bin/bash`
- configure git inside the container:
```
git config user.name "e227474"
git config user.email "e227474@users.noreply.github.com"
```

- enter username and access token for github
- deploy `npm run deploy`
