import styled from "styled-components";

export const HomeContainer = styled.main`
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  flex: 1;

  padding-top: 6.5rem;
`

export const HomeBackground = styled.div`
  flex: 1;
  max-width: 90rem;

  background-image: url('./src/assets/background_home.svg');
  background-repeat: no-repeat;
`

export const HomeIntro = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 8rem;

  @media (max-width: 800px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 560px) {
    padding-bottom: 2rem;
  }

  max-width: 74rem;

  > div {
    max-width: 36.75rem;

    @media (max-width: 960px) {
      max-width: 80%;
    }
    @media (max-width: 770px) {
      max-width: 90%;
    }
    @media (max-width: 690px) {
      max-width: 100%;
    }
  }

  > img {
    max-width: 29.75rem;
    max-height: 22.5rem;

    @media (max-width: 960px) {
      display: none;
      width: 0;
      height: 0;
    }
    
  }
`

export const HomeTitle = styled.h1`
  font-weight: 800;
  font-family: 'Baloo 2';
  font-size: 3rem;
  line-height: 3.875rem;
  color: ${props => props.theme.title};
`

export const HomeSubtitle = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;

  margin-top: 1rem;
`

export const HomeDetails = styled.div`
  display: grid;
  grid-template-columns: 2fr 50%;

  
  gap: 1.25rem;
  
  margin-top: 4.125rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 2.125rem;
  }

  > div {
    display: flex;
    
    align-items: center;

    gap: 0.75rem;

    > span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
`

interface IconProsp {
  colorIcon: string;
}

export const IconWithBackground = styled.div<IconProsp>`
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  max-width: 2rem;
  max-height: 2rem;

  background: ${props => props.colorIcon};
  border-radius: 1000px;
`

export const HomeProducts = styled.div`
  flex: 1;
  height: 34rem;
  max-width: 90rem;
`

export const TitleList = styled.div`
  font-weight: 800;
  font-family: 'Baloo 2';
  font-size: 2rem;

  max-width: 74rem;
  margin: 0 auto;

  padding: 2rem;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 74rem;

  padding: 2rem;
  margin: 0 auto;

  align-items: center;
  justify-content: center;
`

export const ListProducts = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }

  gap: 3rem 1.5rem;

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    max-width: 16rem;
    padding: 1.25rem;

    background: ${props => props.theme.card};

    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;

    border-top-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;

    gap: 8px;

    > img {
      height: 7.5rem;
      margin-top: -2.5rem;
    }

    > span {
      font-family: 700;
      font-family: 'Baloo 2';
      font-size: 1.25rem;
      line-height: 1.625rem;
    }

    > p {
      font-size: 0.875rem;
      text-align: center;
      color: ${props => props.theme.label};
    }

    > div {}
  }
`

export const Tags = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  > strong {
    padding: 0.25rem 0.5rem;

    font-size: 0.625rem;

    color: ${props => props.theme.yellowDark};
    background: ${props => props.theme.yellowLight};

    border-radius: 6.25rem;
  }
`

export const FooterCart = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;

  > span {
    font-size: 0.875rem;

    > span {
      font-size: 1rem;
    }

    > strong {
      font-weight: 800;
      font-family: 'Baloo 2';
      font-size: 1.5rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 2.375rem;
    width: 5.688rem;
    padding: 0.25rem;

    background: ${props => props.theme.button};
    
    border-radius: 0.375rem;

    > button {
      display: flex;
      border: 0;
      background: transparent;
      align-items: center;
      justify-content: center;
      padding: 0.375rem;

      &:hover {
        cursor: pointer;
        background: ${props => props.theme.hover};
        border-radius: 0.25rem;
      }
    }
  }

  > button {
    display: flex;
    border: 0;
    padding: 0.5rem;
    background: ${props => props.theme.purple};
    border-radius: 0.375rem;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }

    :disabled {
      cursor: not-allowed;
    }
  }
`