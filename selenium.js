const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

// Инициализация драйвера браузера
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// Загрузка страницы
driver.get('https://www.example.com');

// Ожидание появления элемента на странице
const element = driver.wait(until.elementLocated(By.id('my-button')), 10000);

// Имитация клика на элемент
element.click();

// Закрытие браузера
driver.quit();