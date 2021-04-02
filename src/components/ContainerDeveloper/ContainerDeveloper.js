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
               


            </ContainerDeveloperDiv>
   
        </section>
    )
}

export default ContainerDeveloper;
