/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import {
  ApproveUseAuthorityArgs,
  approveUseAuthorityArgsBeet,
} from '../types/ApproveUseAuthorityArgs';

/**
 * @category Instructions
 * @category ApproveUseAuthority
 * @category generated
 */
export type ApproveUseAuthorityInstructionArgs = {
  approveUseAuthorityArgs: ApproveUseAuthorityArgs;
};
/**
 * @category Instructions
 * @category ApproveUseAuthority
 * @category generated
 */
export const ApproveUseAuthorityStruct = new beet.BeetArgsStruct<
  ApproveUseAuthorityInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['approveUseAuthorityArgs', approveUseAuthorityArgsBeet],
  ],
  'ApproveUseAuthorityInstructionArgs',
);
/**
 * Accounts required by the _ApproveUseAuthority_ instruction
 *
 * @property [_writable_] useAuthorityRecord Use Authority Record PDA
 * @property [_writable_, **signer**] owner Owner
 * @property [_writable_, **signer**] payer Payer
 * @property [] user A Use Authority
 * @property [_writable_] ownerTokenAccount Owned Token Account Of Mint
 * @property [] metadata Metadata account
 * @property [] mint Mint of Metadata
 * @property [] burner Program As Signer (Burner)
 * @category Instructions
 * @category ApproveUseAuthority
 * @category generated
 */
export type ApproveUseAuthorityInstructionAccounts = {
  useAuthorityRecord: web3.PublicKey;
  owner: web3.PublicKey;
  payer: web3.PublicKey;
  user: web3.PublicKey;
  ownerTokenAccount: web3.PublicKey;
  metadata: web3.PublicKey;
  mint: web3.PublicKey;
  burner: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
};

export const approveUseAuthorityInstructionDiscriminator = 20;

/**
 * Creates a _ApproveUseAuthority_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ApproveUseAuthority
 * @category generated
 */
export function createApproveUseAuthorityInstruction(
  accounts: ApproveUseAuthorityInstructionAccounts,
  args: ApproveUseAuthorityInstructionArgs,
  programId = new web3.PublicKey('metAg34PXf1DtCM3pwpYiNMsMmTkYq6suEsGxfAVrRq'),
) {
  const [data] = ApproveUseAuthorityStruct.serialize({
    instructionDiscriminator: approveUseAuthorityInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.useAuthorityRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.owner,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.user,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ownerTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.burner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.rent != null) {
    keys.push({
      pubkey: accounts.rent,
      isWritable: false,
      isSigner: false,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
