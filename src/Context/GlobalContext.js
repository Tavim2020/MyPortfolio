import React from 'react';

export const GlobalContext = React.createContext();


export const GlobalStorage = ({children}) => {
    const [isActiveMusic, setIsActiveMusic] = React.useState(false);
    const [lastMusic, setLastMusic] = React.useState(true);
    const [advancedMusic, setAdvancedMusic] = React.useState(true);
    const [musicMove, setMusicMove] = React.useState(false);
    const [titleMusic, setTitleMusic] = React.useState(false);
    const [indexMusic, setIndexMusic] = React.useState(0);


    // Função para dar o efeito inicial para depois caso o usuario queira mudar a musica tenha sempre um efeito
    React.useEffect( function effectActiveDIv(){
        setTimeout(()=>{
            setLastMusic(false);
            setAdvancedMusic(false);
        }, 15000)
    }, []);




    // Função para Retroceder a música
    function RetroMusic(){
        setLastMusic(true);
        setMusicMove(true);
        setTimeout(()=>{
            setLastMusic(false);
            setAdvancedMusic(false);
        }, 15000);

    };



     // Função de Avançar a musica e rotacionar a div
     function ClickAdvanced(){
        setAdvancedMusic(true);
        setMusicMove(true);
        setTimeout(()=>{
            setAdvancedMusic(false);
            setLastMusic(false);
        }, 15000)
    }




    // Função de Play e Stop da música
    function PlayAndStop(){
        setIsActiveMusic(!isActiveMusic);
    };

    
    
   



    
    // Array de musicas para a reprodução
    const musicList = [
        'music/Hardwell & KAAZE & Jonathan Mendelsohn - We Are Legends.mp3',
        'music/KAAZE feat. Stu Gabriel - Freedom (Radio Edit).mp3',
        'music/Holiday Boulevard of Broken Dreams.mp3',
        'music/Alan Walker - Spectre [NCS Release].mp3',
        'music/Bass Nation Brazilian (Marrone Mix).mp3',
        'music/Pendulum - The Island (Crimsonik Remix) Official HQ.mp3',
        'music/Red Hot Chili Peppers - Otherside [Official Music Video].mp3',
        'music/OneRepublic - Counting Stars (Official Music Video).mp3',
        'music/Numb [Official Music Video] - Linkin Park.mp3',
        'music/Metallica Nothing Else Matters (Official Music Video).mp3',
        'music/Jota Quest - Do Seu Lado (Ao Vivo).mp3',
        'music/Melhores Musicas Eletronicas 2017 MixTop Músicas Para Ouvir Jogando Jogos 2017.mp3',
        'music/Gasoline ft. Matthew Steeper.mp3',
        'music/Martin Garrix Vs KSHMR & Shaun Frank - Poison Heaven (Teebo Mashup)(Radio Edit).mp3',
    ];


    


   return (
   <GlobalContext.Provider value={{
       isActiveMusic,
       setIsActiveMusic,
       lastMusic,
       advancedMusic,
       musicList,
       musicMove,
       setMusicMove,
       titleMusic,
       setTitleMusic,
       setIndexMusic,
       indexMusic,
       PlayAndStop,
       RetroMusic,
       ClickAdvanced,
   }}>
        {children}
    </GlobalContext.Provider>
   )
}