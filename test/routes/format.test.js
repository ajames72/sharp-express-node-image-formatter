const request = require('supertest');
const express = require('express');
const expect  = require('chai').expect;

describe('format route', () => {

    describe('root', () => {
        const app = express();

        it('should respond', () => {
            request(app)
                .post('/format')
                .expect(200)
                .end(function(err, res) {
                    if (err) throw err;
                });
        });
    });
});