import {  useParams  } from 'react-router-dom'
import { products } from '../assets/Products/ProductsList'
import { Footer } from '../Components/Footer';
import { NavBar } from '../Components/NavBar';
import { productType, TigerPunkContext } from '../Components/TigerPunkContext';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';





export const ProductDetails = () => {
	const {updateCart, cart} = useContext(TigerPunkContext)
	const { productId } = useParams<{ productId: string }>();
	const product = products.find((product:productType) => product.id === Number(productId));
	const [itemQuantity, setItemQuantity] = useState(0)
	const [cartMessage, setCartMessage] = useState(false)

	const updateItemQuantity = (val:string) => {
		if(itemQuantity === 0 && val === '-') return
		if(val === '-'){
		setItemQuantity(prev => prev - 1)
		}
		if(val === '+'){
		setItemQuantity(prev => prev + 1)
		}
	}

	

	useEffect(()=>{
		if (cartMessage) {
			const timer = setTimeout(() => {
				setCartMessage(false);
			}, 1900);
		return () => clearTimeout(timer);
    }
  }, [cartMessage]);


	const inCartQuantity = cart.find((item) => item.id === Number(productId))?.quantity || 0

	const addBtn = () => {
		if(product && itemQuantity !== 0){
		updateCart(product.id, inCartQuantity + itemQuantity)
		setItemQuantity(0)
	setCartMessage(true)}

	}

	if (!product) {
		return <div>Product not found</div>;
	}
  
	return (
		<>
		<NavBar/>
		<div id="product-page-container" className="tiger-punk-app">

		{cartMessage && <div className='add-message'>
				<h2>
				Item(s) added to cart
				</h2>
			</div>}

			<div className="merch-back-button">
				<Link to='/Tigerpunk/Merch'>
				<button className='btn btn-back'>Back</button>
				</Link>
			</div>

			<h1>Product Details</h1>

			<div className='product-details-page'>
				<div className="product-details-img-container">
					<img className='product-details-img' src={product.imageUrl} alt={product.name} />
				</div>

				<div className="product-details-text">
					<h2 className='product-name'>{product.name}</h2>
					<p className='product-price'>${product.price}</p>
					<p>{product.description}</p>
					<div className="cart-inputs">
						<div className="quantity-btns">
							<button className="btn-down" onClick={()=>updateItemQuantity('-')}>-</button>
							<p className='item-quantity'>{itemQuantity}</p>
							<button className="btn-up" onClick={()=>updateItemQuantity('+')}>+</button>
						</div>
						<button className="btn btn-product"onClick={()=>addBtn()}>Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
		<Footer/>
		</>
	);
  };