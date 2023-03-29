docker buildx build --platform linux/amd64 -f ../Dockerfile -t monitoring-webui:latest --load ../
docker save -o ../publish/monitoring-webui.tar monitoring-webui:latest
docker image rm monitoring-webui:latest
