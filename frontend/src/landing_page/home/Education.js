import React from 'react'

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
             <div className='col-6 '>
                <img src='media/education.svg' style={{width:"70%"}}/>
             </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open maeket education</h1>
                  <p> Versity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                  <a href='' className='mx-5' style={{textDecoration:"none"}} >Versity<i class="fas fa-long-arrow-alt-right"></i></a>

                <p className='mt-5'>TradingQ&A, the most active trading and investment community in the India for all your market related</p>
                   <a href='' className='mx-5' style={{textDecoration:"none"}} >TradingQ&A<i class="fas fa-long-arrow-alt-right"></i></a>

                </div>
                <div className='col-6'></div>


                </div>
            </div>
    
    );
}

export default Education;