import {useState} from 'react'
const {randomBytes} = require('crypto')

const defaultFlashcards = [
    {id: randomBytes(4).toString('hex'), front: 'What is the capital of USA?', back: 'Washington, D.C', dateIssued: 1693968404, daysToReview: 1},
    {id: randomBytes(4).toString('hex'), front: 'What is the largest animal in the world?', back: 'Blue whale', dateIssued: 1693968404, daysToReview: 1},
    {id: randomBytes(4).toString('hex'), front: 'Soul in german?', back: 'Seele', dateIssued: 1693968404, daysToReview: 1},
    {id: randomBytes(4).toString('hex'), front: 'What is called leg teardrop muscle?', back: 'Vastus medialis', dateIssued: 1693968404, daysToReview: 1}
]

const Flashcard = ()=> {
    const [showBack, setShowBack] = setState(false)

    return (
        <div>

        </div>
    )
}