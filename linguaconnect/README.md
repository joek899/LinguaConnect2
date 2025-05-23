# LinguaConnect

A collaborative, open-source multilingual dictionary platform.

## Features

- Search for words in multiple languages
- Add new words, definitions, and translations
- Community-driven and easy to extend

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
```bash
cd Projects/linguaconnect/backend
npm install
npm run dev
```

### Frontend
Open `frontend/index.html` in your browser.

### Add Sample Data
You can use MongoDB Compass or a REST client (like Postman) to add entries via the POST `/api/dictionary` endpoint.

## API
- `GET /api/dictionary/search?q=hello&language=en`
- `POST /api/dictionary` (see Entry.js for schema)

---

## Deploying on a VPS

### 1. Prepare Your VPS
- **Update your system:**
  ```bash
  sudo apt update && sudo apt upgrade -y
  ```
- **Install Node.js and npm:**
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt install -y nodejs
  ```
- **Install MongoDB:**
  ```bash
  sudo apt install -y mongodb
  sudo systemctl start mongodb
  sudo systemctl enable mongodb
  ```
- **(Optional) Install Git:**
  ```bash
  sudo apt install -y git
  ```

### 2. Upload Your Project
- **Option 1: Clone from GitHub**
  ```bash
  git clone https://github.com/yourusername/linguaconnect.git
  cd linguaconnect/backend
  ```
- **Option 2: Upload via SFTP/FTP**
  - Use an SFTP client (like FileZilla) to upload your project files to your VPS.

### 3. Configure Environment Variables
- In `linguaconnect/backend`, create a `.env` file:
  ```
  MONGODB_URI=mongodb://localhost:27017/linguaconnect
  PORT=5000
  ```

### 4. Install Dependencies and Start Backend
```bash
cd linguaconnect/backend
npm install
npm run dev   # or npm start for production
```

### 5. Serve the Frontend
- **Option A: Use a Simple Static Server**
  ```bash
  cd ../frontend
  npx serve .
  ```
- **Option B: Use Nginx or Apache (Recommended for Production)**
  - Install Nginx:
    ```bash
    sudo apt install -y nginx
    ```
  - Copy your `frontend` folder contents to `/var/www/html/` or configure a new site in `/etc/nginx/sites-available/`.
  - Restart Nginx:
    ```bash
    sudo systemctl restart nginx
    ```

### 6. Open Firewall Ports
```bash
sudo ufw allow 80
sudo ufw allow 5000
sudo ufw enable
```

### 7. Access Your Site
- Visit `http://your-vps-ip/` for the frontend.
- The frontend will communicate with the backend at `http://your-vps-ip:5000`.
- **Tip:** Edit your frontend's fetch URLs to use your VPS's public IP or domain instead of `localhost`.

### 8. (Optional) Use PM2 for Backend Process Management
```bash
sudo npm install -g pm2
pm2 start server.js --name linguaconnect
pm2 save
pm2 startup
```

### 9. (Optional) Use a Domain Name
- Point your domain's DNS to your VPS IP.
- Update Nginx config to use your domain.

### 10. Security
- Set up HTTPS (Let's Encrypt).
- Keep your system and dependencies updated. 