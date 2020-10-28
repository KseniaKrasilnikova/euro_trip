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

// Модальное окно об отправке формы
var popup = document.querySelector(".popup");
var overlay = document.querySelector(".popup-overlay");
var popupCLoseBtn = popup.querySelector(".success__close");
var formSubmitBtn = document.querySelector(".form__btn");

formSubmitBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup__show");
    overlay.classList.add("popup-overlay__show");
});

var closePopup = function (evt) {
    if (evt.button === 0 || evt.key === 'Escape') {
        popup.classList.remove("popup__show");
        overlay.classList.remove("popup-overlay__show");
    }
};

document.addEventListener('keydown', closePopup, true);
popupCLoseBtn.addEventListener('mousedown', closePopup, true);
document.querySelector(".popup-overlay").addEventListener('mousedown', closePopup, true);
