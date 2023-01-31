import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}><Button className='leftside-category-button' variant="info">{category.name}</Button></Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;