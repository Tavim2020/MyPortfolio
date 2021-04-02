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