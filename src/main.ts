const counterBtn = document.getElementById("addcounter") as HTMLButtonElement;
const counterList = document.getElementById("records") as HTMLDivElement;
const totalSumEl = document.getElementById("sum") as HTMLSpanElement;

let count = 0;

counterBtn.addEventListener("click", () => {
  count++;

  const row = document.createElement("div");
  row.className = "row";

  const paragraph = document.createElement("p");
  paragraph.textContent = `counter #${count}: `;

  const minus = document.createElement("button");
  minus.textContent = "[-]";

  const value = document.createElement("span");
  value.textContent = " 0 ";
  value.className = "card";

  let num: number = 0;

  const plus = document.createElement("button");
  plus.textContent = "[+]";

  const del = document.createElement("button");
  del.textContent = "[Delete]";

  // ➕ increment
  plus.addEventListener("click", () => {
    num++;
    value.textContent = ` ${num} `;
    updateTotalSum();
  });

  // ➖ decrement
  minus.addEventListener("click", () => {
    num--;
    value.textContent = ` ${num} `;
    updateTotalSum();
  });

  // ❌ delete
  del.addEventListener("click", () => {
    row.remove();
    updateCounterRecord();
    updateTotalSum();
  });

  row.append(paragraph, minus, value, plus, del);
  counterList.appendChild(row);
});

// 🔄 update counter numbers
function updateCounterRecord() {
  const rows = counterList.children;

  for (let i = 0; i < rows.length; i++) {
    const p = rows[i].children[0] as HTMLParagraphElement;
    p.textContent = `counter #${i + 1}: `;
  }

  count = rows.length;
}

// 🧮 total sum
function updateTotalSum() {
  let sum = 0;

  const values = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

  values.forEach((val) => {
    sum += Number(val.textContent);
  });

  totalSumEl.textContent = sum.toString();
}