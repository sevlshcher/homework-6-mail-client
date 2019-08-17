import React, { PureComponent } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import styles from './AppRouter.module.css'
import Home from '../Home'
import InboxMail from '../InboxMail'
import InboxList from '../InboxList'
import OutboxMail from '../OutboxMail'
import OutboxList from '../OutboxList'

// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

class AppRouter extends PureComponent {
    render() {
        const { match } = this.props
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={`${styles.navList} t-nav-list`}>
                            <li className={styles.navElement}>
                                <NavLink to={`${match.url}/home`} className={`${styles.link} t-link-home`}>Home</NavLink>
                            </li>
                            <li className={styles.navElement}>
                                <NavLink to={`${match.url}/inbox`} className={`${styles.link} t-link-inbox`}>Inbox</NavLink>
                            </li>
                            <li className={styles.navElement}>
                                <NavLink to={`${match.url}/outbox`} className={`${styles.link} t-link-outbox`}>Outbox</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            <Switch>
                                <Route path={match.path} exact render={()=>'Home'} />
                                <Route path={`${match.path}/home`} exact render={()=>'Home'} />
                                <Route path={`${match.path}/inbox`} render={()=>'Inbox'} />
                                <Route path={`${match.path}/outbox`} render={()=>'Outbox'} />
                            </Switch>
                        </h3>
                        <Switch>
                            <Route exact path={match.path} component={Home} />
                            <Route exact path={`${match.path}/home`} component={Home} />
                            <Route path={`${match.path}/inbox/:id`} component={InboxMail} />
                            <Route exact path={`${match.path}/inbox`} component={InboxList} />
                            <Route path={`${match.path}/outbox/:id`} component={OutboxMail} />
                            <Route exact path={`${match.path}/outbox`} component={OutboxList} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppRouter