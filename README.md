**How to run this application locally**

Step 1: Create a env file like this in root directory
```
NODE_ENV = development
PORT = 5000
DATABASE_URL = your database url
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET = your access secret
JWT_REFRESH_SECRET = your refresh secret
JWT_ACCESS_EXPIRES_IN = set your access expires time
JWT_REFRESH_EXPIRES_IN = set your refresh expires time
CLOUDINARY_CLOUD_NAME = name
CLOUDINARY_API_SECRET = api secret
CLOUDINARY_API_KEY = api key
SUPER_MANAGER_PASSWORD= set manager default password
```

Step 2: Install all required dependencies
```
npm install
```

Step 3: Start your development server
```
npm run dev
```


Now your application is ready to run