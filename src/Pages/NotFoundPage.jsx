import { useContext } from 'react'
import { Link } from 'react-router-dom'
import LocaleContext from '../Context/localeContext'

const NotFoundPage = () => {

    const { locale } = useContext(LocaleContext);
    return (
        <div className='not-found-page'>
            <h2 className='not-found-page__title'>404</h2>
            <p className='not-found-page__message'>{locale === 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found'}</p>
            <p className='not-found-page__home-page-direction'>
                <Link to="/">{locale === 'id' ? 'Kembali ke halaman utama' : 'Back to home page'}</Link>
            </p>
        </div>
    )
}

export default NotFoundPage
