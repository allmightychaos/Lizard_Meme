# 🦎 Lizard Song Player

A simple, modern web application that plays the viral TikTok lizard song with just one click! Built with React, TypeScript, and Vite for a fast and responsive experience on both mobile and desktop.

## ✨ Features

-   🎵 One-click audio playback of the viral lizard song
-   📱 Fully responsive design for mobile and desktop
-   🎨 Modern UI with smooth animations and hover effects
-   ⚡ Fast loading with Vite bundling
-   🦎 Cute lizard button design

## 🚀 Live Demo

[View Live Demo](https://lizardmeme.netlify.app)

## 🛠️ Tech Stack

-   **React 19** - Modern React with hooks
-   **TypeScript** - Type-safe development
-   **Vite** - Fast build tool and dev server
-   **Tailwind CSS** - Utility-first CSS framework
-   **Netlify** - Deployment and hosting

## 📦 Installation

**Prerequisites:** Node.js (v16 or higher)

1. Clone the repository:

    ```bash
    git clone https://github.com/allmightychaos/Lizard_Meme.git
    cd Lizard_Meme
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build locally

## 📁 Project Structure

```
├── public/
│   └── lizard.mp3          # Audio file
├── components/
│   └── PlayButton.tsx      # Main play button component
├── App.tsx                 # Main application component
├── index.tsx              # React app entry point
├── index.html             # HTML template
├── lizard.png             # Lizard image asset
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🌐 Deployment

This project is configured for easy deployment on Netlify:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 🐛 Troubleshooting

**Audio not playing on deployment?**

-   Ensure the audio file is in the `public/` directory
-   Check that the audio path is correct (using relative paths like `./lizard.mp3`)
-   Some browsers require user interaction before playing audio

**Build issues?**

-   Make sure you're using Node.js v16 or higher
-   Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 🤝 Contributing

Feel free to open issues or submit pull requests if you have ideas for improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_Made with 🦎 and ❤️_
