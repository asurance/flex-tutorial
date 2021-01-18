import navStyles from '../styles/Nav.module.css'

import { ReactElement } from 'react'
import { NavVO } from '../interfaces/NavVO'
import NavLink from './NavLink'
import { useRouter } from 'next/dist/client/router'

type Props = {
    container: NavVO[]
    show: boolean
}

export default function PropertyNav({
    container,
    show,
}: Readonly<Props>): ReactElement {
    const router = useRouter()
    const containerNavs = container.map(vo => {
        const href = `/container/${vo.link}`
        return <li key={vo.link}><NavLink href={href} current={router.pathname === href}>{vo.text}</NavLink></li>
    })
    return (<nav id={navStyles.nav} className={show ? navStyles.show : ''}>
        <ul className={navStyles.ul}>
            <li>
                <NavLink href="/container" current={router.pathname === '/container'}>容器(container)</NavLink>
                <ul className={navStyles.ul}>
                    {containerNavs}
                </ul>
            </li>
        </ul>
    </nav>)
}