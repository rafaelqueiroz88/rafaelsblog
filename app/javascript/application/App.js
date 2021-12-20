import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavigationBar from '../layout/NavgationBar'
// import Chat from '../layout/Chat'
import Footer from '../layout/Footer'
import Posts from './Posts'
import { New as NewPost } from './Posts/New'
import { Show as ShowPost } from './Posts/Show'
import { Update as UpdatePost } from './Posts/Update'
import Profile from './Profile'
import { ImageAttacher as PostImageAttacher } from './Posts/ImageAttacher'

const App = () => {

    return(
        <Fragment>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/publicacoes" component={Posts} />
                <Route exact path="/publicacoes/nova" component={NewPost} />
                <Route exact path="/publicacoes/:slug" component={ShowPost} />
                <Route exact path="/publicacoes/atualizar/:slug" component={UpdatePost} />
                <Route exact path="/perfil" component={Profile} />
                <Route exact path="/publicar/anexar/:slug" component={PostImageAttacher} />
            </Switch>
            <Footer />
            {/* <Chat /> */}
        </Fragment>
    )
}

export default App