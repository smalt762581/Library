import * as React from 'react'
import {Input, Button} from 'antd'
interface IProps {
    nums: any,
    addNewTask?: (content?: any) => void

}
interface IState{
    test? :any
}

class Info extends React.Component <IProps, IState> {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        var len = this.props.nums;
        var newid = len > 0 ? len : 0;
        var value = this.refs.myText.value
        if (value !== '') {
            var obj = {
                id: newid,
                name: value,
                status: 0
            };
            this.refs.myText.value = ''
            this.props.addNewTask!(obj)
        }
    }
    refs: {
        'myText': HTMLInputElement
    }
    render() {
        return (
            <div className='dialog'>
                <div>
                    <h3>Task</h3>
                    <Input ref='myText' />
                </div>
                <div>
                    <Button type='default' value='Save Task' onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}
export default Info