import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
            <div className="footer-title">future.</div>
            <div className="follow-wrapper">
                <div className="follow">Follow us:</div>
                <ul className="social">
                    <li className="icon"><a href="https://t.me/aadesh_hemwani"><i className="fa fa-telegram"></i></a></li>
                    <li className="icon"><a href="https://wa.link/pqk64j"><i className="fa fa-whatsapp"></i></a></li>
                    <li className="icon"><a href="https://www.instagram.com/aadesh1598/"><i className="fa fa-instagram"></i></a></li>
                    <li className="icon"><a href="https://github.com/aadesh-hemwani"><i className="fa fa-github"></i></a></li>
                    <li className="icon"><a href="https://www.linkedin.com/in/adesh-hemwani"><i className="fa fa-linkedin"></i></a></li> 
                    <li className="icon"><a href='mailto:aadeh.hemwani@gmail.com'><i className="fa fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>
        </footer>
    )
}
