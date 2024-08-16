import React from 'react'

const Price = () => {
  return (
    <>
        <h2 className="text-3xl font-bold apiheading-color">API Pricing</h2> 
                    <p className="mt-4">Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>

                    <div className="flex-col">
                        <div className="tablebg shadow-lg rounded-lg w-full mt-3  border-gray-400 border-opacity-15 border-[0.5px]">
                        <table className="w-full text-left rounded-lg overflow-x-auto">
                            <thead>
                            <tr className=' border-gray-400 border-opacity-15 border-[0.5px] tablehead'>
                                <th className="px-6 py-3">API</th>
                                <th className="px-6 py-3">Model</th>
                                <th className="px-6 py-3">Price per 1K Tokens</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className=' border-gray-400 border-opacity-15 border-[0.5px]'>
                                <td className="px-6 py-3">OpenAI</td>
                                <td className="px-6 py-3">GPT-3.5</td>
                                <td className="px-6 py-3">$0.002</td>
                            </tr>
                            <tr className=' border-gray-400 border-opacity-15 border-[0.5px]'>
                                <td className="px-6 py-3">OpenAI</td>
                                <td className="px-6 py-3">GPT-4</td>
                                <td className="px-6 py-3">$0.03</td>
                            </tr>
                            <tr className=' border-gray-400 border-opacity-15 border-[0.5px]'>
                                <td className="px-6 py-3">Together AI</td>
                                <td className="px-6 py-3">Llama-2-70b</td>
                                <td className="px-6 py-3">$0.0008</td>
                            </tr>
                            <tr className=' border-gray-400 border-opacity-15 border-[0.5px]'>
                                <td className="px-6 py-4">Together AI</td>
                                <td className="px-6 py-4">Llama-2-13b</td>
                                <td className="px-6 py-4">$0.0006</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold apiheading-color">Token Estimation</h2>
                            <p>On average, 1 token is approximately 4 characters or 0.75 words. You will only be charged for the tokens used in generating the book.</p>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold apiheading-color">Billing</h2>
                            <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
                        </div>
                    </div>
    </>
  )
}

export default Price