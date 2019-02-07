import React from 'react'

import ListItem from './ListItem'
import styles from './styles.scss'

const FeatList = ({ feats }) => {

		const featDescription = (featDesc) => {
			const featList = () => Object.entries(featDesc).map(feat => {
				if(feat[0] === 'Description') {
					return null
				}
				if(feat[1]) {
					return (
						<li>
							{feat[1]}
						</li>
					)
				}
				return null
			}
			)

			return (
				<div>
					<div>
						{featDesc.Description}
					</div>
					<ul>
						{featList()}
					</ul>
				</div>
			)
		}

		const featList = () => feats.map(feat => {
			const featDesc = {
				Description: feat.description,
				"Critical Success": feat.crit_success,
				Success: feat.success,
				Failure: feat.fail,
				"Critical Failure": feat.crit_fail,
			}
			return (
				<ListItem
					title={feat.name}
					subtitle={`Level: ${feat.level}`}
					expandable
					description={featDescription(featDesc)}
				/>
			)
		}
		)

		return (
			<div className={styles.featList} >
				{featList()}
			</div>
		)
	}


export default FeatList
