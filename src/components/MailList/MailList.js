import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import styles from './MailList.module.css'

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

export default class MailList extends PureComponent {
    render() {
        const { data, file } = this.props

        return (
            <div className={`${styles.container} t-${file}-list`}>
                { data.map(
                    ({ id, body }) => <Link to={`/app/${file}/${id}`} className={styles.link} key={id}>
                                        {`${body.slice(0, 50)}...`}
                                    </Link>
                )}
            </div>
        )
    }
}