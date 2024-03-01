import {Link, NavLink, useNavigate} from "react-router-dom";
import React from "react";

export function Footer() {
  
    return (
        <>
           <div className="footer">
             <ul>
              <li>
                <NavLink to="/">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/">Customer Support</NavLink>
              </li>
              <li>
                <NavLink to="/">Terms of Use</NavLink>
              </li>
              <li>
                <NavLink to="/">Privacy Policy</NavLink>
              </li>            
             </ul>
             <p>© 2023 Posiitive.io. All Rights Reserved.</p>
           </div>
           
        </>
    );
}
