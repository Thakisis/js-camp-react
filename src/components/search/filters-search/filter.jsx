import React from "react";

function Filter({ field, label, options }) {
	const optionsList = options.map((option) => (
		<option key={option.key} value={option.key}>
			{option.name}
		</option>
	));
	return (
		<select name={field}>
			<option>{label} </option>
			{optionsList}
		</select>
	);
}

export default Filter;
