function tag(strings, ...values) {
  console.log(strings[0]);
  console.log(strings[1]);
  console.log(strings[2]);
  console.log(strings.length);
  console.log(values);
  if (values[0] < 20) {
    values[1] = "awake";
  }
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

var message = tag`it's ${new Date().getHours()} i'm ${"sleeply"}`;
console.log(message);
