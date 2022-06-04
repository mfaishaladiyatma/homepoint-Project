import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import review from '../../assets/review.png'
import review2 from '../../assets/review2.png'

function ReviewProps() {
    return (
        <div className="p-5 max-w-[750px] border-[1px] border-black rounded-md">
            <h1>K***21</h1>
            <div className='flex text-[#FBC646]'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h1>Produk Original dan sesuai seperti pada gambar. Kualitas produk baik dan warnanya cantik</h1>
            <div className='flex'>
                <img src={review} alt="" />
                <img src={review2} alt="" />
            </div>
            <h2>2022-02-22 06:25</h2>
        </div>
    )
}

export default ReviewProps