import styled from 'styled-components';


export const ContainerImageDiv = styled.section`
    width: 100vw;
    height: 32vw;
    background-color: var(--header-background-color);
    display: flex; 
    align-items: center;
    

    .Perfil{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        


        .containerEffect{
            width: 100%;
            height: 80%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            position: relative;


            .foguete{
                margin: 0 auto;
                width: 15vw;
                height: 15vw;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                animation: ${({effect}) => effect ? 'initFoguete' : null};
                animation-duration: 4s;
                animation-delay: 500ms;
                animation-timing-function: ease-in;
                margin-left: 14vw;
                /* animation-iteration-count: infinite; */
                transition: ${({effect}) => effect ? '1s' : '0s'};
                opacity: ${({effect}) => effect ? '1' : '0'};


                @keyframes initFoguete{
                    30%{
                        transform: translateX(5vw) translateY(-5vw);
                    }

                    40%{
                        transform: translateX(9vw) translateY(-7.5vw);
                    }

                    50%{
                        transform: translateX(20vw) translateY(-10vw) rotateZ(45deg);
                    }

                    100%{
                        transform: translateX(90vw) translateY(-10vw) rotateZ(45deg);
                    }
                }

                img{
                    width: 15vw;
                }

                .otavio{
                    position: absolute;
                    width: 2.2vw;
                    border-radius: 50%;
                    top: 28%;
                    left: 58%;
                    transform: rotateZ(40deg);
                }


            }


            .myImage{
                width: 25vw;
                height: 25vw;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: ${({ hiddenImage }) => hiddenImage ? 'reduceImage' : ''};
                animation-delay: 500ms;
                animation-timing-function: linear;
                animation-duration: 4s;
                animation-timing-function: infinite;
                opacity: ${({ hiddenImage }) => hiddenImage ? '1' : '0'};
                position: absolute;
                top: -6%;
                left: 25%;



                @keyframes reduceImage{
                    10%{
                    transform: scale3d(0.6, 0.6, 20);
                    }

                    100%{
                        transform: scale3d(0.1, 0.1, 500);
                    }
                }


                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    animation: ${({ hiddenImage }) => hiddenImage ? 'reduceImage' : ''};
                    animation-delay: 500ms;
                    animation-timing-function: linear;
                    animation-duration: 4s;
                    animation-timing-function: infinite;

                    @keyframes reduceImage{
                        10%{
                        transform: scale3d(0.8, 0.8, 20);
                        }

                        100%{
                            transform: scale3d(0.4, 0.4, 100) rotateZ(27deg);
                            
                        }

                    
                    }

                }
            }

        }
        

    .showItem{
        width: 4vw;
        height: 4vw;
        background: #fff;
        border-radius: 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img{
            width: 2vw;
            cursor: pointer;
        }

        p{
            font-size: 0.8vw;
            margin-top: 0.5vw;
            font-family: 'Permanent Marker', cursive;
        }
        
    }


    }

    #audioFoguete{
        display: none;
    }

            
    

    .TextMotivation{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            color: var(--white);
            font-size: 2.5vw;
            font-family: 'Dela Gothic One', cursive;
        }

        blockquote{
            width: 73%;
            color: var(--white);
            font-family: 'Permanent Marker', cursive;
            font-size: 1.6vw;
        }
    }
`;