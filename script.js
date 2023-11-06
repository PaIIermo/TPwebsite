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

addNewNote("25. September 2023", "assets/2.pdf");
addNewNote("2. November 2023", "assets/3.pdf");
addNewNote("9. November 2023", "assets/4.pdf");
addNewNote("16. November 2023", "assets/5.pdf");
addNewNote("23. November 2023", "assets/6.pdf");
addNewNote("30. November 2023", "assets/7.pdf");
