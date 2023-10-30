import { useState } from 'react'
import {dinoList} from '../datas/dinoList'
import DinoItem from './DinoItem'
import '../styles/Calculate.css'
import '../styles/Names.css'
import { t } from 'i18next'

function Calculate() {
    const [activeName, setActiveName] = useState('')

    const [stat1, setStat1] = useState('')
    const [stat2, setStat2] = useState('')

/* function to reset form at each dino change (and so, reset the price) */
function resetForm() {
    setStat1('')
    setStat2('')
}

const names = dinoList.reduce(
    (acc, dino) =>
        acc.includes(dino.name) ? acc : acc.concat(dino.name),
        []
    )

    return (
        <div className='inx-eco-calc'>
            <div className='inx-eco-cat'>
                <select
                    value={activeName}
                    /* add function to reset form on change */
                    onChange={(e) => { setActiveName(e.target.value); resetForm() }}
                    className='inx-eco-name-select'
                >
                    <option value=''>{t('choose_dino')}</option>
                    {names.map((cat) => (
                        <option key={cat} value={cat}>
                            {t(cat)}
                        </option>
                    ))}
                </select>
            </div>

            <div className='inx-eco-wrap'>
                {dinoList.map(({ id, name, category, price, neutedPrice, nameStat1, nameStat2}) => 
                    activeName === name ? (
                    
                    <div className='inx-eco-main-container' key={id}>
                        <div className='inx-eco-calc-stats'>
                            <div className="inx-eco-stat-container">
                                <label>{t(nameStat1)}</label><br/>
                                {nameStat1 === '' ? <p>{t('unique_price')} : {price}</p> :
                                <input className="inx-eco-stat" id='stat1' type="number" placeholder={t(nameStat1)} value={stat1} onChange={(e) => setStat1(e.target.value)} />
                                }
                            </div>
                            <div className="inx-eco-stat-container">
                                <label>{t(nameStat2)}</label><br/>
                                {nameStat2 === '' ? null : 
                                <input className="inx-eco-stat" id="stat2" type="number" placeholder={t(nameStat2)} value={stat2} onChange={(e) => setStat2(e.target.value)} />
                                }
                            </div>
                        </div>

                        <DinoItem 
                            name={t(name)}
                            category={category}
                            price={Math.round( ( (price*(Math.round(stat1)/255)) + (price*(Math.round(stat2)/255)) )/100 )*100}
                            neutedPrice={Math.round( ( (neutedPrice*(Math.round(stat1)/255)) + (neutedPrice*(Math.round(stat2)/255)) )/100 )*100}
                        />
                    </div>
                ) : null 
                )}
            </div>
        </div>
    )
}

export default Calculate