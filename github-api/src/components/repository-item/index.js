import React from 'react';
import * as S from './styled';
import { Icon } from '@iconify/react';

const RepositoryItem = ({name, linkToRepo, fullName, description, forks, star}) => {
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
            <S.WrapperIcon>
            <p><Icon class="icons" icon="octicon:repo-forked-16" style={{ fontSize: '16px' }} /> {forks}</p>
            <p><Icon class="icons2" icon="octicon:star-16" style={{ fontSize: '16px' }} />  {star}
            </p>
            </S.WrapperIcon>
           
        </S.Wrapper>
    )
}

export default RepositoryItem