// JSON object
const student = {
    name: "Arun Kumar",
    roll: "21CS045",
    department: "Computer Science Engineering",
};

// Creating card container
const card = document.createElement("div");
card.className = "card";

// Profile image
const img = document.createElement("img");
img.src = "profile.jpg";      // Make sure profile.jpg is in same folder
img.className = "image";
img.alt = "Student Profile";

// Name
const name = document.createElement("h2");
name.textContent = student.name;

// Roll No
const roll = document.createElement("p");
roll.innerHTML = `<b>Roll No:</b> ${student.roll}`;

// Department
const dept = document.createElement("p");
dept.innerHTML = `<b>Department:</b> ${student.department}`;

// Append all elements into card
card.appendChild(img);
card.appendChild(name);
card.appendChild(roll);
card.appendChild(dept);

// Insert into root div
document.getElementById("root").appendChild(card);
