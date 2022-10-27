import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import Loading from "../Components/Loading"
import Error from "../Components/Error"
import {
  fetchCharacter,
  stateCharacter,
  stateStatus,
  stateError
} from "../redux/detailSlice"

const CharacterDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const character = useSelector(stateCharacter)
  const status = useSelector(stateStatus)
  const error = useSelector(stateError)


  useEffect(() => {

    dispatch(fetchCharacter(id))



  }, [id, dispatch])

  if (status === "loading") {
    return (<Loading />)
  }


  if (status === "failed") {
    return (<Error message={error} />)
  }


  return (
    <>
      {status === "succeeded" &&
        <div className='character-container'>
          <img src={`${character.img}`} alt="" />
          <div className='detail'>
            <h3>Name : {character.name}</h3>
            <h4>NickName : {character.nickname}</h4>
            <hr />
            <p><span>Job/Jobs :</span>  {character.occupation.join(" - ") || "Unknow"}</p>
            <p><span>Seasons Appearance :</span>  {character.appearance.join("-") || "Unknow"}</p>
            <p><span>Birthday :</span>  {character.birthday}</p>
            <p><span>Status :</span> {character.status}</p>
            <p><span>Actor :</span>  {character.portrayed}</p>
          </div>
        </div>


      }
    </>


  )
}

export default CharacterDetail