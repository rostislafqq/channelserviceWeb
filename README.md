для запуска проекта
npm i
npm start

о приложении :
придерживался чистых компoнент . логика происходить в контейнерных (nameContainer.jsx)
отрисовка карточек:
в App - запросы на сервер и первая сортировка массивов , затем данные отправляются в redux (store=>slices=>cardsSlice). в cardsSlice происходит "сжатие" масивов до 10 . затем переходим в components=>cards=>cardsContainer.jsx, с помощью хука useSelector достаем из редакса "сжатые" массивы , объеденяем в единый и отрисовываем его .
имитация авторизации:
в store=>slices=>authSlicе лежит состояние о текущей авторизованности (isAuth) . она используется в App(для роутинга) и components => autorization => autorizationContainer.jsx для перехода на ссылку '/cards' . переходим components => header => headerContainer.jsx . здесь достается состояние isAuth и при значении true отрисовывается картинка для разлогирования


использовал: redex-toolkit , axios , react-router-dom

![image](https://user-images.githubusercontent.com/97777490/188552792-e8cf1f15-5259-4abd-ae1e-d9dab0b328cc.png)
![image](https://user-images.githubusercontent.com/97777490/188552854-cbcfb44f-d956-40b2-a21e-74dc62bbe34b.png)

