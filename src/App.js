import React, { useState } from "react"
import 'react-material-layout/dist/react-material-class-layout.min.css'
import { AppBar } from './components/AppBar'
import SpellList from './components/List/SpellList'
import FeatList from './components/List/FeatList'


import styles from './styles.scss'

const App = React.memo(() => {
	const [spells, setSpells] = useState([])
	const [feats, setFeats] = useState([])



	return(
		<div className={styles.app}>
			<AppBar setSpells={setSpells} />
			<div className={styles.content}>
				<SpellList spells={spells} />
				<FeatList feats={feats} />
			</div>
		</div>
	)
})

export default App;
