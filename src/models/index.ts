import { LumTypes, LumWallet } from '@lum-network/sdk-javascript';
import { Proposal as BaseProposal } from '@lum-network/sdk-javascript/build/codec/cosmos/gov/v1/gov';
import { Validator } from '@lum-network/sdk-javascript/build/codec/cosmos/staking/v1beta1/staking';
import { Models } from '@rematch/core';
import { governance } from '../redux/models/governance';
import { staking } from '../redux/models/staking';
import { wallet } from '../redux/models/wallet';

export interface RootModel extends Models<RootModel> {
    wallet: typeof wallet;
    staking: typeof staking;
    governance: typeof governance;
}

export const reduxModels: RootModel = { wallet, staking, governance };

export interface Wallet extends LumWallet {
    isExtensionImport?: boolean;
    isNanoS?: boolean;
}

export interface CommonTransactionProps {
    messages: string[];
    hash: string;
    height: number;
    amount: LumTypes.Coin[];
    memo?: string;
    success?: boolean;
    [key: string]: string | LumTypes.Coin[] | number | boolean | string[] | undefined;
}

export interface Transaction extends CommonTransactionProps {
    fromAddress: string;
    toAddress: string;
}

export interface StakingTransaction extends CommonTransactionProps {
    delegatorAddress: string;
    validatorAddress: string;
}

export interface Reward {
    validatorAddress: string;
    reward: LumTypes.Coin[];
}

export interface Rewards {
    rewards: Reward[];
    total: LumTypes.Coin[];
}

export interface UserValidator extends Validator {
    reward: number;
    stakedCoins: string;
}

export enum PasswordStrengthType {
    Strong = 'strong',
    Medium = 'medium',
    Weak = 'weak',
}

export type PasswordStrength = PasswordStrengthType.Weak | PasswordStrengthType.Medium | PasswordStrengthType.Strong;

export enum SoftwareMethod {
    Mnemonic = 'mnemonic',
    PrivateKey = 'privateKey',
    Keystore = 'keystore',
    Guarda = 'guarda',
}

export enum ExtensionMethod {
    Keplr = 'keplr',
}

export enum HardwareMethod {
    Cosmos = 'cosmos',
    Lum = 'lum',
}

export interface Vestings {
    endsAt: Date;
    lockedCoins: LumTypes.Coin;
    lockedBankCoins: LumTypes.Coin;
    lockedDelegatedCoins: LumTypes.Coin;
}

export interface Airdrop {
    amount: number;
    vote: boolean;
    delegate: boolean;
}

export interface VotesResult {
    yes: number;
    no: number;
    noWithVeto: number;
    abstain: number;
}

export interface Proposal extends BaseProposal {
    content: {
        title: string;
        description: string;
    } | null;
    finalResult: VotesResult;
}

export interface PreviousDayPrice {
    value: number;
    time: number;
}

export interface LumInfo {
    price: number;
    denom: string;
    symbol: string;
    volume_24h: number;
    name: number;
    previousDaysPrices: PreviousDayPrice[];
}
