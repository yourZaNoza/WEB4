// блок 1

// 1
function changeHeader() {
  const header = document.getElementById("header");
  header.textContent = "Заголовок изменён!";
}

// 2
const box = document.querySelector('.box');
box.addEventListener('mouseenter', function() {
  box.classList.add('hovered');
});
box.addEventListener('mouseleave', function() {
  box.classList.remove('hovered');
});

// 3
const inputField = document.getElementById('inputField');
const output = document.getElementById('output');
inputField.addEventListener('input', function() {
  output.textContent = inputField.value;
});

// 4
const backgroundBox = document.getElementById('backgroundBox');
backgroundBox.addEventListener('dblclick', function() {
  backgroundBox.style.backgroundColor = 'lightgreen';
});

// 5
const agreeCheckbox = document.getElementById('agreeCheckbox');
const submitButton = document.getElementById('submitButton');
agreeCheckbox.addEventListener('change', function() {
  submitButton.disabled = !agreeCheckbox.checked;
});

// 6
const widthSpan = document.getElementById('width');
const heightSpan = document.getElementById('height');
function updateWindowSize() {
  widthSpan.textContent = window.innerWidth;
  heightSpan.textContent = window.innerHeight;
}
updateWindowSize();
window.addEventListener('resize', updateWindowSize);

// 7
const link = document.getElementById('link');
const originalText = link.textContent;
link.addEventListener('mouseenter', function() {
  link.textContent = "Вы навели мышь";
});
link.addEventListener('mouseleave', function() {
  link.textContent = originalText;
});

// 8
const hideMeElement = document.getElementById('hideMe');
hideMeElement.addEventListener('click', function() {
  hideMeElement.style.display = 'none';
});

// 9
const textField = document.getElementById('textField');
const maxLength = 10;
textField.addEventListener('input', function() {
  if (textField.value.length > maxLength) {
    textField.value = textField.value.slice(0, maxLength);
  }
});

// 10
const toggleButton = document.getElementById('toggleButton');
const toggleBox = document.getElementById('toggleBox');
toggleButton.addEventListener('click', function() {
  if (toggleBox.classList.contains('active')) {
    toggleBox.classList.remove('active');
    toggleBox.classList.add('inactive');
    toggleBox.textContent = "Состояние: неактивно";
  } else {
    toggleBox.classList.remove('inactive');
    toggleBox.classList.add('active');
    toggleBox.textContent = "Состояние: активно";
  }
});

// блок 2

// 1
const button = document.createElement('button');
button.textContent = 'Нажми меня';
button.classList.add('container');
document.body.appendChild(button);
button.addEventListener('click', function() {
  alert('Кнопка нажата!');
});

// 2
const exampleElement = document.getElementById('example');
exampleElement.classList.add('highlight');

// 3
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.classList.remove('active');
});

// 5
const headerElement = document.getElementById('header2');
headerElement.textContent = 'Добро пожаловать!';

// 6
document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
      console.log("Кнопка нажата");
    });
  });

// 7
const myList = document.getElementById('myList');
const newListItem = document.createElement('li');
newListItem.textContent = "Новый элемент";
myList.appendChild(newListItem);

// 8
const elementToDelete = document.getElementById('deleteMe');
if (elementToDelete) {
  elementToDelete.remove();
}

// 10
const highlightElements = document.querySelectorAll('.highlight');
highlightElements.forEach(element => {
  element.style.color = 'blue';
});

// блок 3

// 1
function updateItemsText(stringsArray) {
  const items = document.querySelectorAll('.item');
  items.forEach((item, index) => {
    if (index < stringsArray.length) {
      item.textContent = stringsArray[index];
    }
  });
  
}
  

const newTexts = ["Отведай ещё", "этих мягких", "французских булок"];
updateItemsText(newTexts);

// 2

const products = [
  { id: 1, name: "Macbook", price: 150000 },
  { id: 2, name: "iPhone", price: 130000 },
  { id: 3, name: "AirPods", price: 25000 },
  { id: 4, name: "Magic mouse", price: 8000 }
];

function createProductList(products) {

  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} — ${product.price} руб.`;
    productList.appendChild(listItem);
  });
}


createProductList(products);


// 4

const data = [
  { id: 1, name: "Алина", age: 25, city: "Ростов-на-Дону" },
  { id: 2, name: "Полина", age: 26, city: "Шахты" },
  { id: 3, name: "Малина", age: 27, city: "Таганрог" }
];

function createTableFromArray(data) {

  const container = document.getElementById('tableContainer');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const headers = Object.keys(data[0]);
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  data.forEach(item => {
    const row = document.createElement('tr');

    headers.forEach(header => {
      const td = document.createElement('td');
      td.textContent = item[header];
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  container.appendChild(table);
}


createTableFromArray(data);


// блок 4 // задание 1



const images = [
  { id: 1, url: "./images/img1.jpg" },
  { id: 2, url: "./images/img2.jpg" },
  { id: 3, url: "./images/img3.jpg" },
  { id: 4, url: "./images/img4.jpg" },
  { id: 5, url: "./images/img5.jpg" },
  { id: 6, url: "./images/img6.jpg" },
];

function createGallery(images) {
  const gallery = document.getElementById('gallery');

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = `Image ${image.id}`;

    imgElement.addEventListener('click', function() {
      document.querySelectorAll('#gallery img').forEach(img => {
        img.classList.remove('active');
      });
      this.classList.add('active');
    });

    gallery.appendChild(imgElement);
  });
}


createGallery(images);