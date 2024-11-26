// FOOTER
const chatIconH = document.getElementById('highlight-chat-icon');
const updateIconH = document.getElementById('highlight-updates-icon');
const groupIconH = document.getElementById('highlight-group-icon');
const callIconH = document.getElementById('highlight-call-icon');

let selected = "chats";

document.addEventListener("DOMContentLoaded", () => {
    // Set default active class to "Chats"
    document.getElementById(selected).classList.add("active");
});

function highlight(selectedItem) {
    // Get all nav items and remove the active class
    const navItems = document.querySelectorAll(".icon-highlight-box");
    navItems.forEach(item => item.classList.remove("active"));

    // Add active class to the selected item
    selectedItem.classList.add("active");

    selected = selectedItem.id;
    console.log("Selected:", selected);
}