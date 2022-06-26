import React from 'react'
import './Main.css';

const Main = () => {
  return (
    <div>
        <div className='container'>

            <div className='main'>

    <div className='images'>
        {/* <div> */}
        <img src={require('./images/image-header-desktop.png')} />
        </div>
        {/* </div> */}

        <div className='title'>
            <div className='content'>
                <h1>Get <span>insights</span> that help
                your business grow.</h1>
                <p>Discover the benefits of data analytics and make
                    better decisions regarding revenue, customer
                    experience, and overall efficiency.
                </p>
            </div>
                
            <div className='action'>
            <div>
            <h1>10K+</h1>
                <p>COMPANIES</p>
            </div>
            <div>
            <h1>314</h1>
                <p>TEMPLATES</p>
            </div>
            <div>
            <h1>12M+</h1>
                <p>QUERIES</p>
            </div>
            </div>
        </div>
            </div>
            </div>
        </div>
  )
}

export default Main;