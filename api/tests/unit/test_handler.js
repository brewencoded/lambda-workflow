'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
let event, context;

// TODO: use child_process to start sam local and invoke the lambdas
// OR
// TODO: use a dynamodb docker container and env vars to change db endpoint
describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.lambda_handler(event, context, (err, result) => {
            expect(result).to.be.an('object');
            expect(result.statusCode).to.equal(200);
            expect(result.body).to.be.an('string');

            let response = JSON.parse(result.body);

            expect(response).to.be.an('object');
            expect(response.success).to.be.true;
        });
    });
});

