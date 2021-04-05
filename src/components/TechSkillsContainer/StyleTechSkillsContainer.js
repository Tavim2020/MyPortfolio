import styled from 'styled-components';


export const TechSkillsContainerDiv = styled.section`
    width: 100vw;
    height: 66vw;
    background-image: url('imagens/backgroundDesktop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    background-attachment: fixed;
    animation: ${({scrollTwo}) => scrollTwo ? 'crescentImage' : ''};
    animation-duration: 3s;
    animation-delay: 1;
    opacity: ${({scrollTwo}) => scrollTwo ? '1' : '0'};

    @keyframes crescentImage{
        from{
            opacity: 0;
            transform: translateY(5vw);
        }

        to{
            opacity: 1;
            transform: initial;
        }   
    }
    

    .TitleTechSkills{
        margin: 0 auto;
        width: 95%;
        /* border-top: 0.16vw solid var(--light-gray); */
        padding-top: 6vw;
        display: flex;
        justify-content: center;
        margin-bottom: 6vw;
        

        h3{
            font-size: 2.3vw;
            color: var(--white);
            font-family: 'Dela Gothic One', cursive;
            margin-right: 2vw;

            &::before{
                content: '{ ';
                color: var(--tag-color);
            }

            &::after{
                content: ' }';
                color: var(--tag-color);
            }

        }


        img{
            width: 6vw;
            margin-top: -4vw;
        }
        
    }



    .ContainerGeralSkills{
        margin: 0 auto;
        width: 95%;
        height: 45vw;
        display: grid;
        grid-template-areas: 
        'a b c'
        'd e f'
        'g h i';


        .a{
            grid-area: a;
        }

        .b{
            grid-area: c;
        }

        .c{
            grid-area: e;
        }

        .d{
            grid-area: g;
        }

        .e{
            grid-area: i;
        }
        
        .containerSkills{
            margin: 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
            

            .skills{
                width: 15vw;
                height: 15vw;
                background: var(--light-gray);
                border-radius: 1.2vw;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                img{
                    width: 7vw;
                    cursor: pointer;
                }

                .one{
                    background-color: #FF5722;
                };

                .two{
                    background-color: #6DA75D;
                };

                .tree{
                    background-color: #E4BA42;
                };

                .four{
                    background-color: #6DAFE0;
                };

                .five{
                    background-color: #2196F3;
                };



                .barPorcent{
                    width: 70%;
                    height: 10%;
                    border-radius: 2.4vw;
                    margin-top: 1vw;
                    transition: 2s;
                    opacity: 0;

                    span{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.2vw;
                        color: var(--white);
                        font-family: 'Dela Gothic One', cursive;
                    }
                }

                img:hover ~ .barPorcent{
                    opacity: 1;
                }
            }
            
                
        }
    }


`;