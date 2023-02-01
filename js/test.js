const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Манго і Ківі

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Аякс

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Полі і Х'юстон
  

// console.log(bookShelf.getBooks()); 
// console.log(bookShelf.addBook("Haze")); 
// console.log(bookShelf.removeBook("Red sunset")); 
// console.log(bookShelf.updateBook("Sands of dune", "Dune")); 
// console.log(makeTask({ text: "Buy bread" })); 
console.log(); 

