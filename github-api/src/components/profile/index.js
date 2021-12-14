import React from 'react';
import * as S from './styled'
import useGithub from '../../hooks/github-hooks';
import { Icon } from '@iconify/react';

const Profile = () => {

    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <div>
                <S.WrapperImage src={githubState.user.avatar} alt="User avatar" />
                <S.WrapperLoginName>
                    <a href={githubState.user.html_url} target="_blank"
                        rel="noreferrer">(
                        {githubState.user.login})
                    </a>
                </S.WrapperLoginName>
            </div>
            <S.WrapperInfoUser>

                <h1>{githubState.user.name}</h1>
                <h3> {githubState.user.bio} </h3>

                <S.WrapperUserGeneric>
                    <Icon icon="octicon:organization-16" style={{ fontSize: '16px' }} />
                    <spam> {githubState.user.company}
                    </spam>
                </S.WrapperUserGeneric>
                <S.WrapperUserGeneric>
                    <Icon icon="octicon:location-16" style={{ fontSize: '16px' }} />
                    <spam>{githubState.user.location}
                    </spam>
                </S.WrapperUserGeneric>
                <S.WrapperUserGeneric>
                    <Icon icon="octicon:link-16" style={{ fontSize: '16px' }} />
                    <a href={githubState.user.blog} target="_blank"
                        rel="noreferrer">
                        {githubState.user.blog}
                    </a>

                </S.WrapperUserGeneric>

                <S.WrapperStatusCount>
                    <div>
                        <h4> Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4> Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4> Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4> Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper >

    )
};

export default Profile