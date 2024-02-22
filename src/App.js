import logo from './logo.svg';
import './App.css';

import {Link } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-50/90 w-full h-screen flex items-center justify-center p-4">
      <div className="grid gap-4 max-w-5xl w-full rounded-xl bg-white shadow-lg overflow-hidden p-10">
        <div className="space-y-3 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">Sanjula Lakpahana</h1>
            <p className="font-medium tracking-wide text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Computer Engineering Undergraduate
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Email
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              GitHub
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              LinkedIn
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="grid gap-6 border-t pt-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">About Me</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Computer Engineering undergraduate with a passion for software development. I am a quick learner and enjoy
              working on challenging projects. I have experience with several technologies including git, docker,
              CodeIgniter 4, OOP, PHP, MySQL, Linux, HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills</h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                git
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                docker
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                CodeIgniter 4
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                OOP
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                PHP
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                MySQL
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                Linux
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                HTML
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                CSS
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center text-sm font-medium w-24">
                JavaScript
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 border-t pt-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Experience</h2>
            <div className="space-y-1">
              <h3 className="font-bold">Software Engineer</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Example Company</p>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">June 2022 - Present</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Intern</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Example Company</p>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">June 2021 - August 2021</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Education</h2>
            <div className="space-y-1">
              <h3 className="font-bold">Bachelor of Science in Computer Engineering</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Example University</p>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">2019 - 2023</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 border-t pt-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact</h2>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Email: info@example.com</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Connect</h2>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">GitHub: @sanjula</p>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">LinkedIn: @sanjula</p>
          </div>
        </div>
        <div className="grid gap-6 border-t pt-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Projects</h2>
            <div className="space-y-1">
              <h3 className="font-bold">Project Name</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Description of the project.</p>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                Technologies used: React, Tailwind CSS, Node.js
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">Another Project</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">Description of another project.</p>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                Technologies used: Vue.js, SCSS, Express
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
