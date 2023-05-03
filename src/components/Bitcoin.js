import React, { useState } from 'react'

const Bitcoin = () => {
    const [currentprice, setCurrentPrice] = useState("")
    const [previousPrice, setPreviousPrice] = useState("")
    const [buttonText, setButtonText] = useState("Get Bitcoin price")
    const [buttonColor, setButtonColor] = useState("blue")
    const [showpreviousPrice,setShowPreviousPrice] = useState(false)
    const getBitcoinPrice=()=>{
        const fetchPrice = Math.random() * 10000;
        setPreviousPrice(currentprice)
        setCurrentPrice(fetchPrice.toFixed(2))
        setButtonText("Refresh Bitcoin price")
        setButtonColor("purple")
        setShowPreviousPrice(true)
    }
    return (
        <div>
            <button style={{color:buttonColor}} onClick={getBitcoinPrice}>{buttonText}</button>
            <br/>
            {
                currentprice && (
                    <div>
                        <strong>Current Price:</strong>{currentprice}
                    </div>
                )
            }
            {
                showpreviousPrice && (
                    <div>
                        <strong>Previous Price:</strong>{previousPrice}
                    </div>
                )
            }
        </div>
    )
}

export default Bitcoin
