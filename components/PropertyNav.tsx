import navStyles from '../styles/Nav.module.css'

import { ReactElement } from 'react'
import { NavVO } from '../interfaces/NavVO'
import NavLink from './NavLink'

type Props = {
    container: NavVO[]
}

export default function PropertyNav({
    container,
}: Readonly<Props>): ReactElement {
    const navs = container.map(vo => <li key={vo.text}><NavLink href={vo.link}>{vo.text}</NavLink></li>)
    return (<nav id={navStyles.nav}>
        <ul className={navStyles.ul}>
            <li>
                <NavLink href="/">container</NavLink>
                <ul className={navStyles.ul}>
                    {navs}
                </ul>
            </li>
        </ul>
    </nav>)
}