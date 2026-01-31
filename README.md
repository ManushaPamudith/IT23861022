# Assignment 1 - Automation Testing (IT23861022)

## Project Overview
This project contains automated test scripts for the **SwiftTranslator** web application using **Playwright**. The test suite covers **36 test cases**, including Positive Functional, Negative Functional, and UI scenarios.

## Prerequisites
Before running the tests, ensure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **VS Code** (Text Editor)

## Installation Instructions
1. Open the project folder in VS Code.
2. Open the terminal (`Ctrl + Shift + ~`).
3. Run the following command to install necessary dependencies:
   ```bash
   npm install
   npx playwright install


## How to Run the Tests

npx playwright test --project=chromium --headed --workers=1

**Note**: Using --workers=1 is recommended to prevent browser lag and ensure consistent results during the transliteration process.

## How to View Test Reports

npx playwright show-report