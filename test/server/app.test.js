var request = require('supertest');
var server = require('../../server');

describe('GET /', function() {
  it('should render ok', function(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /project', function() {
  it('should render ok', function(done) {
    request(server)
      .get('/project')
      .expect(200, done);
  });
});
