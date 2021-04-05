import styled from 'styled-components';

export const ContainerDeveloperDiv = styled.div`
    width: 100vw;
    height: 55vw;
    background-color: var(--header-background-color);
    position: relative;
    scroll-behavior: smooth;

    .seta{
        width: 3.5vw;
        position: absolute;
        left: 47.5%;
        top: 0%;
        z-index: 10;
        cursor: pointer;
    }
   

    .titleDev{
        border-top: 0.16vw solid var(--light-gray);
    
        margin: 0 auto;
        width: 95%;
        display: flex;
        justify-content: space-between;


        animation: ${({scroll}) => scroll ? 'showElement' : null};
        animation-duration: 1.5s;
        animation-direction: normal;
        animation-delay: 1;
        transition: 1s;
        opacity: ${({scroll}) => scroll ? '1' : '0'};

        @keyframes showElement{
            from{
                opacity: 0;
                transform: scale3d(0.1, 1, 20)
            }

            to{
                opacity: 1;
                transform: initial;
            }
        }

        h3{
            font-size: 2.3vw;
            color: var(--white);
            font-family: 'Dela Gothic One', cursive;
            margin-right: 2vw;

            &::before{
                content: '< ';
                color: var(--tag-color);
            }

            &::after{
                content: ' >';
                color: var(--tag-color);
            }
        }

        p{
            color: var(--white);
            font-size: 1.9vw;
            font-family: 'Permanent Marker', cursive;
            line-height: 2.8vw;
        }


        img{
            width: 6vw;
            margin-top: -4vw;
        }

        .dev{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 6vw;

            .title{
                display: flex;
                margin-bottom: 4vw;

            }

            .conteudo{
                animation: ${({scroll}) => scroll ? 'showElement' : null};
                animation-duration: 1s;
                animation-direction: normal;
                animation-delay: 1;
                transition: 1s;
                opacity: ${({scroll}) => scroll ? '1' : '0'};

                p{
                    width: 90%;
                }

                
            }     
            

        }



        .project{
            width: 50%;
            margin-top: 6vw;
            border-left: 0.16vw solid var(--light-gray);

            .titleProject{
                width: 100%;
                display: flex;
                justify-content: center;
                margin-bottom: 4vw;
            }

            .listProjects{
                margin: 0 auto;
                width: 90%;
                overflow: hidden;

                p{
                    cursor: pointer;
                    text-align: center;
                }
    
                p:nth-child(2),
                p:nth-child(3),
                p:nth-child(4),
                p:nth-child(5),
                p:nth-child(6),
                p:nth-child(7){
                    margin-top: 2vw;
                    white-space: nowrap;
                }
            }


        }
        

      

        
    }

    


`;
