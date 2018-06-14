# lambda-workflow

A simple app to showcase a local development and test with remote deplay workflow built around SAM CLI.

### Workflow
 - venv to keep python dependencies separated
 - SAM CLI with Docker to develop, test, and deploy
 - React and Webpack for the front-end

### Getting started
 - install docker through your package manager, or alternate options on the docker website
 - clone the repo `git clone git@github.com:brewencoded/lambda-workflow.git`
 - create a virtual environment `virtualenv -p /path/to/your/python2 venv`
   - find python path using `which python2`
 - enter python environment `source venv/bin/activate`
 - install dependencies `pip install -r requirements.txt`
 - install lambda dependencies `cd sam-app/hello_world && npm install`
 - install client app dependencies `cd sam-app/client && npm install`
 - run `aws configure` and fill in the information

### Running the app
 - to run the app locally: `sam local start-api`
  - go to `http://localhost:3000/hello` to access the lambda
 - to deploy to AWS: `./deploy.sh`
  - this creates a Lambda and DynamoDB on your AWS account