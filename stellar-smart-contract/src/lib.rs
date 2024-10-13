#![no_std]

use soroban_sdk::{contractimpl, Env, Symbol, Address, BytesN};

pub struct TokenContract;

pub struct NFTContract;

#[derive(Debug)]
pub enum Error {
    InsufficientBalance,
    NFTNotFound,
    NotNFTOwner,
}

#[derive(Clone)]
pub struct NFT {
    pub id: BytesN<32>,
    pub owner: Address,
    pub metadata: Symbol,
}

#[contractimpl]
impl TokenContract {
    pub fn initialize(env: Env, admin: Address, initial_supply: i128) {
        let balance_key = Symbol::new(&env, "balance");
        env.storage().set((balance_key, admin.clone()), initial_supply);
    }

    pub fn balance(env: Env, user: Address) -> i128 {
        let balance_key = Symbol::new(&env, "balance");
        env.storage().get((balance_key, user)).unwrap_or(0)
    }

    pub fn transfer(env: Env, from: Address, to: Address, amount: i128) -> Result<(), Error> {
        let balance_key = Symbol::new(&env, "balance");

        let from_balance = env.storage().get((balance_key, from.clone())).unwrap_or(0);
        if from_balance < amount {
            return Err(Error::InsufficientBalance);
        }

        let to_balance = env.storage().get((balance_key, to.clone())).unwrap_or(0);

        env.storage().set((balance_key, from.clone()), from_balance - amount);
        env.storage().set((balance_key, to.clone()), to_balance + amount);

        Ok(())
    }
}

#[contractimpl]
impl NFTContract {
    pub fn mint(env: Env, admin: Address, id: BytesN<32>, metadata: Symbol) {
        let nft_key = Symbol::new(&env, "nft");
        env.storage().set((nft_key, id.clone()), NFT { id, owner: admin.clone(), metadata });
    }

    pub fn transfer(env: Env, from: Address, to: Address, nft_id: BytesN<32>) -> Result<(), Error> {
        let nft_key = Symbol::new(&env, "nft");

        let mut nft: NFT = env.storage().get((nft_key, nft_id.clone())).ok_or(Error::NFTNotFound)?;

        if nft.owner != from {
            return Err(Error::NotNFTOwner);
        }

        nft.owner = to.clone();
        env.storage().set((nft_key, nft_id), nft);
        Ok(())
    }

    pub fn get_nft_details(env: Env, nft_id: BytesN<32>) -> Result<NFT, Error> {
        let nft_key = Symbol::new(&env, "nft");

        env.storage().get((nft_key, nft_id)).ok_or(Error::NFTNotFound)
    }

    pub fn get_nft_owner(env: Env, nft_id: BytesN<32>) -> Result<Address, Error> {
        let nft_key = Symbol::new(&env, "nft");
        let nft: NFT = env.storage().get((nft_key, nft_id)).ok_or(Error::NFTNotFound)?;

        Ok(nft.owner)
    }
}
