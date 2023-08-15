'use client'
import { Logo } from '@/app/components/logo/Logo'
import { Nunito_Sans } from 'next/font/google'
import Link from 'next/link'
import styles from './mobile.module.scss'

const nunito = Nunito_Sans({
	subsets: ['latin'],
})

const LinkComponent = ({ link, titleLink }) => {
	return (
		<>
			<Link
				href={`${link}`}
				className={`${nunito.className} ${styles.mobile_footer_link}`}
			>
				{titleLink}
			</Link>
		</>
	)
}

const Mobile = () => {
	return (
		<div className={`${styles.mobile_footer}`}>
			<Logo logoTitle={`Enver`} />
			<div className={styles.mobile_footer__inner}>
				<div className={`${styles.mobile_footer_inner_items}`}>
					<LinkComponent link={'/'} titleLink={'Support'} />
					<LinkComponent link={'/'} titleLink={'Privacy Policy'} />
					<LinkComponent link={'/'} titleLink={'Terms and Conditions'} />
				</div>
			</div>

			<p className={`${nunito.className} ${styles.mobile_footer_text}`}>
				© 2020 Enver, All Rights Reserved
			</p>
		</div>
	)
}

export { Mobile }
