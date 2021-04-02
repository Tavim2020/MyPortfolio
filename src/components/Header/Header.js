import React from 'react'
import { ContainerInternoHeader, HeaderContainer } from './StylesHeader'
import AudioContainer from './Audio';
import { GlobalContext } from '../../Context/GlobalContext';


export const Header = () => {

    const { musicMove, lastMusic, advancedMusic, MoveFace, MoveLinkedin, MoveGitHub,
        DevON ,TechON, ContatoON} = React.useContext(GlobalContext);


    // Desativando o efeito da digitação
    React.useEffect(()=>{

            setTimeout(()=>{

                const barText = document.querySelector('.titleAndMenu strong');
                barText.style.display = 'none';

            }, 5500)

    }, []);



    // Função para executar a mudança das imagens na transação
    React.useEffect(()=>{
        const facebook = document.querySelector('#facebook');
        const github = document.querySelector('#github');
        const linkedin = document.querySelector('#linkedin');

        setTimeout(()=>{
            if(lastMusic === true || advancedMusic === true){
                facebook.style.transition = '0s';
                facebook.style.opacity = '0';
                

                github.style.transition = '0s';
                github.style.opacity = '0';
                
                linkedin.style.transition = '0s';
                linkedin.style.opacity = '0';

                
                setTimeout(()=>{
                    facebook.src = 'icons/facebookBlack.svg';
                    github.src = 'icons/githubBlack.svg';
                    linkedin.src = 'icons/linkedinBlack.svg';
                    
                    facebook.style.transition = '5s';
                    facebook.style.opacity = '1';
                    
                    
                    github.style.transition = '5s';
                    github.style.opacity = '1';
                    
                    linkedin.style.transition = '5s';
                    linkedin.style.opacity = '1';
        
                }, 1000);

            } 
            
            else if(lastMusic === false || advancedMusic === false) {
                facebook.style.transition = '0s';
                facebook.style.opacity = '0';
                

                github.style.transition = '0s';
                github.style.opacity = '0';

                linkedin.style.transition = '0s';
                linkedin.style.opacity = '0';

                setTimeout(()=>{
                    facebook.style.transition = '1s';
                    facebook.style.opacity = '1';
                    

    
                    github.style.transition = '1s';
                    github.style.opacity = '1';
    
                    linkedin.style.transition = '1s';
                    linkedin.style.opacity = '1';

                    facebook.src = 'icons/facebookBlue.svg';
                    github.src = 'icons/githubBlue.png';
                    linkedin.src = 'icons/linkedinBlue.png';
                }, 1000)
            }

        }, 200);

    }, [lastMusic, advancedMusic]);


   

   

    return (
        <>

            <AudioContainer />


            <HeaderContainer>

                <ContainerInternoHeader>

                    <div className='TitleContainer'>


                        <div class='FullStack' musicMove={musicMove}>

                            <h1>FullStack Developer</h1>


                            <div className='iconsAcess'>

                                <img id='facebook' onClick={MoveFace} alt='Facebook' title='Facebook' />

                                <img id='github'  onClick={MoveGitHub} alt='Git Hub' title='Git Hub' />

                                <img id='linkedin'  onClick={MoveLinkedin} alt='Linkedin' title='LInkedin' />

                                
                            </div>

                        </div>


                        <div className='titleAndMenu'>

                            <div className='mainText'>

                                <h2 title='Otávio Dos Santos Lopes'> Otávio Dos Santos Lopes  </h2> 
                                <strong>|</strong>

                            </div>

                            <div className='menu'>

                                <nav>
                                    
                                    <ul>

                                        <li onClick={DevON}>Desenvolvedor</li>
                                        <li onClick={TechON}>TechSkills</li>
                                        <li onClick={ContatoON}>Contato</li>

                                    </ul>


                                </nav>


                            </div>


                        </div>

                    </div>


                </ContainerInternoHeader>

            </HeaderContainer>

        </>
    )
}

export default Header;