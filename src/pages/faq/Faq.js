import React from 'react';
import DefaultLayout from "../../components/nav/Header";
import FaqCard from "../../components/faq/Faq";

const Faq = () => {
    return (
        <DefaultLayout>
            <FaqCard></FaqCard>
        </DefaultLayout>
    );
};

export default Faq;