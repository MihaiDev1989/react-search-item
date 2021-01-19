import React from "react";
import "./search-box.styles.css";

export const Searchbox = ({ placeholder, handleChange }) => (
    <div className="search-wr">
        <i class="fa fa-search"></i>
        <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
);