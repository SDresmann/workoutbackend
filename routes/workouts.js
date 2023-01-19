const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controler/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// Post a workout
router.post('/', createWorkout)

// DELETE a workout 
router.delete('/:id',deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router