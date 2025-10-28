import {Outlet, useNavigation} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import {useState} from "react";


const HomeLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading';
    console.log(navigation)
    const value = 'some value'
    return (
        <>
            <Navbar />
            <section className="page">
                {isPageLoading ? <div className='loading'></div>: <Outlet context={value} />}
            </section>
        </>
    )
}
export default HomeLayout;