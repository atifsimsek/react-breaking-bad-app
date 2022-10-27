import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsArrowDownSquare } from "react-icons/bs"
import GoToTop from '../Components/GoToTop'
import Loading from '../Components/Loading'
import Error from '../Components/Error'
import { NavLink } from 'react-router-dom'
import {
  fetchCharacters,
  stateData,
  stateError,
  stateHasNextPage,
  stateIsLoading,
  statePage,
  stateStatus
} from "../redux/charactersSlice"



const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector(stateData)
  const page = useSelector(statePage)
  const status = useSelector(stateStatus)
  const hasNextPage = useSelector(stateHasNextPage)
  const isLoading = useSelector(stateIsLoading)
  const error = useSelector(stateError)



  useEffect(() => {

    if (status === "idle") {
      dispatch(fetchCharacters())

    }



  }, [dispatch, status])



  if (isLoading) {
    return (<Loading />)
  }

  if (status === "failed") {
    return (<Error message={error} />)
  }






  return (
    <div className='container'>
      {

        data.map(character => (
          <NavLink to={`/character/${character.char_id}`} key={character.char_id} className='character-box'>
            <img src={character.img} alt="" />
            <div className="overlay"></div>
            <div className='name-box'>
              <h4>{character.name}</h4>
              <h5>{character.nickname}</h5>
            </div>
          </NavLink>
        ))
      }


      {isLoading
        ? null
        : <div className="page-box">

          {status === "loading" && <div className="lds-dual-ring"></div>}

          {status === "failed" && <Error message={error} ></Error>}

          <span>{
            hasNextPage ? `Page: ${page}` : "No more pages to show"
          }</span>

          {
            hasNextPage ? <button className='btn' onClick={() => { dispatch(fetchCharacters(page)) }}>Load More  <BsArrowDownSquare /></button> :
              <GoToTop />

          }

        </div>}

    </div>


  )
}

export default Home