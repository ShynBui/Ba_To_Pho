import classnames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

const Button = ({ children, className, leftIcon, rightIcon }) => {
    return (
        <button className={cx('wrapper', 'rounded', className)}>
            {leftIcon ?? null}
            <span className={(leftIcon ? 'ms-2' : '') + (rightIcon ? 'me-2' : '')}>{children}</span>
            {rightIcon ?? null}
        </button>
    );
};

export default Button;
