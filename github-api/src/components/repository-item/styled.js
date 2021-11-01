import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: #F2F7FC;
padding: 20px;

border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 20em;
  height: auto;
 
  
  &:hover{    
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
}
`;

export const WrapperTitle = styled.h2`
font-size: 18px;
font-weight: bold;
text-align: center;
text-decoration: underline;
margin-bottom: 24px;
`;

export const WrapperFullName = styled.h2`
font-size: 16px;
font-weight: bold;
margin-bottom: 24px;
color: #2d3748;
`;

export const WrapperLink = styled.a`
font-size: 16px;
font-weight: bold;
margin: 8px 0;
color: #3182ce;
`;

export const WrapperDescription = styled.h2`
font-size: 14px;
text-align: center;
margin-top: -15px;
`;