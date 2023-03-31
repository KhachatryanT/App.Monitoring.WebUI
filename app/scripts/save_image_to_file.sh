#!/bin/bash
mkdir ../publish
docker save -o ../publish/monitoring-webui.tar monitoring-webui:latest
