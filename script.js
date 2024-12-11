// Тексты для мультиязычности
const texts = {
    ru: {
        title: "Пиксо",
        name: "Пиксо",
        news: "Новости",
        searchPlaceholder: "Поиск...",
        mainTitle: "Главная новость дня",
        about: "О нас",
        contacts: "Контакты",
        privacy: "Политика конфиденциальности",
        videoPath: "videos/russian/main-news.mp4", // Путь к видео для русской версии
    },
    en: {
        title: "Pikso",
        name: "Pikso",
        news: "News",
        searchPlaceholder: "Search...",
        mainTitle: "Main News of the Day",
        about: "About Us",
        contacts: "Contacts",
        privacy: "Privacy Policy",
        videoPath: "videos/english/main-news.mp4", // Путь к видео для английской версии
    },
    ar: {
        title: "بيكسو",
        name: "بيكسو",
        news: "الأخبار",
        searchPlaceholder: "بحث...",
        mainTitle: "أهم الأخبار لهذا اليوم",
        about: "معلومات عنا",
        contacts: "تواصل معنا",
        privacy: "سياسة الخصوصية",
        videoPath: "videos/arabic/main-news.mp4", // Путь к видео для арабской версии
    }
};

// Элементы для изменения текста
const elements = {
    title: document.title,
    name: document.getElementById("logo"),
    newsLink: document.getElementById("news-link"),
    searchPlaceholder: document.getElementById("search-placeholder"),
    mainTitle: document.getElementById("main-title"),
    aboutLink: document.getElementById("about-link"),
    contactsLink: document.getElementById("contacts-link"),
    privacyLink: document.getElementById("privacy-link"),
    video: document.getElementById("main-video"), // Элемент для видео
};

// Функция для смены языка
function switchLanguage(lang) {
    const selectedTexts = texts[lang];

    document.title = selectedTexts.title; // Изменить заголовок страницы
    elements.name.textContent = selectedTexts.name; // Логотип текст
    elements.newsLink.textContent = selectedTexts.news; // Ссылка Новости
    elements.searchPlaceholder.placeholder = selectedTexts.searchPlaceholder; // Placeholder поиска
    elements.mainTitle.textContent = selectedTexts.mainTitle; // Главная новость
    elements.aboutLink.textContent = selectedTexts.about; // Ссылка "О нас"
    elements.contactsLink.textContent = selectedTexts.contacts; // Ссылка "Контакты"
    elements.privacyLink.textContent = selectedTexts.privacy; // Ссылка "Политика конфиденциальности"

    // Изменение видео
    elements.video.setAttribute("src", selectedTexts.videoPath);
}

// Обработчики кнопок смены языка
document.getElementById("lang-ru").addEventListener("click", () => switchLanguage("ru"));
document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("lang-ar").addEventListener("click", () => switchLanguage("ar"));
