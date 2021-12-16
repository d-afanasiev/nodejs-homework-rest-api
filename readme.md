## GoIT Node.js

Контакт:

GET /api/contacts - Получить информацию о всех контактах пользователя.

GET /api/contacts/{id} - Получить информацию о контакте пользователя.

POST /api/contacts - Создать новый контакт пользователя.

DELETE /api/contacts/{id} - Удалить контакт пользователя.

PUT /api/contacts/{id} - Обновить контакт пользователя.

PATCH /api/contacts/{contactId}/favorite - Обновить статус favorite контакту пользователя.

Пользователь:

POST /users/signup - Зарегестрировать пользователя.

POST /users/login - Залогинить пользователя.

GET /users/logout - Разлогинить пользователя.

GET /users/current - Получить данные пользователя.

PATCH /users/avatars - Изменить аватар пользователя.

GET /auth/verify/{verificationToken} - Верификация пользователя по email.

POST /users/verify/ - Повторная отправка верификации на почту.

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими исправлениями простых ошибок
