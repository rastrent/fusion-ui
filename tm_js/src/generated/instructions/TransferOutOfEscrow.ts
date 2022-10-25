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
  TransferOutOfEscrowArgs,
  transferOutOfEscrowArgsBeet,
} from '../types/TransferOutOfEscrowArgs';

/**
 * @category Instructions
 * @category TransferOutOfEscrow
 * @category generated
 */
export type TransferOutOfEscrowInstructionArgs = {
  transferOutOfEscrowArgs: TransferOutOfEscrowArgs;
};
/**
 * @category Instructions
 * @category TransferOutOfEscrow
 * @category generated
 */
export const TransferOutOfEscrowStruct = new beet.BeetArgsStruct<
  TransferOutOfEscrowInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['transferOutOfEscrowArgs', transferOutOfEscrowArgsBeet],
  ],
  'TransferOutOfEscrowInstructionArgs',
);
/**
 * Accounts required by the _TransferOutOfEscrow_ instruction
 *
 * @property [] escrow Escrow account
 * @property [_writable_, **signer**] payer Wallet paying for the transaction and new account
 * @property [] attributeMint Mint account for the new attribute
 * @property [_writable_] attributeSrc Token account source for the new attribute
 * @property [_writable_] attributeDst Token account, owned by TM, destination for the new attribute
 * @property [] escrowMint Mint account that the escrow is attached
 * @property [] escrowAccount Token account that holds the token the escrow is attached to
 * @property [**signer**] authority (optional) Authority/creator of the escrow account
 * @category Instructions
 * @category TransferOutOfEscrow
 * @category generated
 */
export type TransferOutOfEscrowInstructionAccounts = {
  escrow: web3.PublicKey;
  payer: web3.PublicKey;
  attributeMint: web3.PublicKey;
  attributeSrc: web3.PublicKey;
  attributeDst: web3.PublicKey;
  escrowMint: web3.PublicKey;
  escrowAccount: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  ataProgram?: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
  authority?: web3.PublicKey;
};

export const transferOutOfEscrowInstructionDiscriminator = 40;

/**
 * Creates a _TransferOutOfEscrow_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category TransferOutOfEscrow
 * @category generated
 */
export function createTransferOutOfEscrowInstruction(
  accounts: TransferOutOfEscrowInstructionAccounts,
  args: TransferOutOfEscrowInstructionArgs,
  programId = new web3.PublicKey('metAg34PXf1DtCM3pwpYiNMsMmTkYq6suEsGxfAVrRq'),
) {
  const [data] = TransferOutOfEscrowStruct.serialize({
    instructionDiscriminator: transferOutOfEscrowInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.escrow,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.attributeMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.attributeSrc,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.attributeDst,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ataProgram ?? splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.authority != null) {
    keys.push({
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
