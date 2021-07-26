import React from 'react'

const Connection = ({ content }) => {
  return (
        <>
            <div className='infoform'>
                <h3 className="page-header">{content.header}</h3>
                <p className="input-section">{content.input1}</p>
                <p className="input-section">{content.input2}</p>
            </div>
        </>

  )
}

export default Connection
