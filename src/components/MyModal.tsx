import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { PostForm } from '../containers/PostForm';
import { PostType } from '../types';

interface IProps {
    post?: PostType;
    loadPost?: Function;
}

const MyModal: React.FC<IProps> = ({ post, loadPost }) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            {post ? (
                <Button primary onClick={() => setIsOpen(open => !open)}>
                    Edit
                </Button>
            ) : (
                <Button attached="top" onClick={() => setIsOpen(open => !open)}>
                    Add post
                </Button>
            )}
            <Modal size={'small'} open={isOpen} onClose={() => setIsOpen(open => !open)}>
                <Modal.Header>Add a new post</Modal.Header>
                <Modal.Content>
                    <PostForm closeModal={closeModal} post={post} />
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => setIsOpen(open => !open)}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    );
};

export { MyModal };
