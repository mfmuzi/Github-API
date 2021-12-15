import React from 'react'
import App from './App'
import { ResetCSS } from './global/resetCSS'
import GithubProvider from './providers/github-provider'
import background from './assets/img/background.png'



const Providers = () => {
    return (
        <main style={{ backgroundImage:`url(${background})`,backgroundSize:"cover",height: "100vh", }}>            
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    )
}


export default Providers