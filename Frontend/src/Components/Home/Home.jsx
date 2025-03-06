import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions.js';
import { Slides } from './Slides.jsx';
import MidSection from './MidSection.jsx';

const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.getProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    console.log(products);

        // Sample products array (replace this with real data later)
        const newItems = [
        
                {
                    url: 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600',
                    title: { shortTitle: 'Shoes' },
                    discount: '20% OFF',
                    tagline: 'Best Quality',
                    id: "1",
                    category: "men"
                },
                {
                    url: 'https://triprindia.com/cdn/shop/files/TI.BRBLHN-D1451_600x.jpg?v=1726317821',
                    title: { shortTitle: 'T-shit' },
                    discount: '30% OFF',
                    tagline: 'look awesome',
                       id: "2",
                        category: "men"
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPvST7hDw0rpRw9RJDOFAgk7Kv3J0cFCA4PA8vqMdra1TSumBqf7TXoQ_OFs6v5qQx87A6fn0eZem08QJ9i_kapki84sr9gNWPJq-0fWJvrwrIW6dNkX0g',
                    title: { shortTitle: 'Laptop-bag' },
                    discount: '15% OFF',
                    tagline: 'High Performance',
                       id: "3",
                        category: "men"
                },
                {
                    url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcRx3x0Q-17Uw5D5qdry1ixjk--rSt4dbpwQf3YKOfFpnYs8u0F1t3xdRWUdCk3DNAYOl7nj3w41lG0TMwQIMq3i20bkbiQf-1NuBOO4E',
                    title: { shortTitle: 'Sneakers' },
                    discount: '25% OFF',
                    tagline: 'Stylish and Comfortable',
                       id: "4",
                        category: "men"
                },
                {
                    url: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: { shortTitle: 'Backpack' },
                    discount: '50% OFF',
                    tagline: 'Travel Friendly',
                       id: "5",
                        category: "men"
            
                }
            ];
            
            const ladyItems = [
        
                {
                    url: 'https://kaajh.com/cdn/shop/files/Green_Floral_Printed_Kurta_Pant_Set_With_Dupatta_Set_of_3_-_Kaajh_-_tag4_-1722048.jpg?v=1721820537&width=1080',
                    title: { shortTitle: 'suit' },
                    discount: '20% OFF',
                    tagline: 'Best Quality',
                       id: "1",
                        category: "women"
                },
                {
                    url: 'https://m.media-amazon.com/images/I/91eoEzIqz3L.jpg',
                    title: { shortTitle: 'MakeUp-KIt' },
                    discount: '30% OFF',
                    tagline: 'outstanding Quality',
                       id: "2",
                       category: "women"

                },
                {
                    url: 'https://qivii.com/cdn/shop/products/sabyasachi-designer-blue-lehenga-choli-for-women-with-heavy-thread-embroidery-work-wedding-wear-party-wear-lehenga-choli-fully-stitched-qivii-1.jpg?v=1726015835&width=1080',
                    title: { shortTitle: 'Lehnga' },
                    discount: '15% OFF',
                    tagline: 'Stylish and Comfortable',
                       id: "3",
                       category: "women"
                },
                {
                    url: 'https://www.jiomart.com/images/product/original/rvmxklbxsr/shoe-lab-women-s-comfortable-black-sandal-footwear-for-women-sandals-for-women-wedges-for-women-heels-for-women-non-returnable-product-images-rvmxklbxsr-0-202311071202.jpg?im=Resize=(500,630)',
                    title: { shortTitle: 'Sandle' },
                    discount: '25% OFF',
                    tagline: 'Stylish and Comfortable',
                       id: "4",
                       category: "women"
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF47oOCalHG3AI3H9fuOCXdwaNHmm55gau8A&s',
                    title: { shortTitle: 'Special Rajasthani Dress' },
                    discount: '50% OFF',
                    tagline: 'Latest and Stylish',
                       id: "5",
                       category: "women"
                }
            ];
            
           
    

    return (
        <>
            <Navbar />
            <Box className="bg-gray-300 pt-[6px] pb-[6px] pl-2 pr-2">
                <Banner />
                <Slides newItems={ladyItems} title='Deals of the day' timer={true}   />
                <Slides products={products} title='Suggestion for you' timer={false}  />
                <MidSection/>
                <Slides newItems={newItems} title='Faishon  Todays' timer={false}   />
              
                <Slides products={products} title='Top Offers' timer={false} />
                <Slides newItems={newItems} title='New Offer' timer={false}   />
                <Slides newItems={ladyItems} title='Women produts' timer={false}  />
                
            </Box>
        </>
    );
};

export default Home;
