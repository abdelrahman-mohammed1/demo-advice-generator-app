let el = document.getElementById("msg");
let num = document.getElementsByClassName("text-style")[0];
console.log(num);
async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data.slip.advice);
  el.innerHTML = data.slip.advice;
  num.innerHTML = `ADVICE # ${data.slip.id}`;
}

getAdvice(); // Call function
