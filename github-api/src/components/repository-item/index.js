import React from 'react';
import * as S from './styled';

const RepositoryItem = ({name, linkToRepo, fullName, description}) => {
    return (
        <S.Wrapper>
            <S.WrapperTitle>
            {name}
            </S.WrapperTitle>
            <S.WrapperFullName>
                Link: <S.WrapperLink href={linkToRepo} target="_blank"
                rel="noreferrer">
                {fullName}
            </S.WrapperLink>
            </S.WrapperFullName>
            
            <S.WrapperFullName>
                Description:
            </S.WrapperFullName>
            <S.WrapperDescription>
                {description}
            </S.WrapperDescription>
        </S.Wrapper>
    )
}

export default RepositoryItem