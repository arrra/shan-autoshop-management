const faker = require('faker');
const request = require('supertest');
const app = require('../../../app');

describe('customer endpoint', () => {
  describe('POST /customer', () => {
    context('when customer creating a account WITH required attributes', () => {
      it('should SAVE to db', (done) => {
        request(app)
          .post('/customers')
          .send({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
          })
          .expect(201)
          .then((res) => {
            expect(res.body).to.have.property('_id');
            expect(res.body).to.have.property('firstName');
            expect(res.body).to.have.property('lastName');
            expect(res.body).to.have.property('email');

            assert.typeOf(res.body._id, 'string', 'we have an string');
            assert.typeOf(res.body.firstName, 'string', 'we have an string');
            assert.typeOf(res.body.lastName, 'string', 'we have an string');
            assert.typeOf(res.body.email, 'string', 'we have an string');
            done();
          })
      })
    })

    context('when customer creating a account WITHOUT required attributes', () => {
      it('should not save to db', (done) => {
        request(app)
          .post('/customers')
          .send({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
          })
          .expect(400, done)
      })
    })
  })
})
