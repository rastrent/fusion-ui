/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import * as beet from '@metaplex-foundation/beet';
import { Key, keyBeet } from '../types/Key';
import { TokenAmount, tokenAmountBeet } from '../types/TokenAmount';

/**
 * Arguments used to create {@link Trifle}
 * @category Accounts
 * @category generated
 */
export type TrifleArgs = {
  key: Key;
  tokenEscrow: web3.PublicKey;
  tokens: Map<string, TokenAmount[]>;
  escrowConstraintModel: web3.PublicKey;
};
/**
 * Holds the data for the {@link Trifle} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Trifle implements TrifleArgs {
  private constructor(
    readonly key: Key,
    readonly tokenEscrow: web3.PublicKey,
    readonly tokens: Map<string, TokenAmount[]>,
    readonly escrowConstraintModel: web3.PublicKey,
  ) {}

  /**
   * Creates a {@link Trifle} instance from the provided args.
   */
  static fromArgs(args: TrifleArgs) {
    return new Trifle(args.key, args.tokenEscrow, args.tokens, args.escrowConstraintModel);
  }

  /**
   * Deserializes the {@link Trifle} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset = 0): [Trifle, number] {
    return Trifle.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Trifle} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<Trifle> {
    const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
    if (accountInfo == null) {
      throw new Error(`Unable to find Trifle account at ${address}`);
    }
    return Trifle.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('trifMWutwBxkSuatmpPVnEe7NoE3BJKgjVi8sSyoXWX'),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, trifleBeet);
  }

  /**
   * Deserializes the {@link Trifle} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Trifle, number] {
    return trifleBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link Trifle} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return trifleBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Trifle} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: TrifleArgs) {
    const instance = Trifle.fromArgs(args);
    return trifleBeet.toFixedFromValue(instance).byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Trifle} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: TrifleArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(Trifle.byteSize(args), commitment);
  }

  /**
   * Returns a readable version of {@link Trifle} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      tokenEscrow: this.tokenEscrow.toBase58(),
      tokens: this.tokens,
      escrowConstraintModel: this.escrowConstraintModel.toBase58(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const trifleBeet = new beet.FixableBeetStruct<Trifle, TrifleArgs>(
  [
    ['key', keyBeet],
    ['tokenEscrow', beetSolana.publicKey],
    ['tokens', beet.map(beet.utf8String, beet.array(tokenAmountBeet))],
    ['escrowConstraintModel', beetSolana.publicKey],
  ],
  Trifle.fromArgs,
  'Trifle',
);
