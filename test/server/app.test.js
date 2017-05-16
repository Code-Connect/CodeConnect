var request = require('supertest');
var server = require('../../server');

describe('GET /', function() {
  it('should render ok', function(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
});

describe('POST /updatetask', function() {
  it('should render ok', function(done) {
    request(server)
      .post('/updatetask')
      .expect(200, {test:true}, done);
  });
});
