function clickMe(a, b) {
  console.log(a + b);
}

clickMe(10, 20);
//-------------

const newClickMe = (a, b) => {
  console.log(a + b);
};

newClickMe(15, 25);

const newClick = (a) => console.log(a + 15);

newClick(5);
