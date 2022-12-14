import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import App from './components/App';
import Day1Part1 from './components/Day1Part1';
import Day1Part2 from './components/Day1Part2';
import Day2Part1 from './components/Day2Part1';
import Day2Part2 from './components/Day2Part2';
import Day3Part1 from './components/Day3Part1';
import Day3Part2 from './components/Day3Part2';
import Day4Part1 from './components/Day4Part1';
import Day4Part2 from './components/Day4Part2';
import Day5Part1 from './components/Day5Part1';
import Day5Part2 from './components/Day5Part2';
import Day6Part1 from './components/Day6Part1';
import Day6Part2 from './components/Day6Part2';
import Day7Part1 from './components/Day7Part1';
import Day7Part2 from './components/Day7Part2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "day1part1",
        element: <Day1Part1 />
      },
      {
        path: "day1part2",
        element: <Day1Part2 />
      },
      {
        path: "day2part1",
        element: <Day2Part1 />
      },
      {
        path: "day2part2",
        element: <Day2Part2 />
      },
      {
        path: "day3part1",
        element: <Day3Part1 />
      },
      {
        path: "day3part2",
        element: <Day3Part2 />
      },
      {
        path: "day4part1",
        element: <Day4Part1 />
      },
      {
        path: "day4part2",
        element: <Day4Part2 />
      },
      {
        path: "day5part1",
        element: <Day5Part1 />
      },
      {
        path: "day5part2",
        element: <Day5Part2 />
      },
      {
        path: "day6part1",
        element: <Day6Part1 />
      },
      {
        path: "day6part2",
        element: <Day6Part2 />
      },
      {
        path: "day7part1",
        element: <Day7Part1 />
      },
      {
        path: "day7part2",
        element: <Day7Part2 />
      }
    ]
  }
],
  { basename: "/AdventOfCode2022" }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
