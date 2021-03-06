import React, {PureComponent} from 'react'
import styles from './Home.module.css'

// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

export default class Home extends PureComponent {
    render() {
        return (
            <div className={styles.container}>
                <p className='t-greeting'>Приветствуем в почтовом клиенте!</p>
            </div>
        )
    }
}