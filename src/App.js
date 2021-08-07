import React from 'react';
import { NavLink } from "react-router-dom";

export default function App() {

	return (
		<div>
			<div class="transbox">
				<p><em>Thanks for visiting! <br/>Please select your desired topic below.</em></p>
				<br/>
				<br/>
				<NavLink class="nav-links" to="/ABO">1) A, B, O, and H Blood Groups</NavLink>
				<NavLink class="nav-links" to="/HLA">2) Human Leukocyte Antigens</NavLink>
			</div>
		</div>
	);
}
