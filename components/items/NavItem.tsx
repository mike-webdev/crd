

import Link from "next/link";
import useTranslation from 'next-translate/useTranslation'

export default function NavItems(props) {
    const { t } = useTranslation('common')

    return (
            <li className="nav-item">
                <Link href={props.link}>
                    <a className="nav-link">{t(props.page)}</a>
                </Link>
            </li>
    )
}