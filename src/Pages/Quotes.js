import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../Components/Loading"
import Error from "../Components/Error"
import {
  fetchQuotes,
  stateData,
  stateError,
  stateStatus,
} from "../redux/quotesSlice"


const Quotes = () => {
  const dispatch = useDispatch()
  const data = useSelector(stateData)
  const status = useSelector(stateStatus)
  const error = useSelector(stateError)




  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes())
    }



  }, [dispatch, status])

  if (status === "loading") {
    return (<Loading />)
  }


  if (status === "failed") {
    return (<Error message={error} />)
  }


  return (
    <div className='container'>
      {
        data.map(quote => (
          <div className="quote" key={quote.quote_id}>
            <h3>{quote.author}</h3>
            <hr />
            <p>{quote.quote}</p>
          </div>
        ))
      }


    </div>
  )
}

export default Quotes