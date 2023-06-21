import { Image } from 'react-bootstrap';

function Footer(){
    return(
        <div className="Footer" id="contact">
            <div className='container2'>
            <div className="Footer-Col">
                <h2>macnemat@gmail.com</h2>
            </div>
            <div className="Footer-Col">
                <h2>(613)-914-1897</h2>
            </div>
            <div className="Footer-Col">
                <a href="https://www.linkedin.com/in/matthew-macneil-9999ba22b"><Image src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/Linkedin_Logo.png" width="50" height="50"/></a>
            </div>
            </div>
        </div>
    )
}

export default Footer