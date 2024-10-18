let myMoney = document.getElementById("myMoney").innerText;
const donate = document.getElementById("donate");
const history = document.getElementById("history");
const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");

donate.addEventListener("click", (e) => {
  history.classList.remove("active");
  donate.classList.add("active");
  main1.classList.remove("hidden");
  main2.classList.add("hidden");
});
history.addEventListener("click", (e) => {
  donate.classList.remove("active");
  history.classList.add("active");
  main2.classList.remove("hidden");
  main1.classList.add("hidden");
});

const noakhaliAdd = document
  .getElementById("noakhaliAdd")
  .addEventListener("click", () => {
    let input = document.getElementById("input1");
    let val = input.valueAsNumber;
    if (val > 0) {
      let noakhali = document.getElementById("noakhali").innerText;
      document.getElementById("noakhali").innerText = Number(noakhali) - val;
      const newMoney = Number(myMoney) + val;
      document.getElementById("myMoney").innerText = newMoney;
      input.value = "";

      let date = new Date();
      const div = document.createElement("div");
      div.setAttribute("class", "power123");
      main2.appendChild(div);
      div.innerHTML = `<h2> ${val} taka is donated for noakhali,at noakhali Bangladesh </h2>`;
      div.insertAdjacentHTML("beforeend", `<p>${date}</p>`);
    } else {
      alert("Please enter a valid number");
      input.value = "";
    }
  });

const feniAdd = document
  .getElementById("feniAdd")
  .addEventListener("click", () => {
    let input = document.getElementById("input2");
    let val = input.valueAsNumber;
    if (val > 0) {
      let feni = document.getElementById("feni").innerText;
      document.getElementById("feni").innerText = Number(feni) - val;
      const newMoney = Number(myMoney) + val;
      document.getElementById("myMoney").innerText = newMoney;
      input.value = "";
      let date = new Date();

      const div = document.createElement("div");
      div.setAttribute("class", "power123");
      main2.appendChild(div);
      div.innerHTML = `<h2> ${val} taka is donated for feni,at feni Bangladesh </h2>`;
      div.insertAdjacentHTML("beforeend", `<p>${date}</p>`);
    } else {
      alert("Please enter a valid number");
      input.value = "";
    }
  });

const quoteAdd = document
  .getElementById("quoteAdd")
  .addEventListener("click", () => {
    let input = document.getElementById("input3");
    let val = input.valueAsNumber;
    if (val > 0) {
      let quote = document.getElementById("quote").innerText;
      document.getElementById("quote").innerText = Number(quote) - val;
      const newMoney = Number(myMoney) + val;
      document.getElementById("myMoney").innerText = newMoney;
      input.value = "";
      let date = new Date();

      const div = document.createElement("div");
      div.setAttribute("class", "power123");
      main2.appendChild(div);
      div.innerHTML = `<h2>${val} taka is donated for quote,at quote Bangladesh </h2>`;
      div.insertAdjacentHTML("beforeend", `<p>${date}</p>`);
    } else {
      alert("Please enter a valid number");
      input.value = "";
    }
  });
