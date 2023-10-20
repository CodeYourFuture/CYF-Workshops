function totalNestedArray(list) {
  let total = 0;
  for (const item of list) {
    if (Array.isArray(item)) {
      total += totalNestedArray(item);
    } else {
      total += item;
    }
  }
  return total;
}

console.log(totalNestedArray([1, 2, 3, 4, [5, 6, 7], 8, 9, [10, 11, 12]]));
