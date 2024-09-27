﻿# The Wardrobe

## About

This repository contains the source code for "The Wardrobe," an e-commerce web application designed for a seamless online shopping experience. The project is currently **under heavy development,** and many features are yet to be implemented. 

**Note:** This README is intended for developers working on the project. 

## Current Features

- **Basic Front-End Structure:** A functional front-end skeleton with HTML, CSS, and minimal JavaScript is in place.
- **Landing Page:**  The home page showcases the brand, featured products, and collections.
- **Static Content Pages:**  Includes an "About Us" and "Contact Us" page.
- **Login Page:** A basic login page with a form is implemented.
- **Signup page:** A basic signup page with a form is implemented 
- **Shopping page:** A general shopping page is implemented
- **Cart page:** An static cart page is implemented
- **Checkout page:** An static Checkout page is implemented
- **Mens collection page:** An static Mens collection page with some JavaScript is implemented 
- **Womens collection page:** An static Womens collection page  with some JavaScript is implemented
- **Accessories collection page:** An static Accessories collection page with some JavaScript is implemented
- **Wearables Collection page:** An static Wearables Collection pag with some JavaScript is implemented
- **Collection page:** An partially dynamic collection page is implemented
- **Submit Email page:** An static Submit Email page is implemented with some JavaScript, for reset password process
- **Verify OTP page:** An static Verify OTP page is implemented with some JavaScript, for reset password process
- **Reset Password page:** An static Reset Password page is implemented with some JavaScript, for reset password process
- **Node.js Server:** A simple server using Express.js serves static files and handles routing.


## Technologies Used

- **HTML**
- **CSS**
- **Tailwind CSS**
- **JavaScript**
- **Node.js** 
- **Express.js** 

## Project Setup (For Developers)

1. **Clone the Repository:** 
   ```bash
   git clone https://github.com/GitCoder052023/The-Wardrobe.git
   ```

2. **Navigate to Project Directory:**
   ```bash
   cd the-wardrobe 
   ```

3. **Install Dependencies:**
   ```bash
   npm i
   ```

4. **Run the Server:**
   ```bash
   npm run start
   ```

5. **Access the Application:**  Open your web browser and go to `http://localhost:3000`.

## System Architecture

```bash
The-Wardrobe
|   .gitignore
|   CODE_OF_CONDUCT.md
|   CONTRIBUTING.md
|   package-lock.json
|   package.json
|   README.md
\---src
    |   app.js
    |
    +---routes
    |       auth.js
    |       cart.js
    |       Collection.js
    |       info.js
    |       main.js
    |       shop.js
    |
    +---static
    |   +---Assets
    |   |   ---img
    |   |
    |   |   ---Videos
    |   +---CSS
    |   |   |   LandingPage.css
    |   |   |
    |   |   +---Auth
    |   |   |       login.css
    |   |   |       signup.css
    |   |   |
    |   |   +---cart
    |   |   |       cart.css
    |   |   |       checkout.css
    |   |   |
    |   |   +---info
    |   |   |       About.css
    |   |   |       Contact.css
    |   |   |
    |   |   \---Shop
    |   |       |   Shop.css
    |   |       |
    |   |       \---Collection
    |   |           |   Collection.css
    |   |           |
    |   |           \---Categories
    |   |                   MensCollection.css
    |   |
    |   \---JS
    |       |   LandingPage.js
    |       |
    |       +---cart
    |       |       cart.js
    |       |       checkout.js
    |       |
    |       \---Shop
    |           |   Shop.js
    |           |
    |           \---Collection
    |                   Collection.js
    |
    \---templates
        |   LandingPage.html
        |
        +---Auth
        |       login.html
        |       signup.html
        |
        +---cart
        |       cart.html
        |       checkout.html
        |
        +---info
        |       About.html
        |       Contact.html
        |
        \---Shop
            |   Shop.html
            |
            \---Collections
                |   Collection.html
                |
                \---Categories
                        MenCollection.html
```

## Contributing

We welcome contributions! If you'd like to contribute to "The Wardrobe," please Checkout the [CONTRIBUTING](https://github.com/GitCoder052023/The-Wardrobe/blob/main/CONTRIBUTING.md) file, and follow the steps.

## License

**The Wardrobe** © 2024 by **GitCoder052023** is licensed under **CC BY-NC 4.0.**
  
To view a copy of this license, visit [https://creativecommons.org/licenses/by-nc/4.0/](https://creativecommons.org/licenses/by-nc/4.0/).
