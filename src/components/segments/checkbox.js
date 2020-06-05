import React,{useState} from 'react';

function CheckBox(){
	const [checked,setChecked] = useState(false);
	const [checke,setChecke] = useState(false);
	const [check,setCheck] = useState(false);

	return(
		<div>
			<ul>
				<input type="checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
				Breakfast & Lunch
			</ul>
			<ul>
				<input type="checkbox"
					checked={checke}
					onChange={() => setChecke(!checke)}
				/>
				Dinner
			</ul>
			<ul>
				<input type="checkbox"
					checked={check}
					onChange={() => setCheck(!check)}
				/>
				Both
			</ul>
		</div>
	);
}

export default CheckBox;