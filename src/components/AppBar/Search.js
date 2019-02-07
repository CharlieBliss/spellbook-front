import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.scss'

const Search = React.memo(({ value, onChange, onEnterKey }) => {
	const handleChange = (e) => {
		e.preventDefault()
		onChange(e.target.value)
	}

	const handleKeyPress = (e) =>{
		if (e.key === 'Enter' && value) {
			e.preventDefault()
			onEnterKey()
		}
	}
	return (
		<div className={styles.bar}>
			<input
				className={styles.search}
				type="text"
				onChange={handleChange}
				onKeyPress={handleKeyPress}
				value={value}
				placeholder="Search"
			/>
		</div>
	)
})

export default Search

Search.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	onEnterKey: PropTypes.func.isRequired,
}

Search.defaultProps = {
	value: '',
}
