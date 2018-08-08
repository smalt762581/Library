import * as React from 'react'
import { Button } from 'antd'

interface IProps {
    test?: any,
    receivedBook: any
}
interface IState {
    test?: any,
    bookInfos: any
}
class Book extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            bookInfos: this.props.receivedBook ? this.props.receivedBook : {}
        }
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.receivedBook !== this.props.receivedBook) {
            this.setState({
                bookInfos: nextProps.receivedBook
            })
        }
    }
    deleteItem(){
        console.log("dede")
    }
    render() {
        return (
            <div>
                {/*{
                    this.state.bookInfos && (<span>{this.state.bookInfos.name}</span>)
                }*/}
                <div>
                    <span>{this.state.bookInfos.name}</span>
                    <span>{this.state.bookInfos.author}</span>
                    <Button onClick={this.deleteItem}>查看详情</Button>
                    <Button onClick={this.deleteItem}>删除</Button>
                </div>

            </div>
        )
    }
}
export default Book