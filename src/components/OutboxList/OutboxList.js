import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

class OutboxList extends PureComponent {
    render() {
        const { data } = this.props
        return <MailList data={data.outbox} file={'outbox'} />
    }
}

export default withData(OutboxList)