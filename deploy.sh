#!/bin/bash

# dev ./deploy.sh
# prod ./deploy.sh prod
STAGE=${1:-dev}
PROJECT=sam-application-$STAGE

BUCKET=$PROJECT-20180613-brewencoded

# create s3 bucket - simple and easy
aws s3 mb s3://$BUCKET

# build directory
rm -rf build
mkdir build

# generate yaml for deployment using template
sam package                      \
    --template-file template.yaml               \
    --output-template-file build/output.yaml    \
    --s3-bucket $BUCKET

# deploy to AWS
sam deploy                                      \
    --template-file build/output.yaml           \
    --stack-name $PROJECT                       \
    --capabilities CAPABILITY_IAM               \
    --parameter-overrides Environment=$STAGE
