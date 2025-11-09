# Cozy Desktop

A retro, pixel-art themed virtual desktop environment built with vanilla JavaScript, HTML, and CSS. This project creates a simple, interactive desktop experience in your browser, complete with draggable windows, a functional toolbar, and a music player application.

## Live Demo

You can try out a live version of the project here: **[Cozy Desktop Demo](https://wwarzecha.github.io/cozy-desktop/)**

## Features

-   **Virtual Desktop Interface**: A grid-based layout for desktop icons.
-   **Draggable & Resizable Windows**: All application windows can be moved and resized freely.
-   **Z-Index Management**: Clicking on a window brings it to the foreground.
-   **Toolbar**: Displays icons for running applications. Clicking an icon brings the corresponding window to the front.
-   **Desktop Icons**: Launch applications directly from the desktop.
-   **Music Player**: Simple functional music player.
-   **Animated Wallpaper**: Loads a GIF as the desktop background.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.
*   [Node.js](https://nodejs.org/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/cozy-desktop.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Usage

To run the project in a development environment with live reloading, use the `serve` script. This will open the application in your default browser.

```sh
npm run serve
```

To build the project for production, use the `build` script. The optimized and bundled files will be placed in the `dist` directory.

```sh
npm run build
```
