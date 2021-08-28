---
title: Quick Start
root: '/docs'
parents: ['Get Started']
---

# Quick start

## Prerequisites

First we need to install [.NET Core](https://dotnet.microsoft.com/download) (SDK) and [Node.js](https://nodejs.org/en/download/)

Additionally we need some editor like [VS Code](https://code.visualstudio.com/), [Visual Studio](https://visualstudio.microsoft.com/) or [Rider](https://www.jetbrains.com/rider/)

VS Code for frontend/react and Visual Studio for backend/c# editing are probably good choices.

If you use a Windows OS you might also want to install Windows Terminal.

## Create and initialize a project

From a commandline run

`dotnet new -i Glow.App.Template::*` to install the main template.

```
mkdir my-app
cd my-app
dotnet new glow-app --name MyApp
cd MyApp
npm install web
```

## Start developing

Open a terminal and navigate to the frontend folder to start the frontend dev server:

```
cd MyApp\web
npm run start
```

The frontend dev server is running and watching for changes.

In a second terminal start the backend:

```
cd MyApp
dotnet watch run
```

Your site is now running at `https://localhost:5001`

## Open the source code and start editing!

When editing frontend files, the webapp should refresh automatically. Editing the backend should result in restarting the backend.
