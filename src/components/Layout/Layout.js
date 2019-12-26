import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) =>(

	<Aux>
		<div>
		<h1 className={classes.title}> I love Burger</h1>
		</div>

		<main className={classes.Content}>
			{props.children}
		</main>
	</Aux>
);

export default layout;