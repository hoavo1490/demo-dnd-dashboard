import React from 'react';
import Lodash from 'lodash';
import {
	DiagramWidget,
	DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory,
	DefaultNodeModel,
	DefaultPortModel
} from 'storm-react-diagrams';
import TrayWidget from './components/TrayWidget';
import TrayItemWidget from './components/TrayItemWidget';

import './srd.css';

class DemoEight extends React.Component {
	componentWillMount() {
		this.engine = new DiagramEngine();
		this.engine.registerNodeFactory(new DefaultNodeFactory());
		this.engine.registerLinkFactory(new DefaultLinkFactory());
    }
    render(){
        return(
            <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", gridGap: 10 }}>
            <div className="column1">
            <div className="content">
				<TrayWidget>
					<TrayItemWidget model={{ type: 'in' }} name="Population" color="#AADDDD" />
					<TrayItemWidget model={{ type: 'out' }} name="Birth Place" color="#AADDDD" />
					<TrayItemWidget model={{ type: 'in' }} name="Top 100 Given Name" color="#AADDDD" />
					<TrayItemWidget model={{ type: 'out' }} name="Income" color="#AADDDD" />                    
					<TrayItemWidget model={{ type: 'in' }} name="Label Market Indicator " color="#AADDDD" />
					<TrayItemWidget model={{ type: 'out' }} name="Top 10 Car brands" color="#AADDDD" />
					<TrayItemWidget model={{ type: 'in' }} name="City Bike" color="#AADDDD" />
					<TrayItemWidget model={{ type: 'out' }} name="Transportation Stop" color="#AADDDD" />
					<TrayItemWidget model={{ type: 'in' }} name="Location" color="#AADDDD" />
					<TrayItemWidget model={{ type: 'out' }} name="Map Pointers" color="#AADDDD" />                                        
				</TrayWidget>
            </div>
            </div>
            <div className="column2">
            <div
					className="diagram-layer"
					onDrop={event => {
						var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
						var nodesCount = Lodash.keys(this.engine.getDiagramModel().getNodes()).length;
                        var node = null;
						if (data.type === 'in') {
							node = new DefaultNodeModel(' ', '#AADDDD');
							node.addPort(new DefaultPortModel(true, 'in-1', 'Example Widget'));
						} else {
							node = new DefaultNodeModel(' ', '#AADDDD');
							node.addPort(new DefaultPortModel(false, 'out-1', 'Example Widget'));
                        }
						var points = this.engine.getRelativeMousePoint(event);
						node.x = points.x;
						node.y = points.y;
						this.engine.getDiagramModel().addNode(node);
						this.forceUpdate();
					}}
					onDragOver={event => {
						event.preventDefault();
                    }}
				>
				<DiagramWidget diagramEngine={this.engine} />
				</div>                
            </div>
            <div>Column 3</div>
          </div>
        )
    }
}

export default DemoEight;