import React from 'react'

export default function Footer() {
  return (
    <>
        <div className="footer flex place-content-end space-x-10 mt-10 mb-24">
            <div className="column space-y-2">
                <h4 className='font-bold'>About</h4>
                <p>About Us</p>
                <p>Features</p>
                <p>News and Column</p>
            </div>
            <div className="column space-y-2">
                <h4 className='font-bold'>Connect</h4>
                <p>Linkedin</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="column space-y-2">
                <h4 className='font-bold'>Support</h4>
                <p>FAQ's</p>
                <p>Support Center</p>
                <p>Contact Us</p>
            </div>
        
        </div>
    </>
)
}
