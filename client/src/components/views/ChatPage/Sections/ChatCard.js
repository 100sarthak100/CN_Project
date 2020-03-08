import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';

function ChatCard(props) {
    console.log(props.message)
    return (
        <div style={{ width: '200%', color: 'black' }}>
            <Comment
                author={props.sender && props.sender.name}
                avatar={
                    <Avatar
                        src={props.sender && props.sender.image} alt={props.sender && props.sender.name}
                    />
                }
                content={

                    props.message.substring(props.message.length - 3, props.message.length) === 'jpg' ?
                        <img
                            style={{ maxWidth: '200px' }}
                            src={`http://localhost:5000/${props.message}`}
                            alt="img"

                        />
                        :
                        <p>
                            {props.message}
                        </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
        </div >
    )
}

export default ChatCard;