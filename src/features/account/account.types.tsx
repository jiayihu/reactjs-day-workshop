export type BankAccount = {
  kind: 'Bank';
  id: string;
  iban: string;
  institutionId: string;
  ownerName: string;
  lastUpdate: string | null;
};

export type CashAccount = {
  kind: 'Cash';
  id: string;
  name: string;
  amount: CurrencyValue;
  lastUpdate: string | null;
};

export type Account = BankAccount | CashAccount;

export type CurrencyValue = {
  amount: string;
  currency: string;
};

export type Balance = {
  balanceAmount: CurrencyValue;
  balanceType: 'expected' | 'interimAvailable';
};
