"use client"

import React, { useState, useEffect } from 'react';
import { isConnected, getAddress } from '@stellar/freighter-api';
import SendTransaction from '@/components/SendTransaction';

const WalletConnect: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      const connectionStatus = await isConnected();
      if (connectionStatus.isConnected) {
        fetchAddress();
      }
    };

    checkConnection();
  }, []);

  const fetchAddress = async () => {
    const addressResponse = await getAddress();
    if (addressResponse.error) {
      setErrorMessage(addressResponse.error);
    } else {
      setWalletAddress(addressResponse.address);
    }
  };

  const handleConnect = async () => {
    const connectionStatus = await isConnected();
    if (!connectionStatus.isConnected) {
      alert('Please install Freighter wallet!');
    } else {
      fetchAddress();
    }
  };

  return (
    <div>
      <h1>Connect to Freighter Wallet</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {walletAddress ? (
        <div>
          Connected: {walletAddress}
          <SendTransaction />
        </div>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;