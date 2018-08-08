import * as React from 'react'
import Ajax from '../../utils/Ajax'
import Book from './book'
import { Button, Modal, Input } from 'antd'

// import PubSub from 'pubsub-js'
interface IProps {
    test?: any
}
interface IState {
    test?: any,
    books: any,
    visible: boolean
 //   addBook?: any
}
// export default const ADDITEM = 'addItem' 
class Books extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            books: [],
            visible: false,
            // addBook: {
            //     name: '',
            //     content: '',
            //     labels: '',
            //     author: ''
            // }
        }
        // this.nameText = React.createRef()
        this.getBooksFn = this.getBooksFn.bind(this)
        this.addItemFn = this.addItemFn.bind(this)
    //    this.addBookTo = this.addBookTo(this)
    }
    public getBooksFn() {
        Ajax.get('/myBooks/books', {}).then((res: any) => {
            console.log(res.data)
            if (res!.data!.length > 0) {
                this.setState({
                    books: res.data
                })
            }
        })
    }
    componentWillMount() {
        this.getBooksFn()
    }
    handleOk = (e) => {
        console.log(e);
         this.setState({
            visible: false,
        });
        let name = this.refs.nameText['input'].value
        let content = this.refs.contentText['input'].value
        let labels = this.refs.labelsText['input'].value
        let author = this.refs.authorText['input'].value
        let addBook = 'name=' + name + '&content=' + content + '&labels=' + labels + '&author=' + author
        console.log(addBook)
       
        this.addBookTo(addBook)
        // this.setState({
        //     addBook: {
        //         name: this.refs.nameText['input'].value,
        //         content: this.refs.contentText['input'].value,
        //         labels: this.refs.labelsText['input'].value,
        //         author: this.refs.authorText['input'].value
        //     }
        // },() => {
        //     console.log(this.state.addBook)
        // })
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    addBookTo(data) {
        console.log(data)
        Ajax.get('/myBooks/books/add?+ data', {}).then((res: any)=>{
            console.log(res)
            if (res!.length>0) {
                this.getBooksFn()
            }
        }) 
    }
    addItemFn() {
        this.setState({
            visible: true,
        })
    }
    refs:{
        [key: string]: any,
        nameText: HTMLInputElement,
        contentText: HTMLInputElement,
        labelsText: HTMLInputElement,
        authorText: HTMLInputElement
    }
    render() {
        return (
            <div>
                <Button onClick={this.addItemFn}>添加</Button>
                {this.state.books.map((item, index) => {
                    return (
                        <div key={index}>
                            <Book receivedBook={item} />
                        </div>
                    )
                })}
                <Modal
                    title='添加'
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <span>name</span><Input ref='nameText'/>
                    <span>content</span><Input ref='contentText'/>
                    <span>labels</span><Input ref='labelsText'/>
                    <span>author</span><Input ref='authorText'/>
                </Modal>
            </div>
        )
    }
}
export default Books