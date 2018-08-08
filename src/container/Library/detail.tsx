import * as React from 'react'

interface IProps {
    test?: any,
    receivedBook: any
}
interface IState {
    test?: any,
    detail: any
}
class Detail extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            detail: this.props.receivedBook ? this.props.receivedBook : {}
        }
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.receivedBook !== this.props.receivedBook) {
            this.setState({
                detail: nextProps.receivedBook
            })
        }
    }
    deleteItem(){
    
    }
    render() {
        return (
            <div>
                {/*{
                    this.state.bookInfos && (<span>{this.state.bookInfos.name}</span>)
                }*/}
                <ul>
                    <li>{this.state.detail.name}</li>
                    <li>{this.state.detail.author}</li>
                    <li>{this.state.detail.content}</li>
                    <li>{this.state.detail.labels}</li>
                </ul>

            </div>
        )
    }
}
export default Detail