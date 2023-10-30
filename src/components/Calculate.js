import { useState } from 'react'
import {dinoList} from '../datas/dinoList'
import DinoItem from './DinoItem'
import '../styles/Calculate.css'
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
                <select className='inx-eco-name-select'
                    value={activeName}
                    /* add function to reset form on change */
                    onChange={(e) => { setActiveName(e.target.value); resetForm() }}
                    
                >
                    <option value=''>{t('choose_dino')}</option>
                    {names.map((cat) => (
                        <option className='inx-eco-name-option' key={cat} value={cat}>
                            {t(cat)}
                        </option>
                    ))}
                </select>
            </div>

            <div className='inx-eco-wrap'>
                {dinoList.map(({ id, name, category, price, neutedPrice, nameStat1, nameStat2}) => 
                    activeName === name ? (
                    
                    /* BIG main container */
                    <div>
                    {/* Main container of stats */}
                    <div className='inx-eco-main-container' key={id}>

                    {/* Stat DAMAGE */}
                    <div>
                        <div className='inx-eco-calc-stats'>
                            <div className='inx-eco-stat-container'>
                                <div className='inx-head-stat'>
                                    {/* Stat icon */}
                                    <div className='icon'>
                                        <img src={`${process.env.PUBLIC_URL}/img/${nameStat1}.webp`} alt='Damage icon' className='icon'/>
                                    </div>
                                    {/* Stat name */}
                                    <div className='stat'>
                                        <b>{t(nameStat1)}</b>
                                    </div>
                                </div>

                                {/* Stat input */}
                                <div>
                                    <div>
                                        <div>
                                            {nameStat1 === '' ? <p>{t('unique_price')} : {price}</p> :
                                            <input className="inx-eco-stat" id='stat1' type="number" placeholder={t(nameStat1)} value={stat1} onChange={(e) => setStat1(e.target.value)} />
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    {/* Stat HEALTH */}
                    <div>
                        <div className='inx-eco-calc-stats'>

                        

                            <div className="inx-eco-stat-container">
                                <div className='inx-head-stat'>
                                    {/* Stat icon */}
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/img/${nameStat2}.webp`} alt='Health icon' className='icon'/>
                                    </div>
                                    {/* Stat name */}
                                    <div className='stat'>
                                        <b>{t(nameStat2)}</b>
                                    </div>
                                </div>
                                {/* Stat input */}
                                <div>
                                    <div>
                                        <div>
                                            {nameStat2 === '' ? null :
                                            <input className="inx-eco-stat" id='stat2' type="number" placeholder={t(nameStat2)} value={stat2} onChange={(e) => setStat2(e.target.value)} />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                    <div className='result'>
                        <DinoItem 
                        name={t(name)}
                        category={category}
                        price={Math.round( ( (price*(Math.round(stat1)/255)) + (price*(Math.round(stat2)/255)) )/100 )*100}
                        neutedPrice={Math.round( ( (neutedPrice*(Math.round(stat1)/255)) + (neutedPrice*(Math.round(stat2)/255)) )/100 )*100}
                        />
                    </div>

                    </div>
                ) : null 
                )}
            </div>
        </div>
    )
}


export default Calculate