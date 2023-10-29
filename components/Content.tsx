import ReactMarkdown from 'react-markdown';

const content = `### React.js: An Introduction

## Table of Contents
1. [Introduction](#introduction)
2. [What is React?](#what-is-react)
3. [Why Use React?](#why-use-react)
4. [Basic Concepts](#basic-concepts)
    - [Components](#components)
    - [Props](#props)
    - [State](#state)
5. [Creating Your First React App](#creating-your-first-react-app)
6. [Example Code](#example-code)

---

## Introduction

Welcome to this introductory lecture on React.js! This guide aims to provide you with a solid foundation for understanding the key concepts and benefits of using React in your projects.

---

## What is React?

React is a popular JavaScript library for building user interfaces. Developed by Facebook in 2013, it has since become one of the most widely-used libraries for front-end development.

---

## Why Use React?

### Key Benefits:

- **Declarative**: React makes it painless to create interactive UIs by allowing you to describe what your UI should look like.
  
- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.

- **Rich Ecosystem**: A vibrant community and plenty of third-party libraries.

---

## Basic Concepts

### Components

Components are the building blocks of any React application. A component defines a part of the UI and how it should be rendered.
`;

const Content = () => {
    return (
        <div className="overflow-y-auto">
            <ReactMarkdown className="markdown">
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default Content;