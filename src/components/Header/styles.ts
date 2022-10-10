import styled from "styled-components";

export const ContainerFixed = styled.div`
  width: 100%;
  max-width: 90rem;
  position: fixed;

  background: ${props => props.theme.background};
`

export const HeaderContainer = styled.div`
  display: flex;

  padding: 2rem;
  max-width: 74rem;
  margin: 0 auto;
 
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  
  border: 0;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const ButtonLocation = styled(BaseButton)`
  color: ${props => props.theme.purpleDark};
  background: ${props => props.theme.purpleLight};
  padding-right: 0.75rem;
  cursor: default;

  @media (max-width: 560px) {
    display: none;
  }
`;

interface ButtonCartProps {
  amount?: number
}

export const ButtonCart = styled(BaseButton)<ButtonCartProps>`
  color: ${props => props.theme.yellowDark};
  background: ${props => props.theme.yellowLight};

  :disabled {
    cursor: not-allowed;
  }

  > span {
    border-radius: 9999px;
    width: 1.25rem;
    height: 1.25rem;
    
    background: ${props => props.theme.yellowDark};
    color: ${props => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;

    display: ${props => props.amount ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    align-self: center;

    position: absolute;

    margin-top: -2.188rem;
    margin-right: -2.188rem;
  }
`;

