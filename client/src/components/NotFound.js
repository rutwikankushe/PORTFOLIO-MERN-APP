import React from 'react';
import { Helmet } from "react-helmet";

export const NotFound = () => {
    return (
        <div >
            <Helmet>
                <title>404 NotFound-PORTFOLIO MAKER'S</title>
                <meta name='description' content="Portfolio Maker Free" ></meta>
            </Helmet>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, Page not found!</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a href="#">Back To Homepage</a>
                </div>
            </div>
        </div>
    )
}

export default NotFound