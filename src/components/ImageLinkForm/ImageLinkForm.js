import React from "react"
import './ImageLinkForm.css'

export const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
            {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' />
                <button className='w-auto grow f4 link ph3 pv2 dib white bg-light-purple' >Detect</button>
            </div>
        </div>
    )
}