let SideLink = document.getElementById("Side-Link-Id"); // Selects the first (and presumably only) element with class "Side-Link"

function OpenSideLink() {
    SideLink.style.display = "block"; // Set display to block as a string
}

function CloseSideLink() {
    SideLink.style.display = "none"; // Assuming you want to hide it when the close button is clicked
}
