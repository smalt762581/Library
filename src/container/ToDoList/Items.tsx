import React, { Component } from 'react'
import {Button} from 'antd' 
interface IProps {
    item :{
        status  : any,
        id: number,
        name :any
    }
    finishedChange? : (content?: any) => void,
    totalChange? : (content? : any) => void
}
interface IState {
    test? : any
}


class ListItem extends Component <IProps, IState> {
	constructor (props) {
		super(props);

		this.handleFinished = this.handleFinished.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	} 

	handleFinished () {
		var status = this.props.item.status;

		status = (status === 0 ? 1 : 0);

		var obj = {
			id: this.props.item.id,
			name: this.props.item.name,
			status: status
		}
		
		this.props.finishedChange!(obj);	
	}

	handleDelete () {
		this.props.totalChange!(this.props.item)
	}

	render () {
		const item = this.props.item;

		const unfinish = {
			backgroundColor: '#DFFCB5',
			color: '#2EB872',
		};

		const finish = {
			backgroundColor: '#FFFA9D',
			color: '#FF9A3C',
			textDecoration: 'line-through'
		}

		var itemStyle = item.status === 0 ? unfinish : finish;
		
		return (
			<li key={item.id} style={itemStyle}>
				<span 
					onClick={this.handleFinished} 
					id={item.id.toString()}
					className="check-btn"
					style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}
				></span>
				<span>{ item.name }</span>
				<Button onClick={this.handleDelete} className="delete-btn">删除</Button>
			</li>
		);
	}
}

export default ListItem;