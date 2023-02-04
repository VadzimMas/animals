import './AnimalShow.scss'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import { useState } from 'react';


const animalMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({ type }) {
    const [heartSize, setHeartSize] = useState(10)
    return (
        <div
            className='animal-card'
            onClick={() => { setHeartSize(heartSize + 10) }}>
            <img
                className='animal'
                src={animalMap[type]}
                alt=""
            />
            <img
                className='heart'
                src={heart}
                alt=""
                style={{
                    width: 'min(' + heartSize + '%' + ', 100%)'
                }}
            />
        </div>
    )
}

export default AnimalShow