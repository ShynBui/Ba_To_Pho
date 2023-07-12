import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Rating from '@mui/material/Rating';

import SuggestSection from './layouts/Suggest';
import CommentSection from './layouts/CommentSection';
import InfoList from './components/InfoList';

import get from '~/utils/request/get';
import post from '~/utils/request/post';
import Status from '~/utils/StatusCode';
import { faL } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Nav = () => (
    <nav
        style={{
            '--bs-breadcrumb-divider': '">"',
        }}
        aria-label="breadcrumb"
        className={cx('breadcrumb')}
    >
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item">
                <Link to="/documents">Tài liệu</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                Visual C#
            </li>
        </ol>
    </nav>
);

const Detail = () => {
    const [data, setData] = useState({
        title: '',
        img_link_download: '/src/assets/docImg.jpg',
        gem_cost: 0,
        categories: [],
        description: '',
        average_rate: 0,
        num_favour_users: 0,
        num_rate: 0,
        view_count: 0,
        document_type: 'PDF',
        created_date: '01-01-1970',
        file_link_download: '',
        file_size: 0,
    });
    const [user, setUser] = useState(false);
    const [infoUser, setInfoUser] = useState('');
    useEffect(() => {
       checkLoginUser();
    }, [])
    const checkLoginUser = () => {
        return new Promise((resolve, reject) => {
          get('current-user', { withCredentials: true })
            .then((response) => {
              if (response.is_active === true) {
                setUser(true);
    
                setInfoUser({
                  id: response.id,
                  username: response.username,
                  avatar: response.avatar,
                });
    
                resolve(true); // Giải quyết Promise với giá trị true nếu đăng nhập thành công
              } else {
                setUser(false);
                setInfoUser({});
    
                resolve(false); // Giải quyết Promise với giá trị false nếu chưa đăng nhập
              }
            })
            .catch((error) => {
              reject(error); // Từ chối Promise nếu xảy ra lỗi
            });
        });
      };
    
    // console.log(user);
    const [favorite, setFavorite] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        let id = location.pathname.split('/')[2];

        get(`api/documents/${id}`).then((res) => {
            if (res.status === Status.NOT_FOUND) {
                navigate('/');
                return;
            }
            let d = new Date(res.created_date);
            let date =
                ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear();

            setData({ ...data, ...res, created_date: date });
        });
    }, [location]);
    
    const handleDownDocs = (idDocs) => {
        try {
            console.log(idDocs);
            post('api/documents/download', {
              idUser: infoUser.id,
              idDocs: idDocs,
            },  { withCredentials: true })
              .then((response) => {
                if(response.status === 200){
                    const url = response.download_link
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'file_name.ext'; // Đặt tên tệp tin và định dạng mở rộng tùy ý
                    link.target = '_blank'; // Mở tệp tin trong cửa sổ mới (tùy chọn)
                    link.click();
                }
                else if(response.status === 400 ){
                    alert("Gem của bạn không đủ để tải")
                }
                else if(response.status === 404){
                    alert("Không tìm thấy user/documents")
                }
                else if(response.status === 401){
                    alert("Bạn chưa đăng nhập")
                }
              })
              .catch((error) => {
                console.log('Error:', error);
              });
        } catch (error) {
          console.log('Error:', error);
        }
      };
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <Nav />
                    <div className="info">
                        <div className={cx('doc-info', 'row')}>
                            <div className="col-md-4 border rounded p-2">
                                <img src={data.img_link_download} className="w-100" alt="" />
                            </div>
                            <div className={cx('doc-details', 'col-md-8')}>
                                <div>
                                    <h4>
                                        <b>{data.title}</b>
                                    </h4>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Rating
                                                precision={0.5}
                                                value={data.average_rate}
                                                onChange={(_, newValue) => {
                                                    setData({
                                                        ...data,
                                                        average_rate:
                                                            (data.average_rate * data.num_rate + newValue) /
                                                            (data.num_rate + 1),
                                                        num_rate: data.num_rate + 1,
                                                    });
                                                }}
                                            />
                                            <span>{data.num_rate} Đánh giá</span>
                                        </div>
                                        <div>
                                            <span>
                                                <span className="material-icons">download</span>
                                            </span>
                                            <span>
                                                <span className="material-icons">visibility</span>
                                                {data.view_count}
                                            </span>
                                            <span>
                                                <span className="material-icons">favorite</span>
                                                {data.num_favour_users}
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <InfoList title="Phí tải" value={`${data.gem_cost} CodeGem`} />
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            startIcon={favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                            onClick={() => {
                                                setFavorite((prev) => !prev);
                                            }}
                                        >
                                            {favorite ? 'BỎ YÊU THÍCH' : 'YÊU THÍCH'}
                                        </Button>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-md-inline-block">
                                            <InfoList
                                                title="Danh mục"
                                                value={data.categories.map((c) => c.name).join(', ')}
                                            />
                                            <InfoList title="Ngày đăng" value={data.created_date} />
                                            <InfoList title="Loại file" value={data.document_type} />
                                            <InfoList title="Dung lượng" value={`${data.file_size} MB`} />
                                        </div>
                                        <Button
                                            className="float-end"
                                            variant="contained"
                                            startIcon={<FileDownloadIcon />}
                                            onClick={() => handleDownDocs(data.id)}
                                        >
                                            DOWNLOAD
                                        </Button>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('description')}>
                        <p className={cx('description-text')}>{data.description}</p>
                    </div>
                    <SuggestSection />
                    <CommentSection doc_id={location.pathname.split('/')[2]} />
                </div>
                <div className="col-md-4">
                    <section className="border border-warning"></section>
                </div>
            </div>
        </div>
    );
};

export default Detail;
