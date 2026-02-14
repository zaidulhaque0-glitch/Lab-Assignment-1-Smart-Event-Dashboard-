const title = document.getElementById("title");
const date = document.getElementById("date");
const category = document.getElementById("category");
const desc = document.getElementById("desc");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const msg = document.getElementById("msg");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");


let events = [];
let editIndex = null;

function renderEvents() {
    list.innerHTML = "";

    if (events.length === 0) {
        msg.style.display = "block";
        return;
    }

    msg.style.display = "none";

    events.forEach((e, i) => {
        const div = document.createElement("div");
        div.className = "eachList";

        div.innerHTML = `
            <b>${e.title}</b><br>
            ${e.date} | ${e.category}<br>
            ${e.desc}<br>
            <button onclick="deleteEvent(${i})">Delete</button>
        `;

        list.appendChild(div);
    });
}

addBtn.onclick = function () {
    if (title.value === "" || date.value === "") {
        alert("Please fill required fields");
        return;
    }

    events.push({
        title: title.value,
        date: date.value,
        category: category.value,
        desc: desc.value
    });

    title.value = "";
    date.value = "";
    desc.value = "";

    renderEvents();
};

function deleteEvent(i) {
    events.splice(i, 1);
    renderEvents();
}

clearBtn.onclick = function () {
    events = [];
    renderEvents();
};

sampleBtn.onclick = function () {
    events.push(
        { title: "Tech Conference", date: "2026-03-12", category: "Conference", desc: "AI & Web" },
        { title: "Team Meeting", date: "2026-03-15", category: "Meeting", desc: "Project Review" }
    );
    renderEvents();
};