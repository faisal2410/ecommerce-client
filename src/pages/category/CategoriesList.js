import React from 'react';
import DefaultLayout from "../../components/nav/Header";
import CategoriesListCard from "../../components/category/CategoryList";

const CategoriesList = () => {
    return (
        <DefaultLayout>
            <CategoriesListCard></CategoriesListCard>
        </DefaultLayout>
    );
};

export default CategoriesList;