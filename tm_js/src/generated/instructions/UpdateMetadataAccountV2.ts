/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import {
  UpdateMetadataAccountArgsV2,
  updateMetadataAccountArgsV2Beet,
} from '../types/UpdateMetadataAccountArgsV2';

/**
 * @category Instructions
 * @category UpdateMetadataAccountV2
 * @category generated
 */
export type UpdateMetadataAccountV2InstructionArgs = {
  updateMetadataAccountArgsV2: UpdateMetadataAccountArgsV2;
};
/**
 * @category Instructions
 * @category UpdateMetadataAccountV2
 * @category generated
 */
export const UpdateMetadataAccountV2Struct = new beet.FixableBeetArgsStruct<
  UpdateMetadataAccountV2InstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['updateMetadataAccountArgsV2', updateMetadataAccountArgsV2Beet],
  ],
  'UpdateMetadataAccountV2InstructionArgs',
);
/**
 * Accounts required by the _UpdateMetadataAccountV2_ instruction
 *
 * @property [_writable_] metadata Metadata account
 * @property [**signer**] updateAuthority Update authority key
 * @category Instructions
 * @category UpdateMetadataAccountV2
 * @category generated
 */
export type UpdateMetadataAccountV2InstructionAccounts = {
  metadata: web3.PublicKey;
  updateAuthority: web3.PublicKey;
};

export const updateMetadataAccountV2InstructionDiscriminator = 15;

/**
 * Creates a _UpdateMetadataAccountV2_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateMetadataAccountV2
 * @category generated
 */
export function createUpdateMetadataAccountV2Instruction(
  accounts: UpdateMetadataAccountV2InstructionAccounts,
  args: UpdateMetadataAccountV2InstructionArgs,
  programId = new web3.PublicKey('metAg34PXf1DtCM3pwpYiNMsMmTkYq6suEsGxfAVrRq'),
) {
  const [data] = UpdateMetadataAccountV2Struct.serialize({
    instructionDiscriminator: updateMetadataAccountV2InstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.updateAuthority,
      isWritable: false,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
