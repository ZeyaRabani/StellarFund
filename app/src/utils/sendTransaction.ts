/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getAddress, signTransaction } from '@stellar/freighter-api';
import { TransactionBuilder, Networks } from '@stellar/stellar-sdk';
import { Server } from '@stellar/stellar-sdk/rpc';

const server = new Server('https://horizon-testnet.stellar.org');

export const sendTransaction = async (destination: string, amount: string) => {
    const addressResponse = await getAddress();
    if (addressResponse.error) {
        throw new Error(addressResponse.error);
    }

    const sourcePublicKey = addressResponse.address;

    // @ts-ignore
    const sourceAccount = await server.loadAccount(sourcePublicKey);

    const transaction = new TransactionBuilder(sourceAccount, {
        fee: '100',
        networkPassphrase: Networks.TESTNET,
    })
        .addOperation(
            // @ts-ignore
            StellarSdk.Operation.payment({
                destination,
                // @ts-ignore
                asset: StellarSdk.Asset.native(),
                amount,
            })
        )
        .setTimeout(30)
        .build();

    // @ts-ignore
    const xdr = transaction.toXDR('base64');
    const signedTransactionResponse = await signTransaction(xdr, {
        // @ts-ignore
        network: 'TESTNET',
        address: sourcePublicKey,
    });

    if (signedTransactionResponse.error) {
        throw new Error(signedTransactionResponse.error);
    }

    // @ts-ignore
    const result = await server.submitTransaction(transaction);

    return result;
};
