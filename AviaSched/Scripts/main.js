$(document).ready(function () {
    $("[data-value]").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top - 40
        }, 1000);
    });
});
var lang = 'en';
function LanguageChange(lang) {
    document.location = lang + ".index.html";
    localStorage.setItem('SiteLanguage', lang);
}   

function nextVisit() {
    if (localStore.getItem('SiteLanguage')) {
        var savedLang = localStorage.getItem('SiteLanguage');
        document.location = savedLang + ".index.html";
    } else {
        document.location = "en.index.html";
    }
}