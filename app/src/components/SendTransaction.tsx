/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import React, { useState } from 'react';
import { sendTransaction } from '../utils/sendTransaction';

const SendTransaction: React.FC = () => {
    const [destination, setDestination] = useState('');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await sendTransaction(destination, amount);
            setResult(`Transaction successful! Hash: ${response.hash}`);
        } catch (error) {
            // @ts-ignore
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Destination Address:</label>
                <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Send Transaction</button>
            {result && <p>{result}</p>}
        </form>
    );
};

export default SendTransaction;