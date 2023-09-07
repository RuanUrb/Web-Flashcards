import {useState} from 'react'


export default function Flashcard({front, back, dateIssued, daysToReview}){
    const [showBack, setShowBack] = useState(true)

    return (
        <div>
            <div>
                <h1>{front}</h1>
                {showBack && <h2>{back}</h2>}
                <div>
          <select>
            <option value="1">Review in 1 day</option>
            <option value="3">Review in 3 days</option>
            <option value="7">Review in 7 days</option>
          </select>
        </div>
            </div>
        </div>
    )
}