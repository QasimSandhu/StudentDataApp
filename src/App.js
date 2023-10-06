import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Student from './Student';
import ReactPaginate from 'react-paginate';

function App() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://reqres.in/api/users?page=${currentPage}`
                );
                if (response.status === 200) {
                    setUsers(response.data.data);
                    setTotalPages(response.data.total_pages);
                } else {
                    console.error('Error fetching data:', response);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [currentPage]);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage + 1);
    };

    return (
        <div className="App">
            <h1 className='container d-flex justify-content-center'>React component with pagination list</h1>
            <Student users={users} />
            <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={(selectedItem) => handlePageChange(selectedItem.selected)}
                containerClassName={'pagination container d-flex justify-content-center align-items-center'}
                activeClassName={'active'}
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                disabledClassName={'disabled'}
                className=''
            />
        </div>
    );
}

export default App;