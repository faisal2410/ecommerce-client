import React from 'react';
import DefaultLayout from "../../components/nav/Header";
import SubCategriesListCard from "../../components/sub/SubList"

const SubCategoriesList = () => {
    return (
        <DefaultLayout>
            <SubCategriesListCard></SubCategriesListCard>
        </DefaultLayout>
    );
};

export default SubCategoriesList;