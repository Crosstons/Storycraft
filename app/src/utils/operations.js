import { tezos } from "./tezos";

export const createOperation = async (title, first_chapter_hash) => {
    try {
      const contractInstance = await tezos.wallet.at('KT1EKEtkRgpFzZL7vdHuFetAALUw6QnZRkEZ');
      console.log(contractInstance);
      const op = await contractInstance.methods.default(title, first_chapter_hash).send();
      await op.confirmation(1);
    } catch (err) {
      throw err;
    }
  };