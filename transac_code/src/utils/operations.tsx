import config from "../config";
import { TezosToolkit } from "@taquito/taquito";
import { checkIfWalletConnected } from "./wallet";
import { wallet } from "./wallet";
import { rpcURL } from "./wallet";

export const addUserOperation = async () => {
    // const wallet = new BeaconWallet(options);
   try {
    const response = await checkIfWalletConnected(wallet);
  
    if (response.success) {
      const tezos = new TezosToolkit(rpcURL);
      tezos.setWalletProvider(wallet);
      const contract = await tezos.wallet.at(config.contractAddress);
      const operation = await contract.methods.add_user("www.pornhub.com").send();
      const result = await operation.confirmation();
      console.log(result);
    }
   } catch (error) {
    throw(error)
    
   }
  };

// export const addUserOperation = async (changeName) => {

//     try {
//         const op = await 
//     } catch (error) {
        
//     }

// }