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
        padding-top: 6vw;
        margin: 0 auto;
        width: 95%;
        display: flex;


        animation: ${({scroll}) => scroll ? 'showElement' : null};
        animation-duration: 1s;
        animation-direction: normal;
        animation-delay: 1;
        transition: 1s;
        opacity: ${({scroll}) => scroll ? '1' : '0'};

        @keyframes showElement{
            from{
                opacity: 0;
                transform: translateY(5vw);
            }

            to{
                opacity: 1;
                transform: translateY(0);
            }
        };
        

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

        img{
            width: 6vw;
            margin-top: -3.5vw;
        }

        
    }

    .conteudo{
        margin: 0 auto;
        margin-top: 4vw;
        width: 95%;

        animation: ${({scroll}) => scroll ? 'showElement' : null};
        animation-duration: 1s;
        animation-direction: normal;
        animation-delay: 1;
        transition: 1s;
        opacity: ${({scroll}) => scroll ? '1' : '0'};

        p{
            width: 45%;
            color: var(--white);
            font-size: 1.9vw;
            font-family: 'Permanent Marker', cursive;
            line-height: 2.8vw;
        }
    }     


`;
