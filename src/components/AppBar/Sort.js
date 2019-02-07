import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'

const customStyles = {
	control: provided => ({
		...provided,
		backgroundColor: '#f4f4f4',
	}),
	singleValue: provided => ({
		...provided,
		color: '#373737',
	}),
	menu: provided => ({
		...provided,
		backgroundColor: '#f4f4f4',
	}),
	option: (provided, state) => ({
		...provided,
		border: 'none',
		color: state.isSelected ? '#f4f4f4' : '#373737',
		backgroundColor: state.isSelected ? '#373737' : '#f4f4f4',
	}),
}


const Sort = ({ onChange, options }) => (
	<Select
		options={options}
		onChange={
			(sort) => {
				onChange(sort.value)
			}
		}
		styles={customStyles}
	/>
)

export default Sort

Sort.propTypes = {
	onChange: PropTypes.func.isRequired,
}
