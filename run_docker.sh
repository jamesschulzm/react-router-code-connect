#!/bin/bash
docker build -f Dockerfile -t js/react-router-code-connect .
docker run -it --network host -v "$(pwd):/home/js" js/react-router-code-connect bash
sudo chown -R $USER:$USER *
