// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

for (let Contact of threeContacts) {
  let row = document.createElement("tr");
  row.innerHTML = `
  <td>
    <img src="${Contact.pictureUrl}" />
  </td>
  <td> ${Contact.name} </td>
  <td> ${Contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(row);
}

// ITERATION 2 - Delete Buttons

const deleteButton = document.querySelectorAll(".btn-delete");
for (const item of deleteButton) {
  item.addEventListener("click", (event) => {
    event.target.closest("tr").remove();
  });
}
// ITERATION 3 - Like Buttons

const likeButton = document.querySelectorAll(".btn-like");
for (const element of likeButton) {
  element.addEventListener("click", (event) => {
    element.classList.toggle("selected");
  });
}

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", (event) => {
  const randomIndex = Math.floor(Math.random() * contacts.length); //index aleatoire
  const newContact = contacts[randomIndex];
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${newContact.pictureUrl}" />
  </td>
  <td> ${newContact.name} </td>
  <td> ${newContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(newRow);
  attachDeleteButtonListener();
});
