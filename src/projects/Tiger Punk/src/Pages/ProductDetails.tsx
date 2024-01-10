import {  useParams  } from 'react-router-dom'
import { products } from '../assets/Products/ProductsList'
import { Footer } from '../Components/Footer';
import { NavBar } from '../Components/NavBar';
import { productType, TigerPunkContext } from '../Components/TigerPunkContext';
import { useContext, useState } from 'react';


export const ProductDetails = () => {
	const {updateCart, cart} = useContext(TigerPunkContext)
	const { productId } = useParams<{ productId: string }>();
	const product = products.find((product:productType) => product.id === Number(productId));
	const [itemQuantity, setItemQuantity] = useState(0)

	const updateItemQuantity = (val:string) => {
		if(itemQuantity === 0 && val === '-') return
		if(val === '-'){
		setItemQuantity(prev => prev - 1)
		}
		if(val === '+'){
		setItemQuantity(prev => prev + 1)
		}
	}

	const inCartQuantity = cart.find((item) => item.id === Number(productId))?.quantity || 0


	if (!product) {
		return <div>Product not found</div>;
	}
  
	return (
		<>
		<NavBar/>
		<div id="product-page-container" className="tiger-punk-app">

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
						{/* <input type="number" name="" min='0' className='input' placeholder={inCartQuantity.toString()} onChange={updateItemQuantity} /> */}
						<div className="quantity-btns">
							<button className="btn-down" onClick={()=>updateItemQuantity('-')}>-</button>
							<p className='item-quantity'>{itemQuantity}</p>
							<button className="btn-up" onClick={()=>updateItemQuantity('+')}>+</button>
						</div>
						<button className="btn btn-product"onClick={()=>updateCart(product.id, inCartQuantity + itemQuantity)}>Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
		<Footer/>
		</>
	);
  };