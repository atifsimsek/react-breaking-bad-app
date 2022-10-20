import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from "../redux/charactersSlice"

const Home = () => {
  const dipatch = useDispatch()
  const data = useSelector(state => state.characters.items)
console.log(data)

  useEffect(() => {
    dipatch(fetchCharacters())

  }, [dipatch])

  return (
    <div>
      {
        data.map(character =>(
          <div key={character.char_id} className='container'>
            <img src={character.img} alt="" />




          </div>
        ))
      }


    </div>
  )
}

export default Home