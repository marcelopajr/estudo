var videoGames = ['Switch', 'PS4', 'Xbox'];
console.log(videoGames[0]);

// videoGames.pop();
// console.log(videoGames);
videoGames.push('3DS');
console.log(videoGames);

// For loop
for (var num = 0; num <= 3; num++) {
  console.log(num);
}

// While loop
var i = 5;
while (i <= 25) {
  console.log(i);
  i += 5;
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);

  if (videoGames[item] === 'PS4') {
    break;
  }
}
