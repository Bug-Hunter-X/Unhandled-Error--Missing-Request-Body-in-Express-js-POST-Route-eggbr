# Express.js Unhandled Error: Missing Request Body

This repository demonstrates a common error in Express.js applications where the request body is not handled properly, leading to an unhandled error.  The application attempts to access `req.body` without checking for its existence, which fails if the request body is empty or malformed. This results in a server error (500) and prevents the application from handling the request gracefully.

The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version with robust error handling.