const supertest = require('supertest')
const mockery = require('mockery')


before(function () {
    mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
    });
});

after(function () {
    mockery.disable();
});
afterEach(function () {
    mockery.resetCache()
})

describe('/', function () {
    it('Should 200 OK when there are users', function (done) {
        mockery.registerMock('./users', {
            fetch: () => [{name: 'Mr Test'}]
        })
        supertest(require('../src/app'))
            .get('/')
            .expect(200)
            .expect('Mr Test')
            .end(done)
    })
    it('Should 404 Not found when there are no users', function (done) {
        mockery.registerMock('./users', {
            fetch: () => []
        })
        supertest(require('../src/app'))
            .get('/')
            .expect(404)
            .end(done)
    })
})
