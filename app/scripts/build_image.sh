#!/bin/bash
docker buildx build --platform linux/arm64/v8 -f ../Dockerfile -t monitoring-webui:latest --load ../
