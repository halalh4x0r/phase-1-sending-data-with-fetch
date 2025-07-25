function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => {
    // Test 2: Append the new ID to the DOM
    const newId = document.createElement("p");
    newId.textContent = `New ID: ${data.id}`;
    document.body.appendChild(newId);
  })
  .catch(error => {
    // Test 3: Handle the error and append message to the DOM
    const errorMsg = document.createElement("p");
    errorMsg.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorMsg);
  });
}
