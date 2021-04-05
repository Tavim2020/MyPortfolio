import React from 'react'
import { GlobalContext } from '../../Context/GlobalContext';

import { AudioContainer, ContainerInternoAudio, PlayStop,
ContainerTextMusicAndBarVisualization, AudioExec  } from './StylesHeader';


export const Audio = () => {
    const { PlayAndStop, isActiveMusic, ClickAdvanced, lastMusic,
        advancedMusic, RetroMusic, musicList, musicMove, setMusicMove,
        titleMusic, setTitleMusic} = React.useContext(GlobalContext);

    
    // Criando um efeito inicial para poder adicionar titulo da musica e rodando uma música inicial
    React.useEffect(()=>{

        // Se não existir titulo então crie um titulo para a música
        if(titleMusic === false){

            // Variáveis para poder pegar uma música aleatória
            const listSize  = musicList.length - 1;
            const randomList = Math.round(Math.random() * listSize);
            
            const music = musicList[randomList];
    
            // Formatando o nome da música para jogar em variavel
            const nameMusicAfterReplace = music.replace(/[/]/g, '');
            const newMusicName = nameMusicAfterReplace.replace(/music/g, '');
            
            const nameMusic = newMusicName.replace(/.mp3/g, '');
            
            // Pegando o nome da música e armazenando em variável
            const NameMusic = document.querySelector('#NameMusic');
            const audio = document.querySelector('audio');
    
            // recebendo o nome da variavel e mostrando ao usuário
            NameMusic.innerHTML = nameMusic;

            // recebendo o valor da música aleattória
            audio.src =  music;
           
            // Titulo da música verdadeira após a criaçao
            setTitleMusic(true);
        }
    }, [musicList, setTitleMusic, titleMusic]);
    



    React.useEffect(()=>{
        const audio = document.querySelector('audio');
        const inputMusic = audio.parentNode.children[0];
        inputMusic.setAttribute('value', '0');
        if(isActiveMusic === true){
            audio.play();
           
            // Função para quando executar o audio validar 
            audio.addEventListener('play', ()=>{

                audio.addEventListener('timeupdate', ()=>{
                    const TimeAudio = parseInt(audio.currentTime, 10);
                    inputMusic.value = TimeAudio;
                    inputMusic.setAttribute('max', audio.duration);
                    inputMusic.addEventListener('change', ()=>{
                        audio.currentTime = inputMusic.value;
                    });

                })

            })

        } else{
            audio.pause();
        }
    }, [isActiveMusic]);



    if(musicMove === true){
        // Pausando a música
        const audio = document.querySelector('audio');
        audio.pause();

        // Zerando o input
        const inputMusic = audio.parentNode.children[0];
        inputMusic.value = 0;
        


        // variaveis para pegar uma musica aleatória
        const listSize  = musicList.length - 1;
        const randomList = Math.round(Math.random() * listSize);
        const music = musicList[randomList];

        // variaveis do para formatar o titulo da música
        const nameMusicAfterReplace = music.replace(/[/]/g, '');
        const newMusicName = nameMusicAfterReplace.replace(/music/g, '');
        const nameMusic = newMusicName.replace(/.mp3/g, '');

        // Nome da música
        const NameMusic = document.querySelector('#NameMusic');
        NameMusic.innerHTML = nameMusic;

        // carregando o atributo no audio
        audio.src= `${musicList[randomList]}`;


        // eExecutando a música após 1segundo
        setTimeout(()=>{

            // Se o botão do play está ativo então
            if(isActiveMusic){

                audio.play();

                
                
                // Evento para poder carregar a barrinha alinhado com o audio
                audio.addEventListener('play', ()=>{

                    audio.addEventListener('timeupdate', ()=>{
                        inputMusic.value = 0;
                        const TimeAudio = parseInt(audio.currentTime, 10);
                        inputMusic.value = TimeAudio;
                        inputMusic.setAttribute('max', audio.duration)
                        

                        inputMusic.addEventListener('change', ()=>{
                            audio.currentTime = inputMusic.value;
                        });


                    });


                });  

                
            }
            else if(!isActiveMusic){
                inputMusic.value = 0;
                const TimeAudio = parseInt(audio.currentTime, 10);
                inputMusic.value = TimeAudio;
                inputMusic.setAttribute('max', audio.duration)
            }

        }, 500);

        
        // Depois de ter executao o Time para executar a música reseta o botão de mudar a música
        setTimeout(()=>{
            setMusicMove(false); 
        }, 200)
    }




        //Função para movimentar as imagens criando um efeito visual
        // function moveIconsEffect(){
        //     setTimeout(function moveLeft(){
        //         const womamIcons = document.querySelector('.womam');
        //         const ManIcons = document.querySelector('.man');


        //         womamIcons.style.transition = '2s'
        //         womamIcons.style.transform = 'translateX(-5vw)';
        //         womamIcons.style.transform = 'rotateY(-180deg)';
               
        //         ManIcons.style.transition = '2s'
        //         ManIcons.style.transform = 'translateY(-1vw)';

                

        //         setTimeout(function moveRight(){

        //         womamIcons.style.transition = '5s'
        //         womamIcons.style.transform = 'rotateY(0deg)';
        //         womamIcons.style.transform = 'translateX(3vw)';


        //         ManIcons.style.transition = '4s'
        //         ManIcons.style.transform = 'translateY(-1vw)';

        //         setTimeout(moveLeft, 3000);
        //         }, 2000)
        //     }, 10000)
        // }
    
        // if(isActiveMusic === true){
        //     moveIconsEffect();
        // }


    return (
            <AudioContainer lastMusic={lastMusic} advancedMusic={advancedMusic} >

                <ContainerInternoAudio lastMusic={lastMusic} advancedMusic={advancedMusic}>

                    <PlayStop lastMusic={lastMusic} advancedMusic={advancedMusic}>

                        <div className='lastDiv'>
                            <img onClick={RetroMusic} src='icons/lastButton.svg'
                            alt='Go Back'  title='Go Back'/>
                        </div>



                        <div className='centerDiv'>
                            <img id='Play' onClick={PlayAndStop} src={isActiveMusic ? 'icons/pause.svg' : 'icons/play.svg'} 
                            alt={isActiveMusic ? 'Pause' : 'Play'}  title={isActiveMusic ? 'Pause' : 'Play'}/>
                        </div>



                        <div className='nextDiv'>
                            <img  onClick={ClickAdvanced} src='icons/nextButton.svg'
                            alt='Advance' title='Advance'/>
                        </div>


                    </PlayStop>



                    <ContainerTextMusicAndBarVisualization 
                    lastMusic={lastMusic} advancedMusic={advancedMusic} >

                        <div className='NameMusicText'>

                            <p id="NameMusic"></p>

                        </div>

                        <div className='BarContainer'>

                            <div className='Bar'>

                                <input type='range' className='ContentBar' />

                                <AudioExec>
                                    <source id='srcMusic'  type='audio/mp3' />
                                </AudioExec>

                                

                            </div>

                        </div>

                    </ContainerTextMusicAndBarVisualization>



                    {/* <IconsDancing isActiveMusic={isActiveMusic}>

                        <img class="womam" src='icons/mulher-dancing.png' alt='Woman Dancing' title='Womam Dancing' />


                        <img class="man" src='icons/homem-dancing.png' alt='Man Dancing' title='Man Dancing' />

                    </IconsDancing> */}




                 </ContainerInternoAudio>  

            </AudioContainer>
    )
}

export default Audio;
