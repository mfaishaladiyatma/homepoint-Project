import React from 'react';

const PaginationPage = ({ data, productPerPage, totalPosts, paginate, currentPage }) => {

    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / productPerPage); i++) {
        pageNumbers.push(i);
    }


    const previousButton = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1)
        }
        return
    }

    const nextButton = () => {
        if (currentPage >= 1 && currentPage < pageNumbers.length) {
            paginate(currentPage + 1)
        }
        return
    }

    return (
        <>
            {data.length > 0 ?
                <div className='flex gap-5 lg:float-right'>
                    <button onClick={previousButton} className='text-[#505050]'>Previous</button>
                    {pageNumbers.map(number => (
                        <div key={number} onClick={() => paginate(number)} className={`cursor-pointer ${currentPage === number ? `bg-[#FBC646] font-bold` : ""} px-3 py-2 `}>
                            {number}
                        </div>
                    ))}
                    <button onClick={nextButton} className='text-[#505050]'>Next</button>
                </div>
                :
                <div>

                </div>
            }
        </>
    );
};

export default PaginationPage;