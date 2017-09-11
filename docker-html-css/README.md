# Docpad Development With Docker

This is a base image for Docpad development.

Updated at *Aug 09, 2017*.

## Prerequisites

- Node.js 8.x
- Yarn 0.27.x
- Bower 1.8.x

## Getting Started

### 1. Docker

- You can install Docker follow this [guide](https://docs.docker.com/engine/installation/).

### 2. Build Docpad image

- Build your first Docpad image using Docker.

```
docker build -t docpad-docker .
```

**NOTE**: 

- You can change your image by replacing `docpad-docker` by any name you want.

- This command only need to run once in the beginning.

### 3. Docpad Init

```
docker run -it --rm -w /home/app -v $(pwd):/home/app docpad-docker docpad init
```

### 4. Bower

- Init

```
docker run -it --rm -w /home/app -v $(pwd):/home/app docpad-docker bower init
```

- Add a package

```
docker run -it --rm -w /home/app -v $(pwd):/home/app docpad-docker bower install jquery --save
```

### 5. Docpad Plugin

- Install a Docpad plugin

```
docker run -it --rm -w /home/app -v $(pwd):/home/app docpad-docker docpad install livereload
```

### 6. Docpad Run

```
docker run -it --rm -e HOSTNAME=0.0.0.0 -p 9778:9778 -w /home/app -v $(pwd):/home/app docpad-docker docpad run
```

Now you can go to http://localhost:9778 to see your app.

## Author
[Huy Tran](https://gitlab.asoft-python.com/huy-tranquoc)

## Common Issues
*Please help to create issues for this image if you find any.*

- [Auto-refresh browser with Livereload](https://gitlab.asoft-python.com/bgh/docker-html-css/issues/3)