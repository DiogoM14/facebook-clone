import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 8px 20px;
  justify-content: space-between;
  position: sticky;
  background: white;
  z-index: 100;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 40px;
  }

  .header__input {
    display: flex;
    width: 210px;
    align-items: center;
    background: #eff2f5;
    padding: 10px;
    margin-left: 10px;
    border-radius: 999px;

    input {
      border: none;
      background: transparent;
      outline-width: 0;
      font-size: 14px;
      margin-left: 5px;
    }
  }
`;

export const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  .header__option {
    display: flex;
    align-items: center;
    padding: 0 40px;
    cursor: pointer;
    transition: background .3s;


    &:hover {
      background: #eff2f5;
      border-radius: 10px;
      align-items: center;
      padding: 0 40px;
      border-bottom: none;
    }
    
    .MuiSvgIcon-root {
      color: gray;
      transition: color .3s;

      &:hover {
        color: #2e81f4;
      }
    }
  }

  .header__option--active {
    border-bottom: 4px solid #2e81f4;
    
    .MuiSvgIcon-root {
      color: #2e81f4;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;

  .header__info {
    display: flex;
    align-items: center;

    h4 {
      margin-left: 10px;
    }
  }
`;
