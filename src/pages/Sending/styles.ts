import styled from 'styled-components'

export const SendingContainer = styled.div`
  background: ${props => props.theme.background};
  flex: 1;
  display: flex;

  padding-top: 8rem;
  height: 100vh;
`

export const SendingContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
    
  padding: 2rem;
  max-width: 74rem;
  margin: 0 auto;

  > span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme.yellowDark};

    & + span {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1.25rem;
      color: ${props => props.theme.subtitle};
      margin-bottom: 1.75rem;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 5.563rem;
  }
`

export const ShippingDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid ${props => props.theme.purpleDark};

  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;
  border-top-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;

  padding: 2.5rem;
`

export const ShippingDetailsContent = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;
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

export const ImageContainer = styled.div`
  display: flex;
  
  @media (max-width: 900px) {
      display: none;
    }

  > img {
    max-height: 18.313rem;
    max-width: 30.75rem;

    @media (max-width: 1300px) {
      max-height: 14.875rem;
      max-width: 25rem;
    }
    @media (max-width: 1000px) {
      max-height: 13rem;
      max-width: 21.875rem;
    }
  }
`
export const ButtonToHome = styled.button`
  display: flex;
  max-width: 12.5rem;
  margin-left: 0;
  text-decoration: underline;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${props => props.theme.purple};
`