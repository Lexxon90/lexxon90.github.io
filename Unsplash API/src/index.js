import "./css/style.css";
import Unsplash from 'unsplash-js';

// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
    // accesskey из настроек вашего приложения
    accessKey: "UaSusWVA_p5bK-ZG0Aj_KK-F3yYC8ZuXIxKKvj1Q6AA",
    // Application Secret из настроек вашего приложения
    secret: "1oWJZ2W4HqnkQ4bikZkeX9f8fALUbzCR2p4Oy7Fy04w",
    // Полный адрес страницы авторизации приложения (Redirect URI)
    // Важно: этот адрес обязательно должен быть указан в настройках приложения
    // на сайте Unsplash API/Developers
    callbackUrl: "https://lexxon90.github.io/Unsplash%20API/dist/"
   });

// Генерируем адрес страницы аутентификации на unsplash.com
// и указываем требуемые разрешения (permissions)
console.log(unsplash.accesskey)
const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
   ]);
   // Отправляем пользователя по этому адресу
//    location.assign(authenticationUrl);
console.log(authenticationUrl);

// Считываем GET-параметр code из URL
// www.example.com/auth?code=abcdef123456...
const code = location.search.split('code=')[1];

// Если код передан, отправляем запрос на получение токена
if (code) {
    unsplash.auth.userAuthentication(code)
    .then(res => res.json())
    .then(json => {
    // Сохраняем полученный токен
    unsplash.auth.setBearerToken(json.access_token);
    // Теперь можно сделать что-то от имени пользователя
    // Например, поставить лайк фотографии
    unsplash.photos.likePhoto("kBJEJqWNtNY");
    console.log (unsplash.auth);
    });
}