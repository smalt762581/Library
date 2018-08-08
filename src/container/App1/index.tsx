import * as React from 'react'
import { Input, Button } from 'antd'
interface IProps {
  test?: any
}

interface IState {
  content?: string // 输入内容
}

class App1 extends React.Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props)
    this.state = {
      content: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleButton = this.handleButton.bind(this)

  }
  handleInput(evt) {
    console.log(evt.target.value)
    if (evt.target.value) {
      this.setState({
        content: evt.target.value
      })
    }

  }
  handleButton() {
    alert(this.state.content)
  }
  // componentWillMount(){

  // }
  // componentDidMount (){

  // }
  // componentWillReceiveProps (nextProps: Iprops) {
  //   if (nextProps.test !== this.props.test) {

  //   }
  // }

  render() {
    return (
      <div>
        <Input onChange={this.handleInput} />
        <div>{this.state.content}</div>
        <Button onClick={this.handleButton}>点击查看输入内容</Button>
      </div>
    )
  }
}

export default App1