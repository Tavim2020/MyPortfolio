import React from 'react';

export const GlobalContext = React.createContext();


export const GlobalStorage = ({children}) => {
    // Músicas
    const [isActiveMusic, setIsActiveMusic] = React.useState(false);
    const [lastMusic, setLastMusic] = React.useState(true);
    const [advancedMusic, setAdvancedMusic] = React.useState(true);
    const [musicMove, setMusicMove] = React.useState(false);
    const [titleMusic, setTitleMusic] = React.useState(false);
    const [indexMusic, setIndexMusic] = React.useState(0);

    // Redirecionamento de página
    const [activeFace, setActiveFace] = React.useState(false);
    const [activeGitHub, setActiveGitHub] = React.useState(false);
    const [activeLinkedin, setActiveLinkedin] = React.useState(false);


    // Menu redirecionamento
    const [Desenvolvedor, setDesenvolvedor] = React.useState(false);
    const [TechSkills, setTEchSkills] = React.useState(false);
    const [Contato, setContato] = React.useState(false);



    // Função de scroll on
    const [scroll, setScroll] = React.useState(0);


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
        'music/KSHMR, Jeremy Oceans - One More Round (Free Fire Booyah Day Theme Song) [OUT NOW].mp3'
    ];


      
    function MoveFace(){
        setActiveFace(true);
        setTimeout(()=>{
            setActiveFace(false)
        }, 2000)
    };


    
    React.useEffect(()=>{
        if(activeFace === true){
            window.open('https://www.facebook.com/otavio.doasantoslopea', '_blank')
        }
    }, [activeFace]);
    

    function MoveGitHub(){
        setActiveGitHub(true);
        setTimeout(()=>{
            setActiveGitHub(false)
        }, 2000)
    };


    
    React.useEffect(()=>{
        if(activeGitHub === true){
            window.open('https://github.com/Tavim2020', '_blank')
        }
    }, [activeGitHub]);



    function MoveLinkedin(){
        setActiveLinkedin(true);
        setTimeout(()=>{
            setActiveLinkedin(false)
        }, 2000);
    };


    
    React.useEffect(()=>{
        if(activeLinkedin === true){
            window.open('https://www.linkedin.com/in/otavio-dos-santos-lopes-603a89191/', '_blank')
        }
    }, [activeLinkedin]);


    // Menu para redirecionar função
    function DevON(){
        setDesenvolvedor(true);
        setScroll(true);
    }

    function TechON(){
        setTEchSkills(true);
    }

    function ContatoON(){
        setContato(true);
    }


    React.useEffect(()=>{
        if(Desenvolvedor === true){
            window.location.href = '#Desenvolvedor';
            setTimeout(()=>{
                setDesenvolvedor(false);
            }, 2000);
        };
    }, [Desenvolvedor]);


    React.useEffect(()=>{
        if(TechSkills === true){
            window.location.href = '#TechSkills';
            setTimeout(()=>{
                setTEchSkills(false);
            }, 2000);
        };
    }, [TechSkills]);



    // Função no scroll
    React.useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >= 390){
                setScroll(true);
            }
        })
    }, [])


    React.useEffect(()=>{
        if(Contato === true){
            window.location.href = '#Contato';
            setTimeout(()=>{
                setContato(false);
            }, 2000);
        };
    }, [Contato]);


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
       activeFace,
       scroll,
       setScroll,
       DevON,
       TechON,
       ContatoON,
       PlayAndStop,
       RetroMusic,
       ClickAdvanced,
       MoveFace,
       MoveGitHub,
       MoveLinkedin,
   }}>
        {children}
    </GlobalContext.Provider>
   )
}