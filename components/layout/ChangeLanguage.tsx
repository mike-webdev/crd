import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import i18nConfig from '../../i18n.json'

const { locales } = i18nConfig

export default function ChangeLanguage(): JSX.Element[] {
  const { t, lang } = useTranslation()

  return locales.map((lng: any) => {

    if (lng === lang) return null

    return (

        <Link href="#" locale={lng} key={lng}>
          {t(`${lng}`)}
        </Link>

    )
  })
}
