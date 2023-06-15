import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import axios from 'axios';
import Button from '@/Button';
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
// import Button as btn from '@mui/material/Button'

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: 'apps',
        title: 'Tất cả môn học',
        subItem: [],
    },
    {
        icon: 'business_center',
        title: 'Việc kinh doanh',
        subItem: [],
    },
    {
        icon: 'public',
        title: 'Nhân văn',
        subItem: [],
    },
    {
        icon: 'calculate',
        title: 'Toán học',
        subItem: [],
    },
    {
        icon: 'terminal',
        title: 'Lập trình',
        subItem: ['Lập trình C/C++', 'Lập trình Python', 'Lập trình Java', 'Lập trình JavaScript'],
    },
    {
        icon: 'science',
        title: 'Khoa học',
        subItem: [],
    },
    {
        icon: 'create',
        title: 'Viết',
        subItem: [],
    },
];

const SubMenu = ({ data }) => {
    return (
        <li className={cx('sub-menu')}>
            <div className="d-flex align-items-center pb-2">
                {data.icon ? (
                    <span className="material-icons" style={{ color: '#1ab9f4' }}>
                        {data.icon}
                    </span>
                ) : null}
                <span className="ms-1">{data.title}</span>
                {data.subItem ? <span className="material-icons">arrow_drop_down</span> : null}
            </div>
            <ul className="bg-white">
                {data.subItem.map((title, index) => (
                    <li key={index} className="py-2 ps-4 pe-3">
                        {title}
                    </li>
                ))}
            </ul>
        </li>
    );
};

