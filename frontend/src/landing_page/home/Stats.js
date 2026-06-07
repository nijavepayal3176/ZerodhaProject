import React from 'react'

function Stats() {
    return (
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                   <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                   <h2 className='fs-4'>
                    Customer-first always
                   </h2>
                   <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores worth of equity investments.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks,spam,"gamification", or annoying push notifications. High quality apps that you use at your pace,the way you like.</p>

                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech stratups offer you tailored servicrs specific to your needs.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and kill Switch, we don't just facilities transitions, but actively help you to better with your money.</p>

                </div>
                <div className='col-6 p-5'>
                    <img src='media/ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}} >Explore our products<i class="fas fa-long-arrow-alt-right"></i></a>
                        <a href='' className=''style={{textDecoration:"none"}}>Try Kite demo<i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Stats;