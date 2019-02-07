import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import classnames from 'classnames'
import styles from './styles.scss'

const ListItem = ({ title, subtitle, description, expandable }) => {
	const [expanded, setExapanded] = useState(false)


	return (
		<div
			className={styles.listItem}
			onClick={() => setExapanded(!expanded)}
		>
			<div className={styles.title}>
				{title.toLowerCase()}
			</div>
			<div className={styles.subtitle}>
				{subtitle}
			</div>
			<Collapse isOpened={expanded} >
				<div className={styles.collapse}>
					{description}
				</div>
				<div className={styles.fake} />
			</Collapse>
		</div>
	)
}

export default ListItem
