# MongoDB CRUD Operations with Node.js

> A comprehensive example demonstrating MongoDB CRUD operations using Node.js and Mongoose

[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.0+-brightgreen.svg)](https://mongodb.com)
[![Mongoose](https://img.shields.io/badge/Mongoose-5.9+-blue.svg)](https://mongoosejs.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🚀 Overview

This Node.js application demonstrates complete CRUD (Create, Read, Update, Delete) operations using MongoDB and Mongoose ODM. It provides practical examples for database interaction patterns commonly used in modern web applications.

## ✨ Features

- **Complete CRUD Operations**: Create, Read, Update, and Delete users
- **Mongoose ODM**: Object Document Mapping with schema validation
- **Environment Configuration**: Secure database connection management
- **Batch Operations**: Support for inserting multiple documents
- **Error Handling**: Comprehensive error management
- **Clean Architecture**: Modular code structure

## 🛠️ Prerequisites

- Node.js 14 or higher
- MongoDB 4.0 or higher (local or cloud instance)
- npm or yarn package manager

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crud-mongodb-nodejs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🗄️ MongoDB Setup

### Local Installation

**Ubuntu/Debian:**
```bash
# Install MongoDB
sudo apt-get install mongodb

# Check status
sudo systemctl status mongodb

# Access MongoDB shell
sudo mongo
```

**MongoDB Shell Commands:**
- [MongoDB Shell Reference](https://docs.mongodb.com/manual/reference/mongo-shell/)

**Uninstall (if needed):**
```bash
sudo systemctl stop mongodb
sudo apt purge mongodb
sudo apt autoremove
```

### Cloud Alternative

Consider using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-hosted solution.

## ⚙️ Configuration

Create or edit the `.env` file in the project root:

```env
# MongoDB Connection String
MONGO_URI='mongodb://127.0.0.1/testdb'

# For MongoDB Atlas (cloud):
# MONGO_URI='mongodb+srv://username:password@cluster.mongodb.net/testdb'
```

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost/testdb` |

## 🎯 Usage

### Available Commands

**Create a single user:**
```bash
node create.js
```

**Read all users:**
```bash
node read.js
```

**Update user data:**
```bash
node update.js
```

**Delete user:**
```bash
node delete.js
```

### Data Schema

The application uses the following user schema:

```javascript
{
  email: String (required),
  firstName: String,
  lastName: String,
  age: Number
}
```

### Example Operations

**Creating Users:**
```javascript
// Single user
const user = new User({
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
  age: 30
});

// Multiple users (batch insert)
const users = [
  {email: "user1@test.com", firstName: "User", lastName: "One", age: 25},
  {email: "user2@test.com", firstName: "User", lastName: "Two", age: 28}
];
```

## 🏗️ Architecture

### Project Structure

```
crud-mongodb-nodejs/
├── create.js         # User creation operations
├── read.js          # User retrieval operations
├── update.js        # User modification operations
├── delete.js        # User deletion operations
├── package.json     # Project dependencies
├── .env            # Environment configuration
└── README.md       # This documentation
```

### Core Dependencies

```json
{
  "mongoose": "^5.9.23",    // MongoDB ODM
  "dotenv": "^8.2.0"        // Environment variables
}
```

### Development Dependencies

```json
{
  "nodemon": "^2.0.4"       // Development server with auto-reload
}
```

## 📚 Learning Resources

- **MongoDB Documentation**: [MongoDB Manual](https://docs.mongodb.com/manual/)
- **Mongoose Guide**: [Mongoose Documentation](https://mongoosejs.com/docs/)
- **Node.js MongoDB Driver**: [Official Driver](https://mongodb.github.io/node-mongodb-native/)

## 📄 License

This project is available under the MIT License. See LICENSE file for details.
