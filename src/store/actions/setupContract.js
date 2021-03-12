import Web3 from "web3";
import { Wallet } from "xdv-universal-wallet";
import { DIDManager } from "xdv-universal-wallet/lib/3id/DIDManager";

export const setup = ( payload ) => {
    const web3_data = (await this.getXDVWeb3Provider());
    this.web3 = web3_data.web3;
    this.ethersInstance = web3_data.ethersInstance;
    this.contract =  new this.web3.eth.Contract(xdvAbi.XDVDocumentAnchoring.raw.abi, xdvAbi.XDVDocumentAnchoring.address.bsctestnet);
    this.daiContract = new this.web3.eth.Contract(xdvAbi.DAI.raw.abi, xdvAbi.DAI.address.bsctestnet);
}

binanceSmartChain(web3,address){
    const didManager = new DIDManager();
    return didManager.create3IDWeb3External(web3,address)
}

async getXDVWeb3Provider(network){
    // Init with HD mnemonic (server side)
    const providerUrl = 'https://data-seed-prebsc-1-s2.binance.org:8545/'; //'https://bsc-dataseed1.ninicoin.io/';

    const hasWalletSessions = await Wallet.hasActiveSession();
    let walletId = '';
    if(!hasWalletSessions){
        //todo create wallet
        // walletId =
    }
    else{
        walletId = Wallet.getCurrentWalletId();
    }
    const universalWalletContext = await Wallet.createWeb3Provider({ passphrase: '', walletid: walletId, rpcUrl: providerUrl });

    const ethersInstance = new ethers.providers.Web3Provider(web3.currentProvider as any);

    // activesesion
    // get current wallet
    // get passphrase from ui
    
    

    
    return { web3, ethersInstance };
  }