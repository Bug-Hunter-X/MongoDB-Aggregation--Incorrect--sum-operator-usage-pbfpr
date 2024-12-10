# MongoDB Aggregation Bug: Incorrect $sum Operator Usage

This repository demonstrates a common error in MongoDB aggregation pipelines where the `$sum` operator is used incorrectly with a string literal instead of a field name. This results in unintended aggregation results. The solution shows the correct usage of `$sum` to properly aggregate numerical fields.

## Bug Description
The provided `bug.js` file contains a MongoDB aggregation pipeline that attempts to sum the `amount` field. However, it incorrectly uses the string representation of the field in the `$sum` operator, leading to an error or unexpected behavior.

## Solution
The `bugSolution.js` demonstrates the correct way to use the `$sum` operator in a MongoDB aggregation pipeline. The fix involves using the correct field name within the `$sum` operator to correctly sum the numerical values of the `amount` field.