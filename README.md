# 🔢 Counter Application
This is a simple counter application made using create-vite-app and javascript. This application is a simple demonstration of how React is able to handle making complex UI changes at multiple places at the same time. 

## ✅ Lessons 
-   Utilizing hooks, particularly useState(), for state management within an application.
-   Gaining insights into React's internal processes, including its transformation of .jsx into valid HTML, CSS, and JavaScript.
-   Incorporating dynamic variable changes within static code snippets.

### 🚫 Mistakes I made 
- It's crucial to ensure that when employing an onClick() handler within a button element, the reference of the function intended to be called is passed, rather than the function itself. Otherwise, it may lead to infinite re-renders, as the functions would be immediately invoked upon each render, instead of triggering only upon the button's actual click event.

### 👀 The app
![The Application](./assets/Screenshot%202024-03-22%20at%203.40.10 AM.png)