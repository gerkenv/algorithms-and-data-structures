const evaluateArithmeticExpression
 = require('../../src/algorithms/expression-evaluation').evaluateArithmeticExpression;

const expect = require('chai').expect;

describe('evaluateArithmeticExpression', function() {
  let simpleExpression = '( 1 + 2 )';
  it('should evaluate simple expression, like ' + simpleExpression, () => {
    const result = evaluateArithmeticExpression(simpleExpression);
    expect(result).to.be.equal(eval(simpleExpression));
  });
  let nestedExpression = '( ( 3 * 2 ) + 2 )';
  it('should evaluate nested expression in simple expression, like ' + nestedExpression, () => {
    const result = evaluateArithmeticExpression(nestedExpression);
    expect(result).to.be.equal(eval(nestedExpression));
  });
  let complicatedExpression = '( 2 * ( ( 1 + 7 ) + ( 10 * 5 ) ) )';
  it('should evaluate complicated expression, like ' + complicatedExpression, () => {
    const result = evaluateArithmeticExpression(complicatedExpression);
    expect(result).to.be.equal(eval(complicatedExpression));
  });
});