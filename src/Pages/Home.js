import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from "../redux/charactersSlice"
import { BsArrowDownSquare } from "react-icons/bs"


const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.characters.items)
  const page = useSelector(state => state.characters.page)
  const status = useSelector(state => state.characters.status)


  useEffect(() => {

    if (status === "idle") {
      dispatch(fetchCharacters())
    }



  }, [dispatch,status])

  return (
    <div className='container'>
      {
        data.map(character => (
          <div key={character.char_id} className='character-box'>
            <img src={character.img} alt="" />
            <div className="overlay"></div>
            <div className='name-box'>
              <h4>{character.name}</h4>
              <h5>{character.nickname}</h5>
            </div>
          </div>
        ))
      }

      <div className="page-box">
        <span>Page: {page}</span>
        <button onClick={() => { dispatch(fetchCharacters(page)) }}>Load More  <BsArrowDownSquare /></button>
      </div>




    </div>
  )
}

export default Home