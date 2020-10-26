function openTab(evt, tabId) {
    document.getElementById(tabId).click();
}

function openCountry(evt, countryName) {
    var i, tabcontent, tablinks;

    // Получить все элементы с class="tab-content" и скрыть их
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Получить все элементы с class="tabs__links" и удалить class "active"
    tablinks = document.getElementsByClassName("tabs__links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tabs__links--active", "");
    }

    // Показать текущую вкладку и добавить "active" класс для кнопки, открывшей вкладку
    document.getElementById(countryName).style.display = "flex";
    evt.currentTarget.className += " tabs__links--active";
}

document.getElementsByClassName("tabs__links")[0].click();