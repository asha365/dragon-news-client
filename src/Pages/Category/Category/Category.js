import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Dragon News - Category</title>
            </Helmet>
            <h2>This is Category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard 
                    key={news._id}
                    news={news}
                    ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;