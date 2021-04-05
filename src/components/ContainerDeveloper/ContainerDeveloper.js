import react from 'react';
import React from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import  { ContainerDeveloperDiv }  from './StyleContainerDeveloper';

export const ContainerDeveloper = () => {

    const { DevON, scroll} = React.useContext(GlobalContext);

    react.useEffect(()=>{
        const seta = document.querySelector('.seta');
        setTimeout(function moveTopSeta(){
            seta.style.transition = '2s';
            seta.style.transform = 'translateY(-3vw)';
            setTimeout(()=>{
                seta.style.transition = '2s';
                seta.style.transform = 'translateY(0vw)';
                setTimeout(()=>{
                    seta.style.transition = '1s';
                    seta.style.transform = 'translateY(-3vw)';
                    setTimeout(()=>{
                        seta.style.transition = '1s';
                        seta.style.transform = 'translateY(0vw)';
                        setTimeout(()=>{
                            seta.style.transition = '1s';
                            seta.style.transform = 'translateY(-3vw)';
                            setTimeout(()=>{
                                seta.style.transition = '1s';
                                seta.style.transform = 'translateY(0vw)';
                                setTimeout(moveTopSeta, 1000);
                            }, 500)
                        }, 500);
                    }, 1000)
                }, 2000)
            }, 2000)
        }, 0);

    }, []);


   


    return (
        <section id='Desenvolvedor'>

            <ContainerDeveloperDiv scroll={scroll}>
                <img onClick={DevON} class='seta' src='icons/seta-para-baixo-blue.png' alt='indicador' />

                <div className='titleDev'>

                    <div className='dev'>

                        <div className='title'>

                            <h3>Desenvolvedor</h3>
                            <img src='icons/desenvolvedor.svg ' alt='Dev Icon' />

                        </div>

                        <div className='conteudo'>

                            <p>
                                Estudante de desenvolvimento Web a 1 ano e com experiências em algumas 
                                tecnologias mais utilizadas no mercado atual. É um ser apaixonado por aquilo que faz. Sempre em busca de novos
                                aprendizados e conhecimentos, vem a cada dia mais pensando em transformar o
                                mundo em algo melhor através de seus conhecimentos. Pois sabe que a tecnolia tem
                                a capacidade de atravesar o mundo e através desse meio transformar pessoas ou o 
                                mundo em algo melhor, sendo assim um mundo Feliz.
                            </p>

                        </div>

                    </div>





                    <div className='project'>

                        <div className='titleProject'>

                            <h3>Projetos</h3>
                            <img src='icons/projeto.svg ' alt='Projeto' />

                        </div>

                        <div className='listProjects'>

                            <p onClick={()=>{window.open('https://awesome-jones-1fda2a.netlify.app/', '_blank')}}
                            title='https://awesome-jones-1fda2a.netlify.app/'>
                                    Landing Page 
                            </p>

                            <p onClick={()=>{window.open('https://compassionate-neumann-23acdc.netlify.app/', '_blank')}}
                            title='https://compassionate-neumann-23acdc.netlify.app/'>
                                    Crowdfunding product page
                            </p>


                            <p onClick={()=>{window.open('https://vigilant-darwin-6e0eac.netlify.app/', '_blank')}}
                            title='https://vigilant-darwin-6e0eac.netlify.app/'>
                                    NLW Dev Finances
                            </p>

                            <p onClick={()=>{window.open('https://optimistic-kilby-8dd522.netlify.app/', '_blank')}}
                            title='https://optimistic-kilby-8dd522.netlify.app/'>
                                    Launch countdown timer
                            </p>

                            <p onClick={()=>{window.open('https://sleepy-curie-33cb6c.netlify.app/', '_blank')}}
                            title='https://sleepy-curie-33cb6c.netlify.app/'>
                                    Loopstudios landing page
                            </p>

                            <p onClick={()=>{window.open('https://leoemateus.herokuapp.com/', '_blank')}}
                            title='https://leoemateus.herokuapp.com/'>
                                    LeoeMateus
                            </p>

                            <p onClick={()=>{window.open('https://605f914c60636e48263b73b7--blogr-landin-page.netlify.app/', '_blank')}}
                            title='https://605f914c60636e48263b73b7--blogr-landin-page.netlify.app/'>
                                    Blogr Landin Page
                            </p>


                            
                        </div>


                    </div>


                </div>

                
               


            </ContainerDeveloperDiv>
   
        </section>
    )
}

export default ContainerDeveloper;
