import * as React from 'react'
import ajax from '../../utils/Ajax'
interface IProps {
    testProps?: any
}
interface IState {
    infos?: any
}
class Ajax extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            infos: []
        }
    }
    componentDidMount() {
        ajax.get('/gank/api/xiandu/categories', {}).then((res: any) => {
            if (res!.results!.length > 0) {
                this.setState({
                        infos: res.results
                    })
                
            }
        })
    }
    render() {
        return (
            <div>
                { this.state.infos && this.state.infos.length > 0 && this.state.infos.map( item => {
                    return <div key={item._id}>{item.en_name}</div>
                })}
            </div>
        )
    }
}
export default Ajax