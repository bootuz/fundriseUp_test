# Тестовое задание для Fundrise Up

### Запуск тестов в Github Actions
1. Открываем [репозиторий](https://github.com/bootuz/fundriseUp_test)
2. Заходим во вкладку Actions
3. Пеходим в workflow `Tests`
4. И нажимаем кнопку `Run workflow`
![Картинка](/images/CICD%20.png)
Репорт о прогоне можно посмотреть [здесь](https://bootuz.github.io/fundriseUp_test/). Появление нового отчета требует немного времени, потому что после каждого прогона запускается джоба с деплоем результатов на github pages. 

### Запуск тестов локально
1. Скачиваем Node.JS [отсюда](https://nodejs.org/en/download/).
2. В терминале клонируем репозиторий `git clone https://github.com/bootuz/fundriseUp_test.git`
3. Переходим в папку с реопзиторием `cd $PWD/fundriseUp_test`
4. Устанавливаем зависимости командой `npm install package-lock.json`
5. Запускаем тесты `npx playwright test`
Отчеты после прогона откроются автоматически. 



