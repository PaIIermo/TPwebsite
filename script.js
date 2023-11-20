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

addNewNote("25. September 2023", "assets/1_25-9-2023.pdf");
addNewNote("2. Október 2023", "assets/2_2-10-2023.pdf");
addNewNote("9. Október 2023", "assets/3_9-10-2023.pdf");
addNewNote("16. Október 2023", "assets/4_16-10-2023.pdf");
addNewNote("23. Október 2023", "assets/5_23-10-2023.pdf");
addNewNote("30. Október 2023", "assets/6_30-10-2023.pdf");
addNewNote("6. November 2023", "assets/7_6-11-2023.pdf");
addNewNote("13. November 2023", "assets/8_13-11-2023.pdf");
