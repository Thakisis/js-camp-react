import React from "react";

function Filter({ field, label, options, value, changeFilter }) {
	const optionsList = options.map((option) => (
		<option key={option.key} value={option.key}>
			{option.name}
		</option>
	));
	const handleChange = (e) => {
		changeFilter(field, e.target.value);
	};
	return (
		<select name={field} onChange={handleChange} value={value}>
			<option value="">{label} </option>
			{optionsList}
		</select>
	);
}

export default Filter;
