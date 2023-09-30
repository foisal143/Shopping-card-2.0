let count = 0;
let totalCost = 0;
const totalProduct = document.getElementById('totalProduct');
// function for create tr
function createTr(value1, value2, value3, value4, value5) {
  const tbody = document.getElementById('tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = `
   <td>${value1} </td>
   <td >${value2} </td>
   <td>${value3} </td>
   <td>${value4} </td>
   <td>${value5} </td>
   <td> <button class="px-5 rounded py-2 bg-sky-500 text-white">SQUARE</button> </td>
  `;
  tbody.appendChild(tr);
}
// function for innerText
function innerTexts(id) {
  const innerField = document.getElementById(id);
  const innerValue = innerField.innerText;
  return innerValue;
}
// function for inner Intiger Text
function innerTextInt(id) {
  const innerField = document.getElementById(id);
  const innerValuest = innerField.innerText;
  const innerValue = parseInt(innerValuest);
  return innerValue;
}
// function for get value form input
function inputField(id) {
  const inputF = document.getElementById(id);
  const inputSt = inputF.value;
  const inputValueIn = parseInt(inputSt);
  return inputValueIn;
}
// function for disabled the button
function disabledBtn(id) {
  const btn = document.getElementById(id);
  btn.setAttribute('disabled', true);
}
// card one
document.getElementById('coffeeBtn').addEventListener('click', () => {
  count += 1;
  totalProduct.innerText = count;
  const name = innerTexts('ctext');
  const price = innerTextInt('cPrice');
  const quantity = innerTextInt('cQun');
  const total = price * quantity;
  createTr(count, name, price, quantity, total);
  totalCost += total;
  setInner();
  disabledBtn('coffeeBtn');
});
// card two
document.getElementById('hBtn').addEventListener('click', () => {
  count += 1;
  totalProduct.innerText = count;
  const name = innerTexts('htext');
  const price = innerTextInt('hPrice');
  const quantity = innerTextInt('hQun');
  const total = price + quantity;
  createTr(count, name, price, quantity, total);
  totalCost += total;
  setInner();
  disabledBtn('hBtn');
});
// card three
document.getElementById('pBtn').addEventListener('click', () => {
  count += 1;
  totalProduct.innerText = count;
  const name = innerTexts('ptext');
  const price = innerTextInt('pPrice');
  const quantity = innerTextInt('pQun');
  const total = price - quantity;
  createTr(count, name, price, quantity, total);
  totalCost += total;
  setInner();
  disabledBtn('pBtn');
});
// card four
document.getElementById('uBtn').addEventListener('click', () => {
  count += 1;
  totalProduct.innerText = count;
  const name = innerTexts('utext');
  const price = innerTextInt('uPrice');
  const quantity = innerTextInt('uQun');
  const total = price ** quantity;
  createTr(count, name, price, quantity, total);
  totalCost += total;
  setInner();
  disabledBtn('uBtn');
});
// card five
document.getElementById('vBtn').addEventListener('click', () => {
  const name = innerTexts('vtext');
  const price = inputField('vPrice');
  const quantity = inputField('vQun');
  const inputPrice = document.getElementById('vPrice');

  const inputQun = document.getElementById('vQun');
  if (inputPrice.value === '' || inputQun.value === '') {
    alert('Please Enter a valid number');
    return;
  }
  if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
    alert('please enter a valid number');
    return;
  }
  count += 1;
  totalProduct.innerText = count;
  const total = price * quantity;
  createTr(count, name, price, quantity, total);
  totalCost += total;
  setInner();
  disabledBtn('vBtn');
});

function setInner() {
  const td = document.getElementById('totalCost');
  td.innerText = totalCost;
}
