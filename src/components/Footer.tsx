import { Link, Text } from '@radix-ui/themes';
import Style from './Footer.module.css';
import maiiChibi from '../assets/maiiChibi.webp';

export default function Footer() {
    return (
        <div className={Style.Footer}>
            <img src={maiiChibi} alt="Maii Chibi" className={Style.Logo} />
            <div className={Style.Content}>
                <Text size='2' color='gray'>
                    This style is referenced from <Link href="https://michioxd.ch" color='brown' target="_blank">michioxd.ch</Link> - Thanks!
                </Text>
                <Text size='2' color='gray'>
                    © 2025 Shibaa. All rights reserved.
                </Text>
            </div>
        </div>
    )
}