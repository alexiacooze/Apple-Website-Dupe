import React from 'react'

export default function WatchToggle() {
    // will need to use state to toggle with an onlick that changes the color make the whole div the grey color and then make the onlick balck with rounded borders
  return (
    <section className='toggle'>
        <div className='toggle__image-container'>
            <img className='toggle__image'></img>
        </div>
        <div className='toggle__description-container'>
            <p className='toggle__comment'>Our largest display yet</p>
            <p className='toggle__header'>Over 50% more screen area than Series 3.</p>
            <div className='toggle__container'>
                <p className='toggle__seven' >Series 7</p>
                <p className='toggle__three'>Series 3</p>
            </div>
        </div>

    </section>
  )
}
