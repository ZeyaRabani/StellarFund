"use client"

import React, { useState, useEffect } from 'react'
import { isConnected, getAddress } from '@stellar/freighter-api'

export default function Page() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

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
      // setErrorMessage(addressResponse.error);
    } else {
      setWalletAddress(addressResponse.address);
      localStorage.setItem('walletAddress', addressResponse.address);
    }
  };

  return (
    <div>
      {walletAddress ? (
        <div>
          Connected: {walletAddress}
        </div>
      ) : (
        <button onClick={fetchAddress}>Connect Wallet</button>
      )
      }
    </div>
  )
}
