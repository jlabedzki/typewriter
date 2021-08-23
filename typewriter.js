const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  if (i === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[i] + '\n');
    }, (i * 50));
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, (i * 50));
  }
}

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 500);
// }