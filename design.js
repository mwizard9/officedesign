document
  .getElementById("nightModeToggle")
  .addEventListener("click", function () {
    const checkbox = document.getElementById("flexSwitchCheckDefault");
    const sidebar = document.getElementById("SidebarId");
    sidebar.classList.toggle("dark-sidebar", checkbox.checked);
  });

//   for dynamic table
function saveData() {
  var name = document.getElementById("nameInput").value;
  var address = document.getElementById("addressInput").value;
  var contact = document.getElementById("contactInput").value;
  var contactPerson = document.getElementById("contactPersonInput").value;

  var tableBody = document.getElementById("tableBody");

  var newRow = tableBody.insertRow();

  newRow.insertCell().innerText = name;
  newRow.insertCell().innerText = address;
  newRow.insertCell().innerText = contact;
  newRow.insertCell().innerText = contactPerson;

  var actionCell = newRow.insertCell();
  actionCell.innerHTML =
    '<i class="bi bi-pencil-fill"></i> ' +
    '<i class="bi bi-trash"></i> ' +
    '<i class="bi bi-eye"></i>';

  var deleteIcon = actionCell.querySelector(".bi-trash");
  deleteIcon.addEventListener("click", function () {
    tableBody.removeChild(newRow);
  });

  document.getElementById("myForm").reset();
}
