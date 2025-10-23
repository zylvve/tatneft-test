import type { ReactNode } from 'react';
import styles from './Placeholder.module.css'

type PlaceholderProps = {
    status: 'loading' | 'error',
    children: ReactNode,
}

function Placeholder({ status, children }: PlaceholderProps) {
    return (
        <div className={`${styles.placeholder} ${styles[status]}`}>
            <h2>{children}</h2>
        </div>
    );
}

export default Placeholder