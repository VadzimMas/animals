import './App.scss'
import AnimalShow from './AnimalShow'
import { useState } from 'react'


function App() {
    const [animals, setAnimals] = useState([])

    function getRandomAnimal() {
        const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
        return animals[Math.floor(Math.random() * animals.length)]
    }

    function handelClick() {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className='app'>
            <button
                className='btn'
                onClick={handelClick}
            >Add Animal</button>
            <div className="container">
                {renderedAnimals}
            </div>
        </div>
    )
}

export default App