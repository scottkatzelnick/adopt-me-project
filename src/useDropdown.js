import React, { useState } from 'react';

//=> Functional component for form dropdown elements
const useDropdown = (label, defaultState, options) => {
	//=> Custom hooks to pass back to form
	const [state, setState] = useState(defaultState);
	const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

	//=> Template for html dropdown element with label
	const Dropdown = () => (
		<label htmlFor={id}>
			{label}
			<select
				id={id}
				value={state}
				onChange={(e) => setState(e.target.value)}
				//* onBlur required for accessibility
				onBlur={(e) => setState(e.target.value)}
				disabled={options.length === 0}>
				<option>All</option>
				{options.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</label>
	);

	//=> Passing custom hooks back to SearchParams component
	return [state, Dropdown, setState];
};

export default useDropdown;
