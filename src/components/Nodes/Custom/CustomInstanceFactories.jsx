import { AbstractInstanceFactory } from 'storm-react-diagrams';
import { CustomNodeModel } from './CustomNodeModel';
import { CustomPortModel } from './CustomPortModel';

export class CustomNodeFactory extends AbstractInstanceFactory<CustomNodeModel> {
	constructor() {
		super('CustomNodeModel');
	}

	getInstance() {
		return new CustomNodeModel();
	}
}

export classCustomPortFactory extends AbstractInstanceFactory<CustomPortModel> {
	constructor() {
		super('CustomPortModel');
	}
	getInstance() {
		return new CustomPortModel();
	}
}