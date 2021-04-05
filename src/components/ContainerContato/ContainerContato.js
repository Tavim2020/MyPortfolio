import React from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import Footer from '../Footer/Footer';
import { ContainerContatoDiv } from './StyleContainerContato'

const ContainerContato = () => {

    const { MoveFace, MoveGitHub, MoveLinkedin, scrollTree } = React.useContext(GlobalContext);

    return (
        <ContainerContatoDiv id='Contato' scrollTree={scrollTree}>

            

                <div class='contatoTitle'>

                    <h3>Contato</h3>
                    <img src='icons/contato.svg' alt='Contato' />

                </div>


                <div className='context'>

                    <p>O mundo é conectado a tecnologia e a tecnologia nos conecta através da informação.</p>
                    <p>(Otávio Dos Santos Lopes)</p>
                    <p style={{ marginTop: '6vw'}}>Entre em contato atraves:</p>

                    <div className='imageContainer'>

                        <img   src='icons/facebookBlue.svg'  onClick={MoveFace} alt='Facebook' title='Facebook' />

                        <img   src='icons/githubBlue.png'  onClick={MoveGitHub} alt='Git Hub' title='Git Hub' />

                        <img  src='icons/linkedinBlue.png' onClick={MoveLinkedin} alt='Linkedin' title='LInkedin' />

                    </div>

                    <div className='whatsapp'>

                        <img  src='icons/whatsapp.svg'  
                        onClick={ ()=>{window.location.href = 'tel:+5516993936784'} } 
                        alt='Whatsapp' 
                        title='Whatsapp' />

                    </div>

                </div>


                <Footer />

            
        </ContainerContatoDiv>
    )
}

export default ContainerContato
