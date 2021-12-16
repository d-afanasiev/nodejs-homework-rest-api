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
Status: 201 Created
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

```shell

Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}

```

```shell

# Успешный ответ
Status: 201 Created
Content-Type: application/json
ResponseBody: {
  "user": {
    "email": "example@example.com",
    "subscription": "starter"
  }
}

# Неуспешный ответ
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>

Status: 409 Conflict
Content-Type: application/json
ResponseBody: {
  "message": "Email in use"
}

```

#### POST /users/login - Залогинить пользователя.

```shell

Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}

```

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "token": "exampletoken",
  "user": {
    "email": "example@example.com",
    "subscription": "starter"
  }
}

# Неуспешный ответ
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>

Status: 401 Unauthorized
ResponseBody: {
  "message": "Email or password is wrong"
}

```

#### GET /users/logout - Разлогинить пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.

```shell

# Успешный ответ
Status: 204 No Content

# Неуспешный ответ
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}

```

#### GET /users/current - Получить данные пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "email": "example@example.com",
  "subscription": "starter"
}

# Неуспешный ответ
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}

```

#### PATCH /users/avatars - Изменить аватар пользователя.

##### Parameters:

Authorization - Токен выданный текущему пользователю.

```shell

Content-Type: application/json
RequestBody: {
  "avatarURL": загруженный файл
}

```

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "avatarURL": "тут будет ссылка на изображение"
}

# Неуспешный ответ
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}

```

#### GET /auth/verify/{verificationToken} - Верификация пользователя по email.

##### Parameters:

verificationToken - Токен верификации отправленный на почту.

```shell

Content-Type: application/json
RequestBody: {
  "avatarURL": загруженный файл
}

```

```shell

# Успешный ответ
Status: 200 OK
ResponseBody: {
  message: 'Verification successful',
}

# Неуспешный ответ
Status: 404 Not Found
ResponseBody: {
  message: 'User not found'
}

```

#### POST /users/verify/ - Повторная отправка верификации на почту.

```shell

Content-Type: application/json
RequestBody: {
  "email": "example@example.com"
}

```

```shell

# Успешный ответ
Status: 200 Ok
Content-Type: application/json
ResponseBody: {
  "message": "Verification email sent"
}

# Неуспешный ответ
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>

Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  message: "Verification has already been passed"
}

```

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими исправлениями простых ошибок
