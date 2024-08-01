'use client'
import { useEffect, useState } from "react";
import { modifyWorkout, pauloWorkout, Workout } from "../data"



export default function Page() {
    const [workoutState, setWorkoutState] = useState(pauloWorkout);
    function deleteWorkout(exercise: Workout) {
        var newWorkout = pauloWorkout.filter(workout => exercise !== workout);
        modifyWorkout(newWorkout)
        setWorkoutState(newWorkout);
        console.log(pauloWorkout);
    }

    return (
        <div>
            <h1>Templates page: Edit your workouts here</h1>
            <ul>
                {
                    pauloWorkout.map((exercise, exerciseIndex) => (
                        <li key={exerciseIndex}>
                            {exercise.name}
                            <button onClick={() => deleteWorkout(exercise)}>Delete</button>
                        </li>
                    ))
                }
            </ul>

        </div>

    )
}