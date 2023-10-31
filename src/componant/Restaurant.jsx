import React, { useEffect, useState } from 'react'
import Pizza from './Pizza'
import Salad from './Salad'
import Onion from './Onion'
export default function restaurant() {

    
    return (
        <>
        <div>
            <h2 className='text-center text-decoration-underline text-danger-emphasis'>Pizza</h2>
             < Pizza />
        </div>
        <div>
            <h2 className='text-center text-decoration-underline text-danger-emphasis'>Salad</h2>
             < Salad />
        </div>
        <div>
            <h2 className='text-center text-decoration-underline text-danger-emphasis'>Onion</h2>
             < Onion />
        </div>

      

            {/* <div className=' pt-5 d-flex justify-content-center'>
                <h2><a className='me-3 text-dark ' href='#' onClick={() => getFood('pizza')}>pizza</a></h2>
                <h2><a className='me-3 text-dark ' href='#' onClick={() => getFood('salad')}>salad</a></h2>
                <h2><a className='me-3 text-dark ' href='#' onClick={() => getFood('onion')}>onion</a></h2>
            </div> */}

        </>
    )
}
