#!/bin/bash
cd /home/kavia/workspace/code-generation/image-insights-app-builder-303601-303609/app_generator_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

