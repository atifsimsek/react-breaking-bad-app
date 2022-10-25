import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from "../redux/charactersSlice"
import { BsArrowDownSquare } from "react-icons/bs"
import GoToTop from '../Components/GoToTop'
import Loading from '../Components/Loading'

const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.characters.items)
  const page = useSelector(state => state.characters.page)
  const status = useSelector(state => state.characters.status)
  const hasNextPage = useSelector(state => state.characters.hasNextPage)
  const isLoading = useSelector(state => state.characters.isLoading)

  const [a, setA] = useState(true)



  useEffect(() => {

    if (status === "idle") {
      dispatch(fetchCharacters())

    }

    return () => setA(false)

  }, [dispatch, status])




  if (a) {
    return (<Loading />)


  }





  return (
    <>

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

          {isLoading && <div className='load-small'><Loading /></div>}


          <span>{
            hasNextPage ? `Page: ${page}` : "No more pages to show"
          }</span>

          {
            hasNextPage ? <button className='btn' onClick={() => { dispatch(fetchCharacters(page)) }}>Load More  <BsArrowDownSquare /></button> :
              <GoToTop />

          }



        </div>

      </div>

    </>
  )
}

export default Home