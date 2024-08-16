# TryBookAI Component Replication Assignment

## Project Overview

This project is a submission for the front-end development assignment to replicate a feature or component from the website [TryBookAI.com](https://trybookai.com). The selected components are the **Navigation Bar** and the **Pricing Section** from the homepage. Additionally, a **Dark/Light Mode toggle** has been implemented as part of the assignment requirements.

## Features Implemented

1. **Navigation Bar:**
   - **Design Fidelity:** The navbar closely replicates the original design, including logo placement, navigation links, and a login/signup button.
   - **Responsive Layout:** The navbar is fully responsive and adapts seamlessly to different screen sizes, utilizing a mobile-first approach.
   - **Dark/Light Mode:** Integrated a theme toggle button that switches between light and dark modes, using React Context API for state management.

2. **Pricing Section:**
   - **Design Fidelity:** The pricing section closely mirrors the original layout with a table showing API pricing details for different models.
   - **Responsive Layout:** The pricing table is responsive, adjusting for various screen sizes while maintaining readability and usability.
   - **Accessibility:** Implemented semantic HTML for the table structure, ensuring that the content is accessible to all users, including those using screen readers.

3. **Dark/Light Mode Toggle:**
   - **Theme Switching:** The light and dark mode toggle is integrated into the application using React's Context API and `useReducer` hook for managing theme state.
   - **LocalStorage Persistence:** The selected theme persists across page reloads using localStorage, defaulting to the system's preferred color scheme if no preference is found.

4. **Sticky API Navigation:**

    - **Sticky Navbar:** The API documentation page features a sticky navigation bar that remains visible as users scroll through the different sections of the documentation, improving usability.
    - **Anchor Links:** Smooth scrolling is implemented to navigate between different sections like "Overview", "Authentication", "Pricing", and "Tutorials".

5. **User Interface:**

    - **Hero Section:** The homepage includes a visually appealing hero section with a call to action for users to get started or access the API.
    - **Gradient Buttons and Hover Effects:** Interactive elements like buttons have gradient backgrounds and hover effects to enhance the visual appeal and engage users.

## Tools and Technologies Used

1. **React:**
   - Built the project using React functional components.
   - Used React Context API and `useReducer` to manage theme toggling between dark and light modes.

2. **Tailwind CSS:**
   - Utilized Tailwind CSS for rapid UI development, ensuring a responsive and modern design across all components.
   - Custom styling has been applied where necessary to meet the exact design requirements.

3. **React Router:**
   - Used for internal navigation between different sections (e.g., Home, API, Pricing) for a smooth and seamless user experience.

4. **JavaScript (ES6):**
   - Added interactivity for features like smooth scrolling to different sections, theme switching, and dynamic data rendering.

## How to Run the Project

### Prerequisites:
- **Node.js** and **npm** should be installed on your system.

### Installation:
1. **Clone the repository:**
   - git clone https://github.com/Ankita7238/bookai.git
2. **Navigate to the project directory:**
    - cd bookai
3. **Install dependencies:**
    - npm install
4. **Start the development server:**
    - npm run dev

