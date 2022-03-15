fetch("http://localhost:3000/users").then((res) => res.json()).then((data) => console.log(data))

const url = "http://localhost:3000/users"
async function getAllUser() {
   const response = await fetch("http://localhost:3000/users");
   const data = await response.json();
   console.log(data);
}
// getAllUser()

async function getUser(userId) {
    const response = await fetch(`${url}/${userId}`);
    const data = await response.json();
    console.log(data);
}

// getAllUser(2);

let user = {
    firstName: "John",
    lastName: "Doe",
    username: "JohnDoe",
    email: "johndoe@gmail.com",
    gender: "Male",
};
async function createUser(userInfo) {
    const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(userInfo),
        headers: {
            "content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log(data);
}
createUser(user);
const data = {
    email: "johndoe@gmail.com",
}
async function updateUser(userId, userData) {
    const response = await fetch(`${url}/${userId}`, {
        method: "PATCH", 
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log(data);
}
updateUser(51, data);

async function deleteUser(userId) {
    const response = await fetch(`${url}/${userId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
}


