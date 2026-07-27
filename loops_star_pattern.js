for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 0; j <= 5; j++) {
    row = row + " *";
  }
  console.log(row);
}
console.log("\n\n");
for (let i = 0; i <= 4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + " *";
  }
  console.log(row);
}

console.log("\n\n");

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + " " + (i + 1);
  }
  console.log(row);
}

console.log("\n\n");

let n = 6;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + " " + (j + 1);
  }
  console.log(row);
}

console.log("\n\n");

//let n = 5;
for (let i = 0; i < n; i++) {
  let spaces = "";
  for (let j = 0; j < n - i - 1; j++) {
    spaces = spaces + "  ";
  }
  let stars = "";
  for (let j = 0; j < i + 1; j++) {
    stars = stars + " *";
  }
  console.log(spaces + stars);
}

console.log("\n\n");

// let n = 6;
for (let i = 0; i < n; i++) {
  let switchh = 1,
    row = "";
  for (let j = 0; j <= i; j++) {
    row = row + " " + switchh;
    if (switchh === 1) switchh = 0;
    else switchh = 1;
  }
  console.log(row);
}
