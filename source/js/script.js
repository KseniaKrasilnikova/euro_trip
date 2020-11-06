// табы
function openTab(evt, tabId) {
    document.getElementById(tabId).click();
}

document.getElementById("greeceTab").addEventListener("click", function (evt) {
    openCountry(evt, 'greece');
});

document.getElementById("albaniaTab").addEventListener("click", function (evt) {
    openCountry(evt, 'albania');
});

document.getElementById("macedoniaTab").addEventListener("click", function (evt) {
    openCountry(evt, 'macedonia');
});

document.getElementById("montenegroTab").addEventListener("click", function (evt) {
    openCountry(evt, 'montenegro');
});

document.getElementById("croatiaTab").addEventListener("click", function (evt) {
    openCountry(evt, 'croatia');
});

// ---- //
document.getElementById("greeceLink").addEventListener("click", function (evt) {
    openTab(evt, 'greeceTab');
});
document.getElementById("albaniaLink").addEventListener("click", function (evt) {
    openTab(evt, 'albaniaTab');
});
document.getElementById("macedoniaLink").addEventListener("click", function (evt) {
    openTab(evt, 'macedoniaTab');
});
document.getElementById("montenegroLink").addEventListener("click", function (evt) {
    openTab(evt, 'montenegroTab');
});
document.getElementById("croatiaLink").addEventListener("click", function (evt) {
    openTab(evt, 'croatiaTab');
});
// ---- //

function openCountry(evt, countryName) {
    // Получить все элементы с class="tab-content" и скрыть их
    var tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Получить все элементы с class="tabs__links" и удалить class "active"
    var tablinks = document.getElementsByClassName("tabs__links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tabs__links--active", "");
    }

    // Показать текущую вкладку и добавить "active" класс для кнопки, открывшей вкладку
    document.getElementById(countryName).style.display = "flex";
    evt.currentTarget.className += " tabs__links--active";
}

document.getElementsByClassName("tabs__links")[0].click();

// Модальное окно об отправке формы (.success)
var popupSuccess = document.querySelector(".success");
var overlaySuccess = document.querySelector(".overlay-success");
var popupCLoseBtn = popupSuccess.querySelector(".success__close");
var formSubmitBtn = document.querySelector(".form__btn");

formSubmitBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSuccess.classList.add("popup__show");
    overlaySuccess.classList.add("popup-overlay__show");
});

var closePopup = function (evt) {
    if (evt.button === 0 || evt.key === 'Escape') {
        popupSuccess.classList.remove("popup__show");
        overlaySuccess.classList.remove("popup-overlay__show");
    }
};

document.addEventListener('keydown', closePopup, true);
popupCLoseBtn.addEventListener('mousedown', closePopup, true);
overlaySuccess.addEventListener('mousedown', closePopup, true);

// Модальное окно Купить тур (.buy)
var popupBuy = document.querySelector(".buy");
var overlayBuy = document.querySelector(".overlay-buy");
var buyCLoseBtn = popupBuy.querySelector(".buy__close");

var openPopupBuy = function (evt) {
    evt.preventDefault();
    popupBuy.classList.add("popup__show");
    overlayBuy.classList.add("popup-overlay__show");
    document.getElementById("buy-phone").focus();
};

var closePopupBuy = function (evt) {
    if (evt.button === 0 || evt.key === 'Escape') {
        popupBuy.classList.remove("popup__show");
        overlayBuy.classList.remove("popup-overlay__show");
    }
};

document.addEventListener('keydown', closePopupBuy, true);
overlayBuy.addEventListener('mousedown', closePopupBuy, true);
buyCLoseBtn.addEventListener('mousedown', closePopupBuy, true);

var buyBtn = document.getElementsByClassName("popup-buy");
for (i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener('mousedown', openPopupBuy, true);
}

// localstorage
var buyForm = popupBuy.querySelector(".buy__form");
var onSubmit = function () {
    localStorage.setItem("buy-phone", document.getElementById("buy-phone").value);
    localStorage.setItem("buy-mail", document.getElementById("buy-mail").value);
};

buyForm.addEventListener('submit', onSubmit, true);

// Модальное окно об отправке формы (.buy)
var buySubmitBtn = popupBuy.querySelector(".buy__btn");

buySubmitBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopupBuy(evt);
    popupSuccess.classList.add("popup__show");
    overlaySuccess.classList.add("popup-overlay__show");
});
