import React from 'react'
import "../styles/Footer.css"
import {useTranslation} from 'react-i18next'

function Footer() {

  const {t} = useTranslation(['footer'])
  return (
    <div>
      <footer>
        <p>Copyrights &#169; 2022 Chi Chiu Lam</p>
        <div className='vl'></div>
        <p>{t('copyright')}</p>
    </footer>
    </div>
  )
}

export default Footer
