Array.prototype.xeusForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const myFavLang = ["javascript", "elixir", "golang", "c++", "typescript"];

const printMyFavLang = myFavLang.xeusForEach((lang, idx, arr) => {
  console.log(`index: ${idx}`);
  console.log(`language: ${lang}`);
  console.log(`array: ${arr}`);
  console.log(`----------------------------------------------`);
});

console.log(printMyFavLang);
