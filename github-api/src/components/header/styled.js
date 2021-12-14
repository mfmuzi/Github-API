import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
width 100%;
justify-content: space-between;
padding: 4px;
color: #11434C;
position: relative;
  


input {
    background-color: #F2F7FC;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 50%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    margin-left:75%  
    
    
}

button {
    background-color: #65ACE0;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;

    &:hover{
        background-color: #489CBF;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
        font-weight: bold;
        color: #ffff;
    }
}
`;