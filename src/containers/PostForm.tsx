import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Message } from 'semantic-ui-react';
import { addPostAction, updatePostAction } from '../actions';
import { PostType } from '../types';

const getRandomPostId = () => {
    return (Math.floor(Math.random() * 100) + 1).toString();
}

interface IProps {
    closeModal: Function,
    post?: PostType
}


const PostForm: React.FC<IProps> = ({ closeModal, post }) => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    const dispatch = useDispatch();

    // I used this nasty because I got : Cannot assign to read only property 'title' of object;
    const [newPost, setPost] = useState({
        "id": post ? post.id : getRandomPostId(),
        "title": post ? post.title : "",
        "datePosted": post ? post.datePosted : dateTime,
        "categories": post ? post.categories : Array(),
        "content": post ? post.content : ""
    });

    const setField = (value: string, fieldName: string) => {
        switch (fieldName) {
            case 'title':
                newPost.title = value;
                break;
            case 'categories':
                const categories = value.split(",");
                newPost.categories = categories;
                break;
            case 'content':
                newPost.content = value;
                break;
            default:
                break;
        }
        setPost(newPost);
    }

    const onSubmit = () => {
        if (post) {
            dispatch(updatePostAction(newPost));
        } else {
            dispatch(addPostAction(newPost));
        }
        closeModal();
    }

    return <Form warning>
        <Form.Group unstackable widths={2}>
            <Form.Input required label='Title' placeholder='First name' defaultValue={newPost.title} onChange={(e) => setField(e.target.value, 'title')} />
            <Form.Input label='Categories' placeholder='Categories' defaultValue={newPost.categories.toString()} onChange={(e) => setField(e.target.value, 'categories')} />
        </Form.Group>
        <Form.TextArea required label='Content'
            placeholder='Content'
            onChange={(e) => setField(e.currentTarget.value, 'content')}
            defaultValue={newPost.content} />
        <Message
            warning
            header='Categories'
            list={[
                'Please provide Categories separated with commas example: \n science, books, technology, animals',
            ]}
        />
        <Button type='submit' onClick={() => onSubmit()}>Submit</Button>
    </Form >;
}



export { PostForm };
