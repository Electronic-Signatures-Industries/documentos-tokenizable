
import { Wallet } from "xdv-universal-wallet/src/crypto/Wallet";
import Web3 from "web3";

const ModalHelper = (props) => {
    const enrollAccount = async (accountName, passphrase) => {

        let wallet = new Wallet()

        await wallet.open(accountName, passphrase);

        await wallet.enrollAccount({
            passphrase,
            accountName,
        })
        
        return wallet.getAccount();
    }

    const openWallet = async (accountName, passphrase, keystoreId) => {

        let wallet = new Wallet()

        await wallet.open(accountName, passphrase);

        const account = await wallet.getAccount();

        const ks_wallet = account.get('keystores').find((w) => w._id === keystoreId)
        return ks_wallet;
    }

    const createWallet = async (accountName, passphrase) => {

        let wallet = new Wallet()

        await wallet.open(accountName, passphrase)

        // add wallet with no mnemonic
        const walletId = await wallet.addWallet()
        return walletId;
    }

    const createWeb3Provider = async (accountName, passphrase, keystoreId) => {
        let wallet = new Wallet()

        await wallet.open(accountName, passphrase);

        const account = await wallet.getAccount();
        const ks_wallet = account.get('keystores').find((w) => w._id === keystoreId)
        

        const walletId = await wallet.addWallet()
        // Create 3ID enabled Web3 provider
        const result = await wallet.createWeb3Provider({
            rpcUrl: process.env.PROVIDER_URL,
            walletId
        })

        return result;
    }
}