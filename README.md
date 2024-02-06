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
   git clone https://github.com/your_username/file-management-api.git
   ```

2. **Install Dependencies:**

   ```
   cd file-management-api
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

### List Files

- **Endpoint:** `/files`
- **Method:** `GET`
- **Response:** JSON object with status, msg, and data fields containing an array of files.

### Delete File

- **Endpoint:** `/files/:id`
- **Method:** `DELETE`
- **Response:** JSON object with status and msg fields.
