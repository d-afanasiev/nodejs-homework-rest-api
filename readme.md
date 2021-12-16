## GoIT Node.js Course Template Homework

GET /api/contacts

GET /api/contacts/:id

POST /api/contacts

DELETE /api/contacts/:id

PUT /api/contacts/:id

PATCH /api/contacts/:contactId/favorite

POST /users/signup

POST /users/login

GET /users/logout

GET /users/current

PATCH /users/avatars

GET /auth/verify/:verificationToken

POST /users/verify/

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими исправлениями простых ошибок
