import { Button } from '@mui/material';
import React from 'react'
import image3 from './../Images/body image.png'

const Section4 = () => {
    return (
        <>
            <div className="flex flex-row bg-slate-200">
                <div className="w-9/12">
                    <div className="m-5">
                        <p className="text-slate-500 m-10">
                            Your workforce is any user and device that connects to your applications. Now that
                            they're increasingly located outside of your corporate walls due to the increase in
                            mobile devices and cloud applications, enterprises lack visibility into and control
                            over them. How can you ensure users are really who they say they are? And that
                            their devices aren't running out-of-date software with vulnerabilities, making them
                            more likely to be compromised?
                        </p>
                    </div>
                    <div className="text-blue-900 text-xl font-bold ml-16">
                        Embed Zero Trust across the fabric of your multi-environment IT
                    </div>
                    <div className="text-blue-900  text-xl font-bold ml-16 mt-5">
                        Protect the integrity of your business in a way that frustrates attackers, not the users.
                    </div>
                </div>
                <div >
                    <div className="">
                        <img
                            src={image3}
                            alt=""
                            style={{
                                height: "340px",
                                width: "360px",
                            }}
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Section4