const Stack = require('../../dist/data-structures/Stack').StackOnSinglyLinkedList;

/**
 * Arithmetic Expression Evaluation.
 * Two-stack algorithm. [E.W.Dijkstra]
 *
 * Expression may consist of:
 * - `+` - plus operators;
 * - `*` - multiplication operators;
 * - `[0-9]` - positive numbers;
 * - `(` - left scope;
 * - `)` - right scope;
 *
 * Expression restrictions:
 * - Every elementary operation has to be enclosed in scopes `( 3 + 8 )`.
 * - Every operation has to be valid and be presented by 1 operator and 2 arguments.
 * - Every elementary operation can be used as argument `( ( 3 + 8 ) * 2 )`.
 *
 * @param {string} expression - arithmetic expression saved in a string.
 *
 * @throws {Error} if `expression` is `null`;
 * @throws {Error} if `expression` is empty string;
 * @throws {Error} if `expression` consist any of restricted characters;
 * @throws {Error} if `expression` is invalid (does not follow expression restrictions);
 *
 * @returns {number} result of expression evaluation.
 */
function evaluateArithmeticExpression(expression) {
  if (expression == null) throw new Error('Expression is `null`.');
  if (expression.length == 0) throw new Error('Expression is empty.');

  let operations = new Stack();
  let values = new Stack();

  let parts = expression.split(' ');

  parts.forEach((part, index) => {
    switch(part) {
      case ' ':
      case '(':
        break;
      case '+':
      case '*':
        operations.push(part);
        break;
      case ')':
        let operation = operations.pop();
        if      (operation == '+') values.push(values.pop() + values.pop());
        else if (operation == '*') values.push(values.pop() * values.pop());
        break;
      default:
        if (!(/\d/.test(part))) throw new Error(`Invalid part of '${part}' at index ${index} in expression '${expression}'.`);
        // else // character is a digit
        let value = Number(part);
        values.push(value);
    }
  });

  if ((values.length() != 1) || (operations.length() != 0))
    throw new Error(`Expression '${expression}' is invalid (does not follow expression restrictions).`);

  return values.pop();
}

module.exports.evaluateArithmeticExpression = evaluateArithmeticExpression;