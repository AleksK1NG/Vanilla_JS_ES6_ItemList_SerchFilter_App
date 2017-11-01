const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

// Add item function

const addItem = (event) => {
  event.preventDefault();

  // Get input value
  const itemInput = document.querySelector('#itemInput').value;

  // Create new li item
  const li = document.createElement('li');

  // Add class to li
  li.className = 'list-group-item';
 
  // Add text node with input value
  li.appendChild(document.createTextNode(itemInput));

  // Create Delete button
  const deleteButton = document.createElement('button');

  // Add classes to button
  deleteButton.className= 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteButton.appendChild(document.createTextNode('x'));

  // Add button to li
  li.appendChild(deleteButton);

  // Add li to list of items
  itemList.appendChild(li);
  console.log(itemList);
}

// Create removeItem function

const removeItem = (event) => {
  console.log('awesome');
  if (event.target.classList.contains('delete')) {
    const li = event.target.parentElement; // Click tarher parent element
    itemList.removeChild(li);  //Remove li from item list
  }
}


const filterItems = (event) => {
  // Convert text to lowercase
  const textValue = event.target.value.toLowerCase();
  // Get li items
  const items = itemList.getElementsByTagName('li');
  // Convert itemlist to Array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(textValue) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Events:

// Form submit event
form.addEventListener('submit', addItem);

// Delete item event
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);