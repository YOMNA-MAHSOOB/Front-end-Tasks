function add_user(){
    let div = document.getElementById("output");
    let p = document.createElement("p");
    p.innerText = "User added!";
    div.appendChild(p); 
}

 
const users =[
     { name: "Yomna", email: "yomna@gmail.com" },
      { name: "Yara", email: "yara@yahoo.com" },
      { name: "Sara", email: "sara@hotmail.com" }
];

function search_user(event){
   event.preventDefault(); 
   const username= document.getElementById("name").value.trim().toLowerCase();
   const email= document.getElementById("email").value.trim().toLowerCase();
   const resultDiv = document.getElementById("result");
   if(username==="" || email ===""){
    resultDiv.innerText=""
    resultDiv.className=""
    return;
   }
   const found =users.find(user => user.name.toLowerCase() === username &&
        user.email.toLowerCase() === email );
    if (found){
        resultDiv.innerText="User Found!"
        resultDiv.className = "success"
    }
    else{
        resultDiv.innerText="User not Found!"
        resultDiv.className="fail"
    }
}



function editUser(event) {
   event.preventDefault(); 
  const username = document.getElementById("name").value.trim().toLowerCase();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  if (username === "" || email === "") {
    resultDiv.innerText = "";
    resultDiv.className = "";
    return;
  }

  const found = users.find(user =>
    user.name.toLowerCase() === username &&
    user.email.toLowerCase() === email
  );

  if (found) {
    resultDiv.innerText = "User found. Ready to edit!";
    resultDiv.className = "success";
  } else {
    resultDiv.innerText = "User not found for editing.";
    resultDiv.className = "fail";
  }
}


function deleteUser(event) {
  event.preventDefault(); 
  const username = document.getElementById("name").value.trim().toLowerCase();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  if (username === "" || email === "") {
    resultDiv.innerText = "";
    resultDiv.className = "";
    return;
  }

  const found = users.find(user =>
    user.name.toLowerCase() === username &&
    user.email.toLowerCase() === email
  );

  if (found) {
    resultDiv.innerText = "User found. Ready to delete!";
    resultDiv.className = "success";
  } else {
    resultDiv.innerText = "User not found for deletion.";
    resultDiv.className = "fail";
  }
}
