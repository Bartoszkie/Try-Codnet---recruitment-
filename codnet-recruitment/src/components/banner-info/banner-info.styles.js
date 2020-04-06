import styled from 'styled-components';

export const BannerInfoContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center; 

    padding: 2rem 4rem;
    box-shadow: 0px 20px 60px #A3ABBA66;
    border-radius: 5px;

    background-color: #fff;
    width: 80%;

    position: absolute;
    z-index: 100;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const BannerInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

