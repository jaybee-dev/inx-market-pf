import '../styles/DinoItem.css'
import { useTranslation } from "react-i18next";

function DinoItem({ name, category, price, neutedPrice }) {
    const { t } = useTranslation();

    return (
        <li className='inx-eco-dino-item'>
            <span className='inx-eco-dino-title'>{name}</span>
            <span className='inx-eco-dino-cat'>{t('dinoitem_category')} : {category}</span>
            <span className='inx-eco-dino-price'>{t('dinoitem_breedable')} : {price} points</span>
            <span className='inx-eco-dino-ntprice'>{t('dinoitem_neuted')} : {neutedPrice} points</span>
        </li>
    )
}

export default DinoItem