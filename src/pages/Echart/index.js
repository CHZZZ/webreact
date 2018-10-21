import React, {Component} from "react"
import Groupedcolumn from "./DList"
import Labelline from "./Labelline"
import Curved from './LChart'

class Echarts extends Component {
  render() {
    return (
        <div>
        <div style={{width: 'calc(100% - 135px)'}}>
            <Labelline />
        </div>
        <Groupedcolumn />
        <Curved />
      </div>
    );
  }
}

export default Echarts
