import React from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import { ContainerImageDiv }from './StyleImageContainer';

export const ContainerImage = () => {

    const { effect, effectFoguete, hiddenImage} = React.useContext(GlobalContext);


    return (
        <ContainerImageDiv effect={effect} hiddenImage={hiddenImage}>

                <div className='Perfil'>

                    <div className='containerEffect'>


                        <div class='foguete' effect={effect} autoPlay>

                            <img src='icons/foguete.svg' alt='Foguete' />     

                            <img className='otavio'src='imagens/otavio.jpeg' alt='Otavio' />   

                        </div>

                        <div className='myImage' hiddenImage={hiddenImage}>

                            <img className='otavio'src='imagens/otavio.jpeg' alt='Otavio' /> 

                        </div>

                    </div>



                    <div className='showItem' >

                        <img onClick={ effectFoguete } src='icons/play.svg' alt='Play Animation' title='Play Animation' /> 
                        <p>Animate</p>

                    </div>



                    <audio id='audioFoguete'>

                        <source src='musicEffects/foguete.mp3' type='audio/mp3'></source>

                    </audio>


                </div>

                <div className='TextMotivation'>

                    <h2>Desenvolvedor Full Stack</h2>

                    <blockquote>

                            "O Cerebro e a Tecnologia Tem a Capacidade de andar sempre lado a lado."
                            <p></p>(Otávio dos Santos Lopes)

                    </blockquote>


                </div>


        </ContainerImageDiv>
    )
}

export default ContainerImage;
