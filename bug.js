```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $match: { status: "active" }
  },
  {
    $group: {
      _id: "$userId",
      totalAmount: { $sum: "$amount" }
    }
  }
]);
```