import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to="demo8">Demo 8</Link> - Custom DnD
					</li>
				</ul>
			</div>
		);
	}
}

export default Menu;
