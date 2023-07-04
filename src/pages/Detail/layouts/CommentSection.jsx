import { useState, useEffect } from 'react';

import Comment from '../components/Comment';
import FormComment from '../components/FormComment';
import request from '~/utils/request';

const CommentSection = ({ doc_id }) => {
    const [listComments, setListComments] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        request.get(`api/comments/${doc_id}`).then((data) => {
            setListComments(data);
        });
    }, [reload]);

    return (
        <div className="mt-3">
            <h5>
                <b>BÌNH LUẬN</b>
            </h5>
            <FormComment setReload={setReload} />
            <div>
                {listComments.map((cmt) => (
                    <Comment
                        userName={cmt.user_name}
                        userId={cmt.user_id}
                        content={cmt.content}
                        created_date={cmt.created_date}
                        cmtId={cmt.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
