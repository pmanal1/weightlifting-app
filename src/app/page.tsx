'use client'

import { pauloWorkout } from "./data";
import { useEffect } from "react";

var setsArray: number[];

export default function Home() {
  useEffect(() => {}, [])
  
  return (
    <main>
      <h1>Weightlifting App</h1>
      <ul>
        {pauloWorkout.map((exercise, exerciseIndex) => {
          setsArray = Array.from({length: exercise.sets});
          return (
          <li key={exerciseIndex}>
            {exercise.name}
            {setsArray.map((_, setIndex) => (
              <div key={setIndex}>
                Set {setIndex + 1}
                <input></input>
                <input type="checkbox"></input>
              </div>
            ))}
          </li>
        )})}
      </ul>

    </main>
  );
}
