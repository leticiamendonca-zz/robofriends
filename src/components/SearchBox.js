import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Find me a robot!' 
			onChange={searchChange}
			//the TARGET property problem was in searchChange.
			//Had written - {searchChange()}
			/>
		</div>
		);
}

export default SearchBox;