import * as React from 'react'
import Items from './Items'
import Info from './Info'
interface IProps {
    test? : any
}
interface IState {
    list? : any,
    finished? : number
}
class TodoList extends React.Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                id: 0,
                name: '吃饭',
                status: 0
            }, {
                id: 1,
                name: '睡觉',
                status: 0
            }, {
                id: 2,
                name: '打豆豆',
                status: 0
            }],
            finished: 0
        };
    }
    addTask(newitem) {
        var allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }
    updateFinished(todoItem) {
        var sum = 0;
        this.state.list.forEach((item) => {
            if (item.id === todoItem.id) {
                item.status = todoItem.status;
            }
            if (item.status === 1) {
                sum++;
            }
        });
        this.setState({
            finished: sum
        });
    }
    updateTotal(todoItem) {
        var obj: Array<any> =[], sum = 0;
        this.state.list.forEach(it => {
            if (it.id !== todoItem.id) {
                obj.push(it);
                if (it.status === 1) {
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        });
    }
    render() {
        return (
            <div className='container'>
                <h1>TodoList</h1>
                <ul>
                    {this.state.list.map((item, index) =>
                        <Items
                            item={item}
                            finishedChange={this.updateFinished.bind(this)}
                            totalChange={this.updateTotal.bind(this)}
                            key={index}
                        />
                    )}
                    <li>{this.state.finished}已完成&nbsp;/&nbsp;{this.state.list.length}总数</li>
                </ul>
                <Info addNewTask={this.addTask.bind(this)} nums={this.state.list.length} />
            </div>
        );
    }
}
export default TodoList;