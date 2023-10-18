function showTab(event, tabName) {
    
    const tabContents = document.querySelectorAll('.tabcontent');
    for (const tab of tabContents) {
        tab.classList.remove("display-flex")
    }

    const tabLinks = document.querySelectorAll('.tablinks');
    for (const link of tabLinks) {
        link.classList.remove('active');
    }
    event.currentTarget.classList.add('active');

    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add("display-flex")
}

window.onload = function() {
    document.querySelector('.tablinks').click();
}

function addNewNote(dateText, pdfPath) {
    if (pdfPath.trim() !== "") {
        var noteElement = document.createElement("div");
        noteElement.classList.add("text-node");

        var linkElement = document.createElement("a");
        linkElement.classList.add("asset");
        linkElement.href = pdfPath;
        linkElement.target = "_blank";

        var dateStrongElement = document.createElement("strong");
        dateStrongElement.textContent = "Dátum: " + dateText;

        linkElement.appendChild(dateStrongElement);

        noteElement.appendChild(linkElement);

        var container = document.getElementById("meetings");
        container.insertBefore(noteElement, container.firstChild);
    }
}

addNewNote("13th October 2023", "assets/Ponuka.pdf");
addNewNote("18th October 2023", "assets/Ponuka.pdf");

