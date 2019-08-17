import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

class InboxList extends PureComponent {
    render() {
        const { data } = this.props
        return <MailList data={data.inbox} file={'inbox'} />
    }
}

export default withData(InboxList)