const ModalWrapper = ({ show, children }) => {
    return <div className={cx('modal-wrapper', { show })}>{children}</div>;
};
const AlertConfirmEmail = () => {
    let timerInterval;
    Swal.fire({
        title: 'Xác nhận email !',
        html: 'Hãy xác nhận email của bạn trong <b></b> giây .',
        timer: 30000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector('b');
            let remainingTime
            timerInterval = setInterval(() => {
                remainingTime = Math.floor(Swal.getTimerLeft() / 1000);
                b.textContent = remainingTime
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval);
        },
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
        }
    });
};
const AlertConfirmEmailSucess = () => {
    Swal.fire(
        'Đăng ký thành công',
        'Ba Tô Phở chúc bạn có một trải nghiệm tốt lành !',
        'success'
      )
}
const Header = () => {
    const [user, setUser] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkButton, setCheckbutton] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [showAlert, setShowAlert] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [ErrorUserNameEmail, setErrorUserNameEmail] = useState(false);

    useEffect(() => {
        setIsFormValid(
            userName !== '' && userPassword !== '' && userEmail !== '' && confirmPassword !== '' && checkButton,
        );
    }, [userName, userPassword, userEmail, confirmPassword, checkButton]);
    // form data dang ki
    const [formData, setFormData] = useState({
        // Khởi tạo giá trị mặc định của form
        name: userName,
        email: userEmail,
        password: userPassword,
    });
    // form data dang nhap
    const [formDataLogin, setFormDataLogin] = useState({
        name: userName,
        password: userPassword,
    });
    console.log(formData);
    console.log(formDataLogin);
    const handleLogin = () => {
        setShowModal(true);
        setShowRegister(false);
    };
    useEffect(() => {
        if (showRegister) {
            setFormData({
                name: userName,
                email: userEmail,
                password: userPassword,
            });
        } else
            setFormDataLogin({
                name: userName,
                password: userPassword,
            });
    }, [userName, userEmail, userPassword]);

    
    useEffect(() => {
        let prevConfirmEmail = confirmEmail;
        if (confirmEmail === true && prevConfirmEmail === true) {
            console.log('setup fetch');

            const timer = setInterval(() => {
                fetch('http://127.0.0.1:5000/users/confirm-status/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data.status === 200) {
                            clearInterval(timer);
                            setConfirmEmail(false);

                            console.log(' xac thuc email thanh cong');
                        } else if (data.status === 404) {
                            console.log('That bai');
                        } else console.log('12123');
                    });
            }, 3000);
            setTimeout(() => {
                clearInterval(timer); // Dừng hàm setInterval sau 30 giây
            }, 6000);
        }
    }, [confirmEmail]);
    //dang ki
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(showLoading);
        if (userPassword === confirmPassword) {
            setShowLoading(true);
            setErrorMessage(false);
            // setShowRegister(false)

            fetch('http://127.0.0.1:5000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.status === 200) {
                        setShowRegister(false);

                        console.log('thanh cong');
                        setConfirmEmail(true);
                    } else if (data.status === 404) {
                        console.log('That bai');
                        setShowLoading(false);
                        setErrorUserNameEmail(true);
                        setConfirmEmail(false);
                    }
                })
                .catch((error) => {});

            console.log('1212dasd');
        } else setErrorMessage(true);
    };
    // dang nhap
    const handleSubmitLogin = () => {
        e.preventDefault();
    };
    const handleRegister = () => {
        setShowModal(false);
        setShowRegister(true);
    };
    const handleCancel = () => {
        setShowRegister(false);
        setShowModal(false);
    };
    return (
        <>
            {true && <AlertConfirmEmailSucess/>}
            <ModalWrapper show={showModal}>
                <div className={cx('modal-inner')}>
                    <h2>Đăng nhập với...</h2>
                    <span className={cx('cancel', 'material-icons')} onClick={handleCancel}>
                        cancel
                    </span>
                    <div className="d-flex g-2 justify-content-center">
                        <Button>Google</Button>
                        <Button>Facebook</Button>
                    </div>
                    <p className="mt-3">hoặc</p>
                    <form>
                        <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Tên người dùng hoặc email
                            </label>
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                type="email"
                                class="form-control"
                                id="login-email"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Mật khẩu
                            </label>
                            <input
                                onChange={(e) => setUserPassword(e.target.value)}
                                type="password"
                                class="form-control"
                                id="login-password"
                            />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <input type="checkbox" id="login-remember" name="login-remember" />
                                <label htmlFor="login-remember">Ghi nhớ tôi</label>
                            </div>
                            <Link to="/">Quên mật khẩu</Link>
                        </div>
                        <Button className="w-100 mt-3">ĐĂNG NHẬP</Button>
                    </form>
                    <p className="text-center mt-3">
                        đây là lần đầu tiên của bạn?{' '}
                        <b style={{ cursor: 'pointer' }} onClick={handleRegister}>
                            Đăng ký ngay
                        </b>
                    </p>
                </div>
            </ModalWrapper>

            <ModalWrapper show={showRegister}>
                <div className={cx('modal-inner')} style={{ height: '550px' }}>
                    <h2>Đăng ký</h2>
                    {errorMessage && (
                        <h2 style={{ fontSize: '18px', color: 'red', fontWeight: '600' }}>
                            Xác nhận mật khẩu không đúng !!
                        </h2>
                    )}
                    <span className={cx('cancel', 'material-icons')} onClick={handleCancel}>
                        cancel
                    </span>
                    {ErrorUserNameEmail && (
                        <h2 style={{ fontSize: '18px', color: 'red', fontWeight: '600' }}>
                            Tên người dùng hoặc email đã được sử dụng{' '}
                        </h2>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Tên người dùng của bạn
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setUserName(e.target.value)}
                                class="form-control"
                                id="login-email"
                                placeholder="username"
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="login-email" class="form-label">
                                Email của bạn
                            </label>
                            <input
                                type="email"
                                onChange={(e) => setUserEmail(e.target.value)}
                                class="form-control"
                                id="login-email"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Mật khẩu
                            </label>
                            <input
                                onChange={(e) => setUserPassword(e.target.value)}
                                type="password"
                                class="form-control"
                                id="login-password"
                            />
                        </div>
                        <div className="text-start">
                            <label for="login-password" class="form-label">
                                Xác nhận mật khẩu
                            </label>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                class="form-control"
                                id="login-password"
                            />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <label htmlFor="login-remember" style={{ marginRight: '10px' }}>
                                    Bạn đã đọc và đồng ý <Link to="/">điều khoản</Link> của Ba Tô Phở{' '}
                                </label>
                                <input
                                    onChange={() => setCheckbutton(!checkButton)}
                                    type="checkbox"
                                    id="login-remember"
                                    name="login-remember"
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-100 mt-3" disabled={!isFormValid} onClick={handleSubmit}>
                            {' '}
                            <h1 className={cx('register')}>
                                ĐĂNG KÝ{' '}
                                {showLoading && <span className={cx('loading', 'material-icons')}>refresh</span>}
                            </h1>
                        </Button>
                    </form>
                    <p className="text-center mt-3" style={{ paddingBottom: '20px' }}>
                        Bạn đã có tài khoản?
                        <b style={{ cursor: 'pointer' }} onClick={handleLogin}>
                            Đăng nhập
                        </b>
                    </p>
                </div>
            </ModalWrapper>

            {/* {<ModalWrapper show={true}>
                <div className={cx('modal-inner')}>
                    <h1>Kiểm tra email của bạn để xác nhận tài khoản {countdown}</h1>
                    <AlertConfirmEmail/>
                    <span className={cx('cancel', 'material-icons')} onClick={handleCancel}>
                        cancel
                    </span>
                </div>
            </ModalWrapper>} */}
            {confirmEmail && <AlertConfirmEmail/>}

            <header className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src="/src/assets/logo.png" alt="Logo" className="w-100 h-100" />
                    </Link>
                </div>
                <div className={cx('input', 'd-flex align-items-center')}>
                    <select className="form-select">
                        <option value="1">Các tài liệu</option>
                        <option value="2">Câu hỏi</option>
                        <option value="3">Giáo sư</option>
                    </select>
                    <input type="text" placeholder="Tìm kiếm trên tài liệu" className="form-control" />
                    <button className="btn">
                        <span className="material-icons">search</span>
                    </button>
                </div>
                <div className={cx('actions')}>
                    <Link to="/upload">
                        <Button className="me-5 btn btn-warning border">Tải lên</Button>
                    </Link>
                    {user ? (
                        <Button
                            onClick={() => {
                                setUser(false);
                            }}
                        >
                            User
                        </Button>
                    ) : (
                        <>
                            <Button
                                className="me-2"
                                onClick={() => {
                                    setShowModal(true);
                                }}
                            >
                                Đăng nhập
                            </Button>

                            <Button className="me" onClick={handleRegister}>
                                Đăng ký
                            </Button>
                        </>
                    )}
                </div>
            </header>
            <ul className={cx('menu', 'd-flex justify-content-around mt-2')}>
                {MENU_ITEM.map((item, index) => (
                    <SubMenu key={index} data={item} />
                ))}
            </ul>
        </>
    );
};

export default Header;
