# MEAN Authentication System with JWT
A full-stack authentication system built with the MEAN stack (MongoDB, Express.js, Angular, and Node.js) featuring JWT-based authentication, role management, and protected routes.
## Features
User Authentication

- Registration with name, email, and password

  - Login with email and password

  - JWT-based session management

  - Password hashing with bcrypt

- Protected Routes

  - Frontend route guards

  - Backend middleware protection

  - Role-based authorization (user/admin)

- Modern UI

  - Angular Material components

  - Responsive design

  - Form validations

  - Success/error notifications

- Technologies Used
  - Frontend: Angular 19+, Angular Material

  - Backend: Node.js, Express.js

  - Database: MongoDB (with Mongoose ODM)

  - Authentication: JSON Web Tokens (JWT)

  - Security: bcrypt password hashing

- Prerequisites
Before you begin, ensure you have met the following requirements:

  - Node.js (v22+ recommended)

  - Angular CLI (v19+)

  - MongoDB (local instance or cloud connection)

  - Git

## Installation
1. Clone the repository
```bash
git clone https://github.com/your-username/mean-auth-system.git
cd mean-auth-system
```

2. Set up the backend
```bash
cd backend
npm install
```

3. Configure environment variables
Create a `.env` file in the `backend` folder:
```bash
MONGO_URI=mongodb://localhost:27017/mean-auth
JWT_SECRET=your_very_secure_secret
JWT_EXPIRE=30d
PORT=5000
NODE_ENV=development
```

4. Set up the frontend
```bash
cd ../frontend
npm install
```

## Running the Application
1. Start the backend server
```bash
cd backend
npm start
```

2. Start the Angular development server
```bash
cd ../frontend
ng serve
```

3. Access the application
Open your browser and navigate to:
```
http://localhost:4200
```

## Project Structure
```
mean-auth-system/
├── backend/                  # Node.js/Express backend
│   ├── config/              # Database configuration
│   ├── middlewares/         # Authentication middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── .env                 # Environment variables
│   └── server.js            # Express server entry point
│
├── frontend/                # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/  # Angular components
│   │   │   ├── guards/      # Route guards
│   │   │   ├── interceptors/# HTTP interceptors
│   │   │   ├── models/      # TypeScript interfaces
│   │   │   ├── services/    # Angular services
│   │   │   └── *.module.ts # Angular modules
│   │   └── assets/          # Static assets
│   └── angular.json         # Angular configuration
│
├── LICENSE
└── README.md
```

## API Endpoints
| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST |	/api/auth/signup |	Register a new user |	Public |
| POST |	/api/auth/login |	Authenticate user and return JWT |	Public |
| GET |	/api/auth/welcome |	Get welcome message for auth user |	Private |

## Contributing
Contributions are welcome! Please follow these steps:

  - 1. Fork the project

  - 2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

  - 3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

  - 4. Push to the branch (`git push origin feature/AmazingFeature`)

  - 5. Open a Pull Request

License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
  - MEAN stack documentation

  - JWT.io for authentication standards

  - Angular Material for UI components

# Happy Coding! 🚀
