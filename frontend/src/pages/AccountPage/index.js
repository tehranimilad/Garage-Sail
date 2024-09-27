import { deleteUserAccount, getToken } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";

import './accountPage.css'


const AccountPage = (props) => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({username: ''})
    const [userProductData, setUserProductData] = useState([])
    
    // useEffect sets the user data equal to the user property of the current user, which is passed down through props
    // then it sets the product data equal to the products property of the current user, also passed down through props
    // This happens everytime props (currentUser / isLoggedIn) changes

    useEffect(() => {
        setUserData(props.currentUser.user)
        setUserProductData(props.currentUser.products)
    }, [props])

    const handleDelete = () => {
        // Axios function to delete user account by using user.id 
        deleteUserAccount(userData._id)
        // Clearning local storage in order to log out user
        localStorage.clear()
        // Setting user's login status to false, aka logged out
        props.setIsLoggedIn(false)
        // Then navigate back home
        navigate('/')
    }

    return(
        <>
        <div className="account-page">
        <div>
            <div className="coloumn sm-6 account-greeting">
        <div className="account-info">
            <h1>Hello, {userData.username}</h1>
            <p>Thanks for being a Yard Sail user!</p>
                <h4>Username: {userData.username}</h4>
                <p> Want to create a new listing? If so, click on the button below!</p>
                <Button href="/newproduct" id="create-product">Create Listing</Button>
                <p>Permantly delete your account, active listings, and all data associated with it.</p>
                <p id="warning"> Warning: this action can't be undone!</p> 
                <Button id="delete-account" onClick={handleDelete}>Delete Account</Button>
                </div>
            </div>
        </div>
        </div>

        <div className="active-listings">
            <h2>Your Active Listings:</h2>
            <div className="row">
                {userProductData.map((product, i) => {
                    return(
                    <div key={i} className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src={product.image} alt={product.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            
                            <div>
                            <Link to={"/" + product._id + "/edit"}>Edit</Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default AccountPage 
