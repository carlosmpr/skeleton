import React from 'react'
import Button from '../Button'
export default function DoubleCard() {
    return (
        <div className="w-full">
        <div className="flex flex-1 h-72 justify-between gap-y-3">

            <div className="flex-1 mr-10 h-full bg-gradient-to-r from-purple-700  to-pink-500 rounded-lg">
                <div className="w-1/2 text-primary h-full flex flex-col  p-4 gap-y-4">
                    <p className="text-sm">Ethereum 2.0</p>
                    <p className="font-bold text-2xl">Your Gateway into Blockchain</p>
                    <p className="text-sm">Paronia is a blockchain platform.We make blockchain accessible.</p>
                    <Button text="Learn more" />
                </div>
            </div>
            <div className="flex-1 h-full bg-indigo-200 rounded-lg"></div>
        </div>

        </div>
    )
}
