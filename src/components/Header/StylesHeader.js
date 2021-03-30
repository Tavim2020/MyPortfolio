import styled from 'styled-components';




// Audio
export const AudioContainer = styled.div`  
    height: 4vw;  
    background-color: var(--light-gray);
    position: absolute;
    z-index: 10;

    width: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic ? '100vw' : '25vw'};

    border-bottom-right-radius: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic ? '0' : '0.6vw'};

    /* width: 100vw; */

    transition: 3s;
    background-color: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic ? 'visible' : 'transparent'};
`;


export const ContainerInternoAudio = styled.div`
    margin: 0 auto;

    width: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic ? '90%' : '100%'};

    border-bottom-right-radius: ${({lastMusic, advancedMusic}) => lastMusic || advancedMusic ? '0' : '0.6vw'};

    /* width: 95%; */
    height: 100%;
    transition: 3s;
    display: flex;
    align-items: center;
`;


export const PlayStop = styled.div`
    width: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic ? '15vw' : '100%'};


    /* width: 15vw; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 3s;
    background-color: var(--light-gray);
    padding-left: 6%;


    .lastDiv{
        width: 3vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .lastDiv img{
        width: 2vw;
        cursor: pointer;
    }

    .centerDiv{
        width: 4vw;
        height: 4vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .centerDiv img{
        width: 3vw;
        cursor: pointer;
    }

    .nextDiv{
        width: 3vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nextDiv img{
        width: 2vw;
        cursor: pointer;
    }

`;


export const ContainerTextMusicAndBarVisualization = styled.div`
    width: 60vw;
    border-bottom-right-radius: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic? '0' : '0.6vw'};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--light-gray);
    
    
    .NameMusicText{
        margin: 0 auto;
        width: 90%;
        height: 40%;   
    }
    
    #NameMusic{
        font-size: 1vw;
        padding-top: 0.5vw;
        color: var(--chocolate);
        transition: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic ? '6s' : '0.5s'};
        opacity: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic ? '1' : '0'};
        visibility: ${({lastMusic, advancedMusic}) => lastMusic ||  advancedMusic ? 'visible' : 'hidden'};
        text-align: center;
        font-family: 'Permanent Marker', cursive;

    }

    .BarContainer{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.5vw;
    }

    .BarContainer .Bar{
        margin: 0 auto;
        width: 90%;
        height: 25%;
        display: flex;
        align-items: center;
        border-radius: 1.2vw;
        background-color: var(--background-bar);  
    }

    .Bar .ContentBar{  
        width: 100%;
        background-color: var(--bar-music);
        cursor: pointer;
    }
`;

export const AudioExec = styled.audio`
    display: none;
`;

// export const IconsDancing = styled.div`
//     flex: 1;
//     height: 100%;
//     display: flex;
//     position: relative;

//     img{
//         width: 3vw;
//         transition: 15s;
//         opacity: ${({isActiveMusic}) => isActiveMusic ? '1' : '0'};
//         position: absolute;
//         top: 25%;
//     }

//     .man{
//         /* display: none */
//         z-index: -5;
//     }
// `;








// Header Container
export const HeaderContainer = styled.header`
    margin: 0 auto;
    width: 100vw;
    height: 12vw;
    background-color: var(--header-background-color);
   
    `;

export const ContainerInternoHeader = styled.div`
    width: 100%;
    height: 100%;
    transition: 3s;
    display: flex;
    align-items: center;
    justify-content: space-between;


    .TitleContainer{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    
        .FullStack{
            width: 100%;
            height: 35%;
            color: var(--white);
            font-family: 'Caveat', cursive;
            
            
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            
            h1{
                width: 40vw;
                font-size: 3.5vw;
                margin-left: 26%;
                transition: 6s;
                opacity: ${({musicMove}) => musicMove ? '0' : '1'};
            }
    
    
            .iconsAcess{
                flex: 1;
                display: flex;
                justify-content: flex-end;
                position: absolute;
                right: 0%;
                z-index: 11;
        
                img{
                    opacity: 0;
                    width: 3vw;
                    margin-right: 1vw;
                    cursor: pointer;
                }

                img:nth-child(3){
                    margin-right: 5vw;
                }
    
    
            }
        }



        .titleAndMenu{
            margin: 0 auto;
            width: 95%;
            height: 65%;
            display: flex;
            align-items: center;


            .mainText{
                width: 40%;
                display: flex;
                align-items: center;
                    
                    h2{
                        color: var(--white);
                        font-size: 2.3vw;
                        animation: typing steps(40) 4s 1s normal both;
                        white-space: nowrap;
                        overflow: hidden;
                        font-family: 'Dela Gothic One', cursive;
                    
                    &::before{
                        content: '{';
                        color: var(--tag-color);
                    }
                    
                    &::after{
                        content: '}';
                        color: var(--tag-color);

                    }
                    
                    
                    @keyframes typing{
                        from{
                            width: 0%;
                        }
                        
                        to{
                            width: 100%;
                        }
                    }

                }
                
                strong{
                    font-size: 2.6vw;
                    animation: showOrHidden 500ms infinite normal steps(40);
                    color: var(--white);
                    @keyframes showOrHidden{
                        from{
                            opacity: 0;
                        }
                        
                        to{
                            opacity: 1;
                        }
                    }
                }

            }


            .menu{
                flex: 1;

                nav ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    li{
                        color: var(--white);
                        font-size: 1.6vw;
                        font-family: 'Dela Gothic One', cursive;
                        margin-right: 2vw;
                        cursor: pointer;
    
                        &::before{
                            content: '< ';
                            color: var(--tag-color);
                        }
    
                        &::after{
                            content: ' >';
                            color: var(--tag-color);
                        }
                    }


                    li:nth-child(1){
                        animation: moveTop;
                        animation-duration: 6s;
                        animation-delay: 1;
                        animation-direction: normal;

                        @keyframes moveTop{
                            from{
                                transition: 1s;
                                opacity: 0;
                                transform: translateY(-3vw);
                            }
                            to{
                                transition: 1s;
                                opacity: 1;
                                transform: translateY(0vw);
                            }
                        }
                    }

                    li:nth-child(2){
                        animation: moveBottom;
                        animation-duration: 6s;
                        animation-delay: 1;
                        animation-direction: normal;

                        @keyframes moveBottom{
                            from{
                                transition: 1s;
                                opacity: 0;
                                transform: translateY(3vw);
                            }
                            to{
                                transition: 1s;
                                opacity: 1;
                                transform: translateY(0vw);
                            }
                        }
                    }


                    li:nth-child(3){
                        animation: moveRight;
                        animation-duration: 6s;
                        animation-delay: 1;
                        animation-direction: normal;

                        @keyframes moveRight{
                            from{
                                transition: 1s;
                                opacity: 0;
                                transform: translateX(5vw);
                            }
                            to{
                                transition: 1s;
                                opacity: 1;
                                transform: translateY(0vw);
                            }
                        }
                    }
                }

            }


        }

        
    }






`;

