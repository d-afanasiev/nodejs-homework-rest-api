## CONTACTS

### Contact:

#### GET /api/contacts - Get information about all contacts of a user.

##### Parameters:

Authorization - Token issued to the current user.

```shell

# Successful response
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Returns an array of all contacts
}

```

#### GET /api/contacts/{id} - Get user contact information.

##### Parameters:

Authorization - Token issued to the current user.<br/>
id - user contact id.

```shell

# Successful response
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Returns an array of all contacts
}

# Unsuccessful response
Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```

#### POST /api/contacts - Create a new user contact.

##### Parameters:

Authorization - Token issued to the current user.<br/>

```shell

Content-Type: application/json
RequestBody: {
    "name": "Test",
    "email": "test@mail.com",
    "phone": "0505555555"
}

```

```shell

# Successful response
Status: 201 Created
Content-Type: application/json
ResponseBody: {
  Returns an array of all contacts
}

# Unsuccessful response
Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```

#### DELETE /api/contacts/{id} - Delete user contact.

##### Parameters:

Authorization - Token issued to the current user.<br/>
id - user contact id.

```shell

# Successful response
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "message": "contact deleted"
}

# Unsuccessful response
Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```

#### PUT /api/contacts/{id} - Update user contact.

##### Parameters:

Authorization - Token issued to the current user.<br/>
id - user contact id.

```shell

Content-Type: application/json
RequestBody: {
    "name": "Test",
    "email": "test@mail.com",
    "phone": "0505555555"
}

```

```shell

# Successful response
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Updated contact object
}

# Unsuccessful response
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

#### PATCH /api/contacts/{contactId}/favorite - Update the favorite status of a user's contact.

##### Parameters:

Authorization - Token issued to the current user.<br/>
id - user contact id.

```shell

Content-Type: application/json
RequestBody: {
    "favorite": true,
}

```

```shell

# Successful response
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "contact deleted"
}

# Unsuccessful response
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

### User:

#### POST /users/signup - Register user.

```shell

Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}

```

```shell

# Successful response
Status: 201 Created
Content-Type: application/json
ResponseBody: {
  "user": {
    "email": "example@example.com",
    "subscription": "starter"
  }
}

# Unsuccessful response
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Error from Joi or another validation library>

Status: 409 Conflict
Content-Type: application/json
ResponseBody: {
  "message": "Email in use"
}

```

#### POST /users/login - Login user.

```shell

Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}

```

```shell

# Successful response
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "token": "exampletoken",
  "user": {
    "email": "example@example.com",
    "subscription": "starter"
  }
}

# Unsuccessful response
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Error from Joi or another validation library>

Status: 401 Unauthorized
ResponseBody: {
  "message": "Email or password is wrong"
}

```

#### GET /users/logout - Log out user.

##### Parameters:

Authorization - Token issued to the current user.

```shell

# Successful response
Status: 204 No Content

# Unsuccessful response
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}

```

#### GET /users/current - Get user data.

##### Parameters:

Authorization - Token issued to the current user.

```shell

# Successful response
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "email": "example@example.com",
  "subscription": "starter"
}

# Unsuccessful response
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}

```

#### PATCH /users/avatars - Change user avatar.

##### Parameters:

Authorization - Token issued to the current user.

```shell

Content-Type: application/json
RequestBody: {
  "avatarURL": uploaded file
}

```

```shell

# Successful response
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "avatarURL": "here is a link to the image"
}

# Unsuccessful response
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}

```

#### GET /auth/verify/{verificationToken} - User verification by email.

##### Parameters:

verificationToken - Verification token sent by email.

```shell

Content-Type: application/json
RequestBody: {
  "avatarURL": uploaded file
}

```

```shell

# Successful response
Status: 200 OK
ResponseBody: {
  message: 'Verification successful',
}

# Unsuccessful response
Status: 404 Not Found
ResponseBody: {
  message: 'User not found'
}

```

#### POST /users/verify/ - Resending verification email.

```shell

Content-Type: application/json
RequestBody: {
  "email": "example@example.com"
}

```

```shell

# Successful response
Status: 200 Ok
Content-Type: application/json
ResponseBody: {
  "message": "Verification email sent"
}

# Unsuccessful response
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Error from Joi or another validation library>

Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  message: "Verification has already been passed"
}

```

### Command:

- `npm start` &mdash; server start in mode production
- `npm run start:dev` &mdash; start server in development mode (development)
- `npm run lint` &mdash; run code review with eslint, must be done before each PR and fix all linter errors
- `npm lint:fix` &mdash; the same linter check, but with automatic fixes for simple errors
