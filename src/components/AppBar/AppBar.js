import PropTypes from 'prop-types'
import React, { useState } from 'react'
import classnames from 'classnames'
import { onScroll, handleSearch } from '../../logic/api'
import { listOptions } from '../../constants/lists'
import { spellOptions } from '../../constants/spells'

import { Search, Sort } from '.'
import { Button } from '../Button'
import styles from './styles.scss'

const AppBar = React.memo(({
	articles,
	setArticles,
	setActive,
	setLoading,
	setSpells,
}) => {
	const [search, setSearch] = useState('')
	const [filters, setFilters] = useState({})
	const [sort, setSort] = useState('name')
	const [page, setPage] = useState(1)
	const [list, setList] = useState('spells')

	// Handles Initial search
	const handleClick = async () => { setSpells( await handleSearch(list, search, sort)) }

	return (
		<div
			className={classnames(
				styles.bar,
				'layout-row layout-align-space-around-center flex-wrap',
			)}
		>
			<div className="flex-30">
				<Search
					value={search}
					onChange={setSearch}
					onEnterKey={handleClick}
				/>
			</div>
			<div className="flex-15">
				<Sort
					options={listOptions}
					value={list}
					onChange={setList}
				/>
			</div>
			<div className="flex-15">
				<Sort
					options={spellOptions}
					value={sort}
					onChange={setSort}
				/>
			</div>
			<div className={classnames(styles.searchAction, 'flex-15')}>
				<Button
					label="Search"
					onClick={handleClick}
					disabled={!search}
				/>
			</div>
		</div>
	)
})

AppBar.propTypes = {
	articles: PropTypes.array,
	setArticles: PropTypes.func.isRequired,
	setActive: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
}

AppBar.defaultProps = {
	articles: [],
}

export default AppBar
