fetch('https://jsonplaceholder.typicode.com/comments')  
    .then(response => response.json())
    .then((json) => {
        json.forEach((json) =>{
            
            let card = document.createElement("div");
            let id = document.createElement('h2');
            let name = document.createElement('h3');
            let email = document.createElement('p');
            let body = document.createElement('p');

            id.textContent = `ID: ${json.id}`;
            name.textContent = `Name: ${json.name}`;
            email.textContent = `Email: ${json.email}`;
            body.textContent = `Body: ${json.body}`;
            card.append(id, name,email, body);
            card.style.border = "2px solid black";
            card.style.width = "300px";
            card.style.padding = "15px";

            document.querySelector(".container").appendChild(card);


            console.log(json);
            
        });
    });
