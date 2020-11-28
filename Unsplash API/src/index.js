import "./css/style.css";

// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
    // accesskey из настроек вашего приложения
    accesskey: "UaSusWVA_p5bK-ZG0Aj_KK-F3yYC8ZuXIxKKvj1Q6AA",
    // Application Secret из настроек вашего приложения
    secret: "1oWJZ2W4HqnkQ4bikZkeX9f8fALUbzCR2p4Oy7Fy04w",
    // Полный адрес страницы авторизации приложения (Redirect URI)
    // Важно: этот адрес обязательно должен быть указан в настройках приложения на сайте Unsplash API/Developers
   
    callbackUrl: "http://www.example.com/auth"
   });
   // Генерируем адрес страницы аутентификации на unsplash.com
   // и указываем требуемые разрешения (permissions)
   const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
   ]);
   // Отправляем пользователя по этому адресу
   location.assign(authenticationUrl);