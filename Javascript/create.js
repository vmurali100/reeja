var users = [];
function createUser() {
  var user = {
    fname: "",
    lname: "",
    email: "",
  };
  for (a in user) {
    user[a] = document.getElementById(a).value;
  }
  console.log(user);
  users.push(user);
  clearData(user);
  displayUsers();
}
function displayUsers() {
  document.getElementById("myTable").innerHTML = "";
  users.forEach((myUser, i) => {
    var myTr = document.createElement("tr");
    for (a in myUser) {
      var mytd = document.createElement("td");
      mytd.innerHTML = myUser[a];
      myTr.appendChild(mytd);
    }

    var editTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.setAttribute("onclick", "editUser(" + i + ")");

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");

    editTd.appendChild(editBtn);
    deleteTd.appendChild(deleteBtn);

    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  });
}

function clearData(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}
