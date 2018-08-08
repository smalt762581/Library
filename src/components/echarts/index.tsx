import * as React from 'react'
import ReactEcharts from 'echarts-for-react'
import Echarts from 'echarts'
import PubSub from 'pubsub-js'
import BROADCAST from '../../components/Summit'
interface IProps {
    test?: any
}
interface IState {
    test?: any,
    echartOption: any,
}

class MyEcharts extends React.Component <IProps, IState> {
    constructor(props: IProps, state: IState) {
        super(props)
        this.getOptions = this.getOptions.bind(this)
    }
    componentDidMount() {
        PubSub.subscribe(BROADCAST, (msg, data) => {
            this.setState({
                echartOption: data
            }, () => {
                console.log(this.state.echartOption)
            })
        })
       const chart = Echarts.init(document.getElementById('myChart'))
       const options = this.state.echartOption
       chart.setOption(options)

    }
    getOptions() {
        return {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }
    render() {
        return (
            <div>
                <ReactEcharts option={this.getOptions()} style={{ width: '100%', height: '500px' }} />
                <div id='myChart' style={{ width: '100%', height: '700px' }} />

            </div>

        )

    }
}
export default MyEcharts