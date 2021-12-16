## GoIT Node.js

### Контакт:

#### GET /api/contacts - Получить информацию о всех контактах пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Возвращает массив всех контактов
}

```

#### GET /api/contacts/{id} - Получить информацию о контакте пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.<br/>
id - идентификатор контакта пользователя.

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Возвращает массив всех контактов
}

# Неуспешный ответ
Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```

#### POST /api/contacts - Создать новый контакт пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.<br/>

```shell

Content-Type: application/json
RequestBody: {
    "name": "Test",
    "email": "test@mail.com",
    "phone": "0505555555"
}

```

```shell

# Успешный ответ
Status: 201 OK
Content-Type: application/json
ResponseBody: {
  Возвращает массив всех контактов
}

# Неуспешный ответ
Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```

#### DELETE /api/contacts/{id} - Удалить контакт пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.<br/>
id - идентификатор контакта пользователя.

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "message": "contact deleted"
}

# Неуспешный ответ
Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```

#### PUT /api/contacts/{id} - Обновить контакт пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.<br/>
id - идентификатор контакта пользователя.

```shell

Content-Type: application/json
RequestBody: {
    "name": "Test",
    "email": "test@mail.com",
    "phone": "0505555555"
}

```

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Обновленный объект контакта
}

# Неуспешный ответ
Status: 400 BadRequest
Content-Type: application/json
ResponseBody: {
  "message": "missing fields"
}

Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```

#### PATCH /api/contacts/{contactId}/favorite - Обновить статус favorite контакту пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.<br/>
id - идентификатор контакта пользователя.

```shell

Content-Type: application/json
RequestBody: {
    "favorite": true,
}

```

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "contact deleted"
}

# Неуспешный ответ
Status: 400 BadRequest
Content-Type: application/json
ResponseBody: {
  "message": "missing fields"
}

Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```

### Пользователь:

#### POST /users/signup - Зарегистрировать пользователя.

#### POST /users/login - Залогинить пользователя.

#### GET /users/logout - Разлогинить пользователя.

#### GET /users/current - Получить данные пользователя.

#### PATCH /users/avatars - Изменить аватар пользователя.

#### GET /auth/verify/{verificationToken} - Верификация пользователя по email.

#### POST /users/verify/ - Повторная отправка верификации на почту.

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими исправлениями простых ошибок
