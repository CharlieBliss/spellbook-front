import React from 'react'

import ListItem from './ListItem'
import styles from './styles.scss'

const SpellList = ({ spells }) => {

		const spellDescription = (spellDesc) => {

			const spellList = () => Object.entries(spellDesc).map(spell => {
				if(spell[0] === 'Description') {
					return null
				}
				if(spell[1]) {
					return (
						<li>
							{`${spell[0]}: ${spell[1]}`}
						</li>
					)
				}
				return null
			}
			)

			return (
				<div>
					<div>
						{spellDesc.Description}
					</div>
					<ul>
						{spellList()}
					</ul>
				</div>
			)
		}

		const spellList = () => spells.map(spell => {
			const spellDesc = {
				Description: spell.description,
				"Critical Success": spell.crit_success,
				Success: spell.success,
				Failure: spell.fail,
				"Critical Failure": spell.crit_fail,
			}
			return (
				<ListItem
					title={spell.name}
					subtitle={`Level: ${spell.level}`}
					expandable
					description={spellDescription(spellDesc)}
				/>
			)
		}
		)

		return (
			<div className={styles.spellList} >
				{spellList()}
			</div>
		)
	}


export default SpellList
