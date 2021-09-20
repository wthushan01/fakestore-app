import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './style.css'
import { getProductData } from '../../api/methods';
import { ItemTile } from '../../components/';
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';

const Home = (props) => {

    const [isDataError, setIsDataError] = useState(false);
    const [data, setData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let response = await getProductData();
        if (response.status == 200) setData(response.data);
        else setIsDataError(true);
    }

    const sortByPrice = () => {
        let items = displaySearchResults ? searchResult : data;
        let sortable = [];
        let output = [];
        if (data.length > 0) items.forEach((item) => {
            sortable.push([item, item.price]);
        });
        else return;
        let sorted = sortable.sort((a, b) => {
            return a[1] - b[1];
        });
        sorted.forEach((item, index) => {
            output.push(item[0]);
        });
        displaySearchResults ? setSearchResult(output) : setData(output);
    }

    const sortByName = async () => {
        let items = displaySearchResults ? searchResult : data;
        let sortable = [];
        let output = [];
        if (data.length > 0) items.forEach((item) => {
            sortable.push([item, item.title]);
        });
        else return;
        let sorted = sortable.sort((a, b) => {
            if (a[1] < b[1]) return -1;
            else if (a[1] > b[1]) return 1;
            else return 0;
        });
        sorted.forEach((item, index) => {
            output.push(item[0]);
        });
        displaySearchResults ? setSearchResult(output) : setData(output);
    }

    const onSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let resultArray = [];
        if (value === '') setSearchResult([]);
        else {
            if (data.length > 0) data.forEach((item) => {
                if (item.title.toLowerCase().includes(value)) resultArray.push(item);
            });
            setSearchResult(resultArray);
        }
    }

    const onSort = (event) => {
        let value = event.target.value;
        if (value === 'name') sortByName();
        else if (value === 'price') sortByPrice();
        else return;
    }

    const generateItems = (items) => {
        return items.map((element) => 
            <div className='grid-item' key={element.id}>
                <ItemTile
                    imageUrl={element.image} 
                    name={element.title}
                    price={element.price}
                    item={element}
                />
            </div>)
    }
    
    let displaySearchResults = document.getElementById('search') && document.getElementById('search').value != "";

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: 10}}>
                <input 
                    type="text"
                    id="search"
                    name="search"
                    className='search-box'
                    onChange={onSearch} placeholder={'Search your item here'}
                />
                <select name="sort" id="sort" className='dropdown-list' onChange={onSort} defaultValue='sort by'>
                    <option value="sort by" disabled>Sort by</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
            </div>
            <div className='grid-item-container'>
                {
                    isDataError ? 'Error in loading data' : 
                        displaySearchResults ? generateItems(searchResult) :
                            data.length > 0 ? generateItems(data) : 'Loading...'
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);