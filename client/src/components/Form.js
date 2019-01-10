import React from 'react'

const Form = (props) => {
  const { value, handleClick, handleChanged } = props
  return (
    <div className="form-group mt-3 row justify-content-around">
      <input className="form-control col-8" type="text" placeholder="Your city and country code" value={value} name="city" onChange={handleChanged} />
      <input className="form-control col-3 btn btn-primary" type="button" onClick={handleClick} value="Go" />
    </div>
  )
}
export default Form