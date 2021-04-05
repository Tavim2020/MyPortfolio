import styled from 'styled-components';

export const ContainerContatoDiv = styled.section`
    width: 100vw;
    height: 90vw;
    
    background-image: url('imagens/mundo-conectado.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 100%;


    
    

    .contatoTitle{
        margin: 0 auto;
        width: 95%;
        height: 12vw;
        transition: 2s;
        opacity: ${({scrollTree}) => scrollTree ? '1' : '0'};
        display: flex;
        justify-content: center;
        padding-top: 6vw;

        h3{
            color: var(--white);
            font-size: 2.3vw;
            font-family: 'Dela Gothic One', cursive;
            margin-right: 2vw;
    
            &::before{
                content: '( ';
                color: var(--tag-color);
            }
    
            &::after{
                content: ' )';
                color: var(--tag-color);
            }
        }

        img{
            width: 6vw;
            margin-top: -4vw;
        }
        
    }
    
    
        
    .context{
        margin: 0 auto;
        margin-top: 4vw;
        width: 95%;
        height: 30vw;
        transition: 2s;
        opacity: ${({scrollTree}) => scrollTree ? '1' : '0'};


        p{
            color: var(--white);
            text-align: center;
            font-size: 1.9vw;
            font-family: 'Permanent Marker', cursive;
        }

        .imageContainer{
            margin: 0 auto;
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 4vw;
                margin-top: 3vw;
                cursor: pointer;
            }

            img:nth-child(1),
            img:nth-child(2){
                margin-right: 2vw;
            }
        }

        .whatsapp{
            margin: 0 auto;
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 3vw;
        

            img{
                width: 5vw;
                cursor: pointer;
            }
        }
    }

`;