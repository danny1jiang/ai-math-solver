# AI Math Solver

<br />
<div align="center">
  <a href="https://aimathsolver.netlify.app/">
    <img src="src/calculatorAndGear.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">AI Math Solver</h3>

  <p align="center">
    An AI powered math problem solver - solve almost any problem from any image with a few clicks.
    <br />
    <a href="https://aimathsolver.netlify.app/"><strong>Explore the demo »</strong></a>
    <br />
    <br />
  </p>
</div>

## About The Project

From word problems, to calculus, to even physics, the AI Math Solver has you covered. It is a website powered by Gemini AI and its code execution abilities allow it to solve problems from a variety of topics.

### How it Works:

-   Users upload an image containing math problems
-   Users select a problem from the image to solve
-   AI Math Solver prompts Gemini for a solution
-   Gemini comes up with a solution and writes code to perform calculations

### Built With

This project was built with React and Next.js.

-   [![Next][Next.js]][Next-url]
-   [![React][React.js]][React-url]

## Why I Built This

While LLMs like ChatGPT and Gemini already have math problem solving capabilities, their calculations are often inaccurate. To combat this, I used Gemini AI's math solving in tandem with code generation. This project improves upon Gemini AI's original math capabilities by incorporating code execution to improve the accuracy of its calculations.

## Getting Started

To set up this project locally, follow the following steps.

### Prerequisites

Here are the prerequisites required for this project.

-   Install [node.js](https://nodejs.org/en) and NPM
    ```sh
    npm install npm@latest -g
    ```

### Installation

Here are the steps to set up the project.

1. Get a Gemini AI API key at [Google AI Studio](https://aistudio.google.com/u/1/apikey)
2. Clone the repo
    ```sh
    git clone https://github.com/danny1jiang/ai-math-solver.git
    ```
3. Install NPM packages
    ```sh
    cd ai-math-solver
    npm install
    ```
4. Create a .env file and enter your API key
    ```js
    REACT_APP_API_KEY = KEY;
    ```
5. Start the localhost server
    ```sh
    npm run dev
    ```

## Demo

If you would like to try out this tool, check out the [Demo](https://aimathsolver.netlify.app/).

If you encounter any issues with the program, feel free to [Open an issue](https://github.com/danny1jiang/ai-math-solver/issues/new).

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
