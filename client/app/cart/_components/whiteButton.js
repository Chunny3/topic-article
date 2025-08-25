"use client"

import "@/styles/cart/button.css";

export default function WhiteButton({step}) {
    return (
        <button className="white-button">
            <h6>{step}</h6>
        </button>
    )
}