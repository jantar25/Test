import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from "react";


const CategoryItem = ({item}) => {
    useEffect(() => {
        AOS.init({duration:500});
      }, [])

    return (
        <div data-aos="zoom-in">
            <Link to={`/products/${item.cat}`} style={{textDecoration:"none"}} > 
                <div className='w-[80vw] lg:w-[40vw] h-[250px] relative m-[5px]'>
                    <img className='w-full h-full object-cover brightness-50' src={item.img} alt='category'/>
                    <div className='absolute bottom-[10px] left-[10px]'>
                        <h2 className='text-orange-500 text-[700] text-4xl'>{item.title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem
