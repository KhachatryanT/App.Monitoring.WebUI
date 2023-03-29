mkdir ../publish
docker buildx build --platform linux/arm64/v8 -f ../Dockerfile -t monitoring-webui:latest --load ../
docker save -o ../publish/monitoring-webui.tar monitoring-webui:latest
docker image rm monitoring-webui:latest
