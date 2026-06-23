# Personal Portfolio
This is my portfolio website where I get to showcase who I am, what I have built, and where I am headed with my career. The website has two project sections: analytics and coding section where you can find all my analytics case studies and coding projects, including this website. The other section is focused on projects I worked on throughout my biomedical engineering UG, showing detailed logs with write-ups and images. The wesbite can accessed [here](https://varshakrsh.vercel.app/).

This project started with me having a rough idea of what I wanted the wesbite to look like - dark theme, minimal, and professional. I made use of vibe-coding to help me achieve my vision. Although the website was vibe-coded, every design decision, every line of code went through my hands. I described each and every component to the AI agent and got a working code. Depending on my choice of theme, font size, spacing, and animations, I had to break down the code, fix errors, and change attributes to get what I wanted to see. Finally, I connected everything, pushed to GitHub, and deployed the website on Vercel. The result is a website that I genuinely understand and can maintain, not something that I blindly copy-pasted.

## Tech stack
- React19: Core UI framework for the website. Instead of running a huge HTML file, React lets us break down the site into smaller components that get assembled together.
- Vite: dev server that runs the project locally and packages it for deployment.
- GSAP: For handling entrance animations on the hero section and BME projects log pages.
- Framer Motion: For scroll-triggered animations that causes the project cards and about section to fade in as you scroll down.
- TailWind CSS: Styling tool that deals with layout, spacing, and responsive design.
- React Router v6: Helps users navigate between different pages without a full reload.
- Outfit (Google Fonts): For font style (sans serif font used throughout the website).
- Vercel: Platform for deploying the website.
- Git and GitHub: Version control and code hosting.

## Design Decisions
- I have always had a liking for dark themes on everything I use: code editors, terminals. My previous portfolio website which I hosted on Google sites also had a dark theme throughout, but the website wasn't as interactive and engaging as this one, which was the key reason I decided to build my portfolio website myself. I went with dark charcoal (#1a1a1a) which is softer and easier on the eyes.
- My BME projects had multiple prototype images. Putting them side by side distorted the pixels and stacking them vertically cluttered the log page. So, I went with a carousel that displays one image at a time, without cropping them out. The carousel also comes with captions to describe what we are looking at and dot indicators to show how images there are.
- All project data lives in one file - [projects.js](src/data/Projects.js). Components just read that file and render. So, adding or editing projects involves only changing the code in that file without touching any component code.
- 2 animation libraries were employed. GSAP was chosen for hero entrance animations because it provides precise control over timing and stagger. Framer Motion was used for scroll triggered animations on cards and sections because it was specifically built for React. Each library is used where it's best suited.

## How to Run Locally
- Make sure you have the following installed on your system: [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/).
- Follow these steps on your terminal.
```bash
# Clone this repository
git clone https://github.com/varshakrsh/portfolio-website.git

# Move into the project folder
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```
- Go through the code and make changes according to what you want to see on your website.
- Open `http://localhost:5173` in your browser.

## Deployment
Vercel was used for deploying the website. It can be connected to your GitHub repository. Everytime you make changes to your code and push it to GitHub, Vercel automatically pulls the latest version , runs ``` npm run build ```, and publishes the website within 60 seconds of every push.

