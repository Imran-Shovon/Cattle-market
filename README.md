# 🐄 Cattle Market Management App

This is a simple web application for managing a local cattle market built using **Angular (Standalone Components)** and **JSON Server** as a mock backend. It allows users to:

- Login/Logout
- View all listed cattle
- Update cattle availability
- Add new cattle to the list

## 📦 Tech Stack

- [Angular](https://angular.io/) (Standalone Components)
- [Bootstrap](https://getbootstrap.com/) (for UI)
- [json-server](https://github.com/typicode/json-server) (mock backend)
- RxJS, Angular HttpClient, Reactive Forms

---

## 🚀 Getting Started

Follow the steps below to set up the project locally.

### ✅ Prerequisites

- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (v16+) (19 recommended)
- [Git](https://git-scm.com/)
- [json-server](https://github.com/typicode/json-server)

---

## 📁 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cattle-market-app.git
cd cattle-market-app

## install dependencies.
npm install

### 3. Start the mock backend (json-server)

npm install -g json-server

## Run json-server:
json-server --watch db.json --port 3000

## Start the Angular frontend
ng serve

## Mock Login Credentials
{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "password": "1234",
      "token": "fake-jwt-token"
    }
  ]
}

## To build the Angular app for production:
ng build --configuration production
```
