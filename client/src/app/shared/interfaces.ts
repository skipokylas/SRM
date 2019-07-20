export interface IUser {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface ICategory {
  name: string;
  imageSrc?: string;
  user?: string;
  _id?: string;
}

export interface IMessage {
  message: string;
}

export interface IPosition {
  name: string;
  cost: number;
  user?: string;
  category: string;
  _id?: string;
  quantity?: number;
}

export interface MaterialModalInstance {
  open?(): void;
  close?(): void;
  destroy?(): void;
}
