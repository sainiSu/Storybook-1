@@ -0,0 +1,126 @@
# Storybook + Vite + Tailwind CSS Setup

This project sets up a modern development environment using **Vite**, **Tailwind CSS**, and **Storybook**, with support for **React** and **TypeScript**.

## 🚀 Getting Started

Follow these steps to set up the project from scratch.

---

## 1. Initialize the Vite Project

```bash

npm create vite@latest


cd project-name

# Install project dependencies
npm install

npm run dev


## 2. Install Tailwind and Plugins:

```bash

npm install tailwindcss @tailwindcss/vite



## 3. 4. Install and Initialize Storybook

npx storybook@latest init

## Run storybook 
npm run storybook




📁 Project Structure – Design System Assignment

design-system/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Typography/
│   │   │   ├── Typography.tsx
│   │   │   └── Typography.stories.tsx
│   │   ├── /Input
│   │   │   └── TextInput/
│   │   │       ├── TextInput.tsx
│   │   │       └── TextInput.stories.tsx
│   │   └── Toast/
│   │           ├── Toast.tsx
│   │           ├── Toast.css
│   │           └── Toast.stories.tsx
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md



📦 Folder & File Overview

src/components/

Contains all reusable components for the design system, grouped by category:
	•	Typography/
	•	Typography.tsx: Contains heading, paragraph, and label components.
	•	Typography.stories.tsx: Storybook documentation.
	•	Input/TextInput/
	•	TextInput.tsx: A styled and accessible input field component.
	•	TextInput.stories.tsx: Storybook file showing variants and usage.
	•	Toast/
	•	Toast.tsx: A toast notification component with success/info/error variants.
	•	Toast.css: Styles for toast layout and animations.
	•	Toast.stories.tsx: Storybook usage and interaction examples.


  Styles:


  - As i worked with tailwind css but later on i use pure css.
  - All the styles are inside the styles folder with global css.
  - global css file constain base layout, colors ,themes and coomon classes for different components.


  .Storybook

  - main.ts : Addons, stories glob and frameworks integrations.

  - preview.ts : global decoratos , parameters also here i import my style file as well to style my component.

 Tech Stacks:

 . React
 . TypeScript
 . Storybook
 . vite
 . Tailwind CSS


 Project Folder Structure

 storybook-design-system/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── typography/
│   │   │   ├── Heading.tsx
│   │   │   ├── Paragraph.tsx
│   │   │   ├── Caption.tsxx
│   │   │   ├── textStyles.tsx
│   │   │   ├── Heading.stories.tsx
│   │   │   ├── Paragraph.stories.tsx
│   │   │   ├── Caption.stories.tsx
│   │   ├── data-entry/
│   │   │   ├── TextInput.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── TextInput.stories.tsx
│   │   │   ├── Dropdown.stories.tsx
│   │   ├── feedback/
│   │       ├── Alert.tsx
│   │       ├── Toast.tsx
│   │       ├── Modal.tsx
│   │       ├── Alert.stories.tsx
│   │       ├── Toast.stories.tsx
│   │       ├── Modal.stories.tsx
├── .storybook/
│   ├── main.js
│   ├── preview.js
├── package.json
├── tsconfig.json
├── README.md



Deployment

deployed on vercel

https://storybook-project-byoo.vercel.app/

github repository link 

https://github.com/sainiSu/Storybook-Project


