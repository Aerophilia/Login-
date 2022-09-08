import React from 'react'
import "./login.css"
const login = () => {
  return (
    <section id="#register" className='register'>
        <div className='main-container'>

        <h5 className='heading'>REGISTER</h5>
        <div className='title-head'>
        <div className="title-individual">INDIVIDUAL</div>
        {/* <div className="title-team">Team</div> */}
        </div>
        <div className="form-container">
            <form action="#" className='individual'>
                <div >
                    <input type="email" placeholder='Mail ID' className='field' required/>
                </div>
                <div >
                    <input type="password" placeholder='Enter password' className='field' required/>
                </div>
                <div className='button-container'>
                    <input type="submit" placeholder='Submit' className="button" required/>
                </div>
            </form>
            </div>        
            </div>
    </section>
  )
}

export default login
