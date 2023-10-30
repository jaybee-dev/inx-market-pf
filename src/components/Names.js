import '../styles/Names.css'
import { t } from 'i18next'

function Names({ setActiveName, names, activeName }) {
	return (
		<div className='inx-eco-cat'>
			<select
				value={activeName}
				/* add function to reset form on change */
				onChange={(e) => { setActiveName(e.target.value) }}
				className='inx-eco-name-select'
			>
				<option value=''>Choisissez votre dino</option>
				{names.map((cat) => (
					<option key={cat} value={cat}>
						{t(cat)}
					</option>
				))}
			</select>
		</div>
	)
}

export default Names