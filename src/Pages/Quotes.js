import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuotes } from "../redux/quotesSlice"
const Quotes = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.quotes.quotes)
  console.log(data)


  useEffect(() => {
    dispatch(fetchQuotes())


  }, [dispatch])
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