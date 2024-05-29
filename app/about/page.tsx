import s from './styles/about.module.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | NextJS App',
}

const About = () => {
    return (
        <div className={s.about}>
            <h3>Select subitem</h3>
        </div>
    )
}
export default About
