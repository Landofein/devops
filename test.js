var main = require('/workspaces/devops/index.js');
var assert = require('assert');

describe('Regular factorial value', function() {
    it('should return 120 for factorial(5)', function() {
        assert.strictEqual(main.factorial(5), 120);
    });
    it('should return 1 for factorial(1)', function() {
        assert.strictEqual(main.factorial(1), 1);
    });
    it('should return 1 for factorial(0)', function() {
        assert.strictEqual(main.factorial(0), 1);
    });
});

describe('Edge cases for factorial function', function() {
    it('should return undefined for negative input', function() {
        assert.strictEqual(main.factorial(-1), undefined);
    });
});
