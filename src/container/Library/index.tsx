import * as React from 'react'
import {Button} from 'antd'
import Books from './books'
interface IProps {
    test?: any
}
interface IState {
    test?: any
}
class Library extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }
    componentDidMount() {
       
    }
    render() {
        return (
            <div>
                <Books />
                <Button>添加</Button>
            </div>
        )
    }
}
export default Library