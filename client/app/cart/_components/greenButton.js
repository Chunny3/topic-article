"use client"

import "@/styles/cart/button.css";

export default function GreenButton({step}) {
    return (
        <button className="green-button">
            <h6>{step}</h6>
        </button>
    )
}