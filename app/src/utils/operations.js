import { tezos } from "./tezos";

export const createOperation = async (title, first_chapter_hash) => {
  try {
    const contractInstance = await tezos.wallet.at('KT1G1TeB6vZV6MSaDR3yZ9ExsQmSnERdgep2');
    console.log(contractInstance);
    const op = await contractInstance.methods.default(title, first_chapter_hash).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const proposeOperation = async (contract, option_1, option_2, option_3) => {
  try {
    const contractInstance = await tezos.wallet.at(contract);
    console.log(contractInstance);
    const op = await contractInstance.methods.propose_chapter(option_1, option_2, option_3).send({amount : 1});
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
}