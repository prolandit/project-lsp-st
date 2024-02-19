# Energi Mandiri API

## URL

_Server_

```
http://localhost:8080
```

---

## How to setup and run project

_run command bellow_

```
npm install
```

```
Turn on your server (ex: XAMPP, MySQL Server etc.)
```

```
npx sequelize-cli db:create
```

```
npx sequelize-cli db:migrate
```

```
npm run start
```

## RESTful endpoints

### API AUTH

### POST /api-em/auth/register

> Register User

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email" : "email",
  "fullName" : "fullName",
  "password" : "password",
  "passwordConfirmation" : "passwordConfirmation",
}
```

_Response (201)_

```
{
    "statusCode": 201,
    "message": "Account registration successfully!"
}
```

_Response (400 - Validation Error)_

```
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "child \"password\" fails because [\"password\" length must be at least 6 characters long]"
}
```

_Response (400 - User already registered)_

```
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "Email has been registered!"
}
```

---

### POST /api-em/auth/login

> Login user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email" : "email",
  "password" : "password"
}
```

_Response (200)_

```
{
    "statusCode": 200,
    "message": "Login successfully!",
    "token": "token"
}
```

_Response (400 - Validation Error)_

```
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "child \"password\" fails because [\"password\" length must be at least 6 characters long]"
}
```

_Response (400 - Bad Request Invalid Password)_

```
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "Wrong credentials!"
}
```
### GET /api-em/user/all

> Get All User

_Request Header_

```
{
  Authorization: 'Bearer <token>'
}
```

_Response (200)_

```
{
   "statusCode": 200,
    "message": "Get all user successfully!",
    "data": {
        "id": id,
        "email": "email",
        "password": "password",
        "fullName": "fullName",
        "role": "role",
        "ktpPassport": "ktpPassport",
        "met": met,
        "birthPlace": "birthPlace",
        "birthDate": "birthDate",
        "nationality": "nationality",
        "address": "address",
        "province": "province",
        "city": "city",
        "posCode": "posCode",
        "telp": "telp",
        "phone": "phone",
        "lastEducation": "lastEducation",
        "signUpload": "signUpload",
        "tuk": "tuk",
        "institution": "institution",
        "company": "company",
        "fund": "fund",
        "job": "job",
        "position": "position",
        "companyAddress": "companyAddress",
        "telpCompany": "telpCompany",
        "companyPosCode": "companyPosCode",
        "fax": "fax",
        "companyEmail": "companyEmail",
        "createdAt": "createdAt",
        "updatedAt": "updatedAtZ"
    }
}
```

_Response Invalid Token_

```
{
    "statusCode": 500,
    "error": "Internal Server Error",
    "message": "An internal server error occurred"
}
```

### GET /api-em/user/profile

> Get Profile User

_Request Header_

```
{
  Authorization: 'Bearer <token>'
}
```

_Response (200)_

```
{
   "statusCode": 200,
    "message": "Get profile user successfully!",
    "data": {
        "id": id,
        "email": "email",
        "password": "password",
        "fullName": "fullName",
        "role": "role",
        "ktpPassport": "ktpPassport",
        "met": met,
        "birthPlace": "birthPlace",
        "birthDate": "birthDate",
        "nationality": "nationality",
        "address": "address",
        "province": "province",
        "city": "city",
        "posCode": "posCode",
        "telp": "telp",
        "phone": "phone",
        "lastEducation": "lastEducation",
        "signUpload": "signUpload",
        "tuk": "tuk",
        "institution": "institution",
        "company": "company",
        "fund": "fund",
        "job": "job",
        "position": "position",
        "companyAddress": "companyAddress",
        "telpCompany": "telpCompany",
        "companyPosCode": "companyPosCode",
        "fax": "fax",
        "companyEmail": "companyEmail",
        "createdAt": "createdAt",
        "updatedAt": "updatedAtZ"
    }
}
```

_Response Invalid Token_

```
{
    "statusCode": 500,
    "error": "Internal Server Error",
    "message": "An internal server error occurred"
}
```

### PATCH /api-em/user/update

> Update Profile

_Request Header_

```
{
  Authorization: 'Bearer <token>'
}
```

_Request Body_

```
{
        "email": "email",
        "fullName": "fullName",
        "role": "role",
        "ktpPassport": "ktpPassport",
        "met": met,
        "birthPlace": "birthPlace",
        "birthDate": "birthDate",
        "nationality": "nationality",
        "address": "address",
        "province": "province",
        "city": "city",
        "posCode": "posCode",
        "telp": "telp",
        "phone": "phone",
        "lastEducation": "lastEducation",
        "signUpload": <signUpload>,
        "tuk": "tuk",
        "institution": "institution",
        "company": "company",
        "fund": "fund",
        "job": "job",
        "position": "position",
        "companyAddress": "companyAddress",
        "telpCompany": "telpCompany",
        "companyPosCode": "companyPosCode",
        "fax": "fax",
        "companyEmail": "companyEmail",
}
```

_Response (200)_

```
{
    "statusCode": 200,
    "message": "Profile update successfully!"
}
```

### PATCH /api-em/user/change-password

> Change Password User

_Request Header_

```
{
  Authorization: 'Bearer <token>'
}
```

_Request Body_

```
{
    "oldPassword": "oldPassword",
    "newPassword": "newPassword",
    "newPasswordConfirmation": "newPasswordConfirmation"
}
```

_Response (200)_

```
{
    "statusCode": 200,
    "message": "Password changed successfully!"
}
```

_Response (400 - New password not different)_

```
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "New Password Must be Different"
}
```

_Response (400 - Confirm password not same)_

```
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "child \"newPasswordConfirmation\" fails because [\"newPasswordConfirmation\" must be one of [ref:newPassword]]"
}
```
