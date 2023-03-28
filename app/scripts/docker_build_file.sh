docker buildx build -f ../Dockerfile --platform linux/amd64,linux/arm64/v8 --output type=tar,dest=../publish/monitoring-webui.tar ../
