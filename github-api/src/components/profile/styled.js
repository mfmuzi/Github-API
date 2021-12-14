import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
aling-items: center;
`;

export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
margin-top: 16px;
div {
    margin: 8px;
    text-align: center;
}
`;

export const WrapperUserGeneric = styled.div`
display: flex;
align-items: center;
margin-top: 8px;
h3 {
    margin-right: 8px;
}
a{
    color: grey;
    font-weight: bold;
    font-size: 18px;
}
`;

export const WrapperInfoUser = styled.div`
display: flex;
flex-direction: column;
hight: 200px;
width:80%;
margin-left: 8px;



h1{
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 32px;
    margin-top: 16px;
    text-decoration: underline;    

}
h3{
    text-align: center;   
    font-size: 18px;
    margin-bottom:50px; 
    

}
h4{
    font-size: 16px;
    font-weight: bold;

}
a{    
    color: grey;
    font-weight: bold;
    font-size: 14px;
    margin-left:5px;
}
spam{
    padding: 5px;
    font-size:14px;
}
`;

export const WrapperImage = styled.img`
border-radius: 50%;
width: 200px;
height:200px;
margin: 8px;
margin-top:120px;
border: 2px solid #ccc;
`;

export const WrapperLoginName = styled.div`
    display:flex;
    justify-content: center;    
    color: grey;
    font-weight: bold;
    font-size: 18px;
`;
