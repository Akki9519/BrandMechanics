import React from 'react'
import image4 from './../Images/Zerotrust_Image_1.png'
import Button from '@mui/material/Button'
const Section5 = () => {
    return (
        <>
            <div className="bg-indigo-900 p-10">
                <p>If you’d like to learn more about our solutions, or if you’d like to sign up for a
                </p>
                <p>
                    free trial get in touch with us below.
                </p>
            </div>
            <div className="">
                <div className="flex flex-row">
                    <input type="text" className="bg-gray-100 pl-10 m-5 h-10 w-5/12" placeholder="Full name"></input>
                    <input type="text" className="bg-gray-100 pl-10 m-5 h-10 w-5/12" placeholder="Company"></input></div>
                <div className="flex flex-row"><input type="text" className="bg-gray-100 pl-10 m-5 w-5/12" placeholder="Designation"></input>
                    <input type="text" className="bg-gray-100 pl-10 m-5 h-10 w-5/12" placeholder="Email"></input></div>
                <div className="flex flex-row "><input type="text" className="bg-gray-100 pl-10 m-5 h-10 w-5/12" placeholder="Contact number"></input>
                    <div className="ml-16">
                        <img
                            src={image4}
                            alt=""
                            style={{
                                height: "120px",
                                width: "130px",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className=" m-5">
            <Button sx={{ backgroundColor: "green", color: "white", borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px" }}>Get in touch for a FREE</Button>
          </div>
            <div className="h-10 bg-gray-100 text-center mt-10 justify-center">
                Copyright 2023 The Brand Mechanics. All Rights Reserved.
            </div>
        </>
    )
}

export default Section5