function editUser(i) {
  index = i;
  document.getElementById("updateBtn").style.display = "block";
  document.getElementById("createBtn").style.display = "none";
  var seletedUser = users[i];
  for (a in seletedUser) {
    document.getElementById(a).value = seletedUser[a];
  }
}

function updateUser() {
  var user = {
    fname: "",
    lname: "",
    email: "",
  };
  for (a in user) {
    user[a] = document.getElementById(a).value;
  }
  users[index] = user;
  displayUsers();
  clearData(user);
  document.getElementById("updateBtn").style.display = "none";
  document.getElementById("createBtn").style.display = "block";
}
