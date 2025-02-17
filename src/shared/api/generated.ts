/**
 * Generated by orval v6.19.0 🍺
 * Do not edit manually.
 * Block List
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export type BlockListControllerGetListParams = {
  q?: string;
};

export type AddBlockItemDtoType =
  (typeof AddBlockItemDtoType)[keyof typeof AddBlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddBlockItemDtoType = {
  Keyword: "Keyword",
  Website: "Website",
} as const;

export interface AddBlockItemDto {
  data: string;
  type: AddBlockItemDtoType;
}

export type BlockItemDtoType =
  (typeof BlockItemDtoType)[keyof typeof BlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockItemDtoType = {
  Keyword: "Keyword",
  Website: "Website",
} as const;

export interface BlockItemDto {
  blockListId: number;
  createdAt: string;
  data: string;
  id: number;
  type: BlockItemDtoType;
}

export interface BlockListDto {
  id: number;
  items: BlockItemDto[];
  ownerId: number;
}

export interface PatchAccountDto {
  isBlockingEnabled?: boolean;
}

export interface AccountDto {
  id: number;
  isBlockingEnabled: boolean;
  ownerId: number;
}

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: number;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpBodyDto {
  email: string;
  password: string;
}

export interface HelloWorldDto {
  message: string;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const appControllerGetHello = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<HelloWorldDto>({ url: `/`, method: "get" }, options);
};

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-up`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: signUpBodyDto,
    },
    options,
  );
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-in`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: signInBodyDto,
    },
    options,
  );
};

export const authControllerSignOut = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/auth/sign-out`, method: "post" },
    options,
  );
};

export const authControllerGetSessionInfo = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<GetSessionInfoDto>(
    { url: `/auth/session`, method: "get" },
    options,
  );
};

export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    { url: `/account`, method: "get" },
    options,
  );
};

export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    {
      url: `/account`,
      method: "patch",
      headers: { "Content-Type": "application/json" },
      data: patchAccountDto,
    },
    options,
  );
};

export const blockListControllerGetList = (
  params?: BlockListControllerGetListParams,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockListDto>(
    { url: `/block-list`, method: "get", params },
    options,
  );
};

export const blockListControllerAddBlockItem = (
  addBlockItemDto: BodyType<AddBlockItemDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockListDto>(
    {
      url: `/block-list/item`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: addBlockItemDto,
    },
    options,
  );
};

export const blockListControllerRemoveBlockItem = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<unknown>(
    { url: `/block-list/item/${id}`, method: "delete" },
    options,
  );
};

export type AppControllerGetHelloResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type BlockListControllerGetListResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerGetList>>
>;
export type BlockListControllerAddBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerAddBlockItem>>
>;
export type BlockListControllerRemoveBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerRemoveBlockItem>>
>;
