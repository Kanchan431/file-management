# File Management API

This API allows users to perform file management operations such as uploading, listing, and deleting files.
## Features

- **File Upload:** Users can upload file locally.
- **File Listing:** Users can list all uploaded files.
- **File Deletion:** Users can delete specific file.

## Technologies Used

- **Node.js:** Backend JavaScript runtime environment.
- **Express.js:** Web framework for Node.js used to create the API endpoints.
- **Multer:** Middleware for handling file uploads.
- **MySQL:** Database management system used for storing file information.

## Installation

1. **Clone the Repository:**

   ```
   git clone https://github.com/Kanchan431/file-management.git
   ```

2. **Install Dependencies:**

   ```
   cd file-management
   npm install
   ```

3. **Database Setup:**

   - Create a MySQL database and configure the connection settings in `config/db.js`.
 
4. **Run the Application:**

   ```
   npm start
   ```

   The API will be running at `http://localhost:3000`.

## API Endpoints

### File Upload

- **Endpoint:** `/upload`
- **Method:** `POST`
- **Payload:** Form-data with a single file field named `file`
- **Response:** JSON object with status, msg, and data fields.
- **Screenshots:** 
![image](https://github.com/Kanchan431/file-management/assets/66299227/2cea1a67-f987-4cca-9114-ad2b3fa1e28b)
![image](https://github.com/Kanchan431/file-management/assets/66299227/0a84e4ac-ed99-4d6c-9ac4-ca102c3f2506)


### List Files

- **Endpoint:** `/files`
- **Method:** `GET`
- **Response:** JSON object with status, msg, and data fields containing an array of files.
- **Screenshots:**
![image](https://github.com/Kanchan431/file-management/assets/66299227/91996570-880d-4a75-b1e4-3d273fb60b3e)


### Delete File

- **Endpoint:** `/files/:id`
- **Method:** `DELETE`
- **Response:** JSON object with status and msg fields.
- **Screenshots:**
![image](https://github.com/Kanchan431/file-management/assets/66299227/be4ec3fa-06aa-4c59-9710-a4a722bb53c7)
![image](https://github.com/Kanchan431/file-management/assets/66299227/741d2079-3337-4163-a481-ac07fc121120)

