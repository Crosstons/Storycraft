import { tezos } from "./tezos";

export const createOperation = async (title, first_chapter_hash) => {
    try {
      const contractInstance = await tezos.wallet.at('KT1LmLfxs3QVGhxfjoH8Vs79VB5rLLJbUdH6');
      const op = await contractInstance.methods.createStory.send(title, first_chapter_hash);
      await op.confirmation(1);
    } catch (err) {
      throw err;
    }
  };