import React, { useState } from 'react'

import styles from './styles.scss'

const Button = ({ onClick, label, loading }) => {
	return (
		<button
			className={styles.button}
			onClick={onClick}
			loading={loading}
		>
			{label}
		</button>
	)
}

export default Button