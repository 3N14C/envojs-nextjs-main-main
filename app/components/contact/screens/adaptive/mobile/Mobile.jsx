'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './mobile.module.scss'

const Mobile = () => {
  const ref = useRef()
	const isInView = useInView(ref, { once: true })

	return (
		<div id='contact' ref={ref}>
			<div
				style={{
					transform: isInView ? 'none' : 'translateX(-200px)',
					opacity: isInView ? 1 : 0,
					transition: 'all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
				}}
				className={`${styles.mobile}`}
			>
				<form className={`${styles.mobile_form}`} action=''>
					<p className={`${styles.mobile_title}`}>
						Contact us for the service you want to use
					</p>
					<button className={`${styles.mobile_btn}`}>Contact us</button>
				</form>
			</div>
		</div>
	)
}

export { Mobile }
