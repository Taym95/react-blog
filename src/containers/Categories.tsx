import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Select } from 'semantic-ui-react';
import { ApplicationState } from '../types';
import { loadCategoryAction } from '../actions';

interface Props { categories: string[] }

const CategoriesContainers: React.FC<Props> = ({ categories }: Props) => {
    const dispatch = useDispatch();

    let categoryOptions = [];
    for (var i = 0; i < categories.length; i++) {
        categoryOptions.push({
            key: categories[i],
            value: categories[i],
            text: categories[i],
        });
    }

    const onCategoryChnage = (category: any) => {
        dispatch(loadCategoryAction(category.currentTarget.innerText));
    }
    return (
        <Select placeholder='Select your category' options={categoryOptions} onChange={(category) => onCategoryChnage(category)} />
    );
};


function mapStateToProps(state: ApplicationState) {
    return { categories: state.posts.categories };
}

const Categories = connect(mapStateToProps)(CategoriesContainers);

export { Categories };