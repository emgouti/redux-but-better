import { atom } from "./atom";
import { createSelector } from "./selector";
import createAsyncSelector_ from "async-selector";
import { AtomOrSelector } from "./atom-or-selector";

export type PromiseState = {
  id: string;
  cancelled: boolean;
};

export function createAsyncSelector<ReturnType, DefaultValue>(params: {
  id: string;
  inputs?: [];
  func: (state: PromiseState) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<S1, ReturnType, DefaultValue>(params: {
  id: string;
  inputs: [AtomOrSelector<S1>];
  func: (val1: S1, state: PromiseState) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<S1, S2, ReturnType, DefaultValue>(params: {
  id: string;
  inputs: [AtomOrSelector<S1>, AtomOrSelector<S2>];
  func: (val1: S1, val2: S2, state: PromiseState) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<
  S1,
  S2,
  S3,
  ReturnType,
  DefaultValue
>(params: {
  id: string;
  inputs: [AtomOrSelector<S1>, AtomOrSelector<S2>, AtomOrSelector<S3>];
  func: (
    val1: S1,
    val2: S2,
    val3: S3,
    state: PromiseState
  ) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<
  S1,
  S2,
  S3,
  S4,
  ReturnType,
  DefaultValue
>(params: {
  id: string;
  inputs: [
    AtomOrSelector<S1>,
    AtomOrSelector<S2>,
    AtomOrSelector<S3>,
    AtomOrSelector<S4>
  ];
  func: (
    val1: S1,
    val2: S2,
    val3: S3,
    val4: S4,
    state: PromiseState
  ) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<
  S1,
  S2,
  S3,
  S4,
  S5,
  ReturnType,
  DefaultValue
>(params: {
  id: string;
  inputs: [
    AtomOrSelector<S1>,
    AtomOrSelector<S2>,
    AtomOrSelector<S3>,
    AtomOrSelector<S4>,
    AtomOrSelector<S5>
  ];
  func: (
    val1: S1,
    val2: S2,
    val3: S3,
    val4: S4,
    val5: S5,
    state: PromiseState
  ) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  ReturnType,
  DefaultValue
>(params: {
  id: string;
  inputs: [
    AtomOrSelector<S1>,
    AtomOrSelector<S2>,
    AtomOrSelector<S3>,
    AtomOrSelector<S4>,
    AtomOrSelector<S5>,
    AtomOrSelector<S6>
  ];
  func: (
    val1: S1,
    val2: S2,
    val3: S3,
    val4: S4,
    val5: S5,
    val6: S6,
    state: PromiseState
  ) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  ReturnType,
  DefaultValue
>(params: {
  id: string;
  inputs: [
    AtomOrSelector<S1>,
    AtomOrSelector<S2>,
    AtomOrSelector<S3>,
    AtomOrSelector<S4>,
    AtomOrSelector<S5>,
    AtomOrSelector<S6>,
    AtomOrSelector<S7>
  ];
  func: (
    val1: S1,
    val2: S2,
    val3: S3,
    val4: S4,
    val5: S5,
    val6: S6,
    val7: S7,
    state: PromiseState
  ) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8,
  ReturnType,
  DefaultValue
>(params: {
  id: string;
  inputs: [
    AtomOrSelector<S1>,
    AtomOrSelector<S2>,
    AtomOrSelector<S3>,
    AtomOrSelector<S4>,
    AtomOrSelector<S5>,
    AtomOrSelector<S6>,
    AtomOrSelector<S7>,
    AtomOrSelector<S8>
  ];
  func: (
    val1: S1,
    val2: S2,
    val3: S3,
    val4: S4,
    val5: S5,
    val6: S6,
    val7: S7,
    val8: S8,
    state: PromiseState
  ) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector<
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8,
  S9,
  ReturnType,
  DefaultValue
>(params: {
  id: string;
  inputs: [
    AtomOrSelector<S1>,
    AtomOrSelector<S2>,
    AtomOrSelector<S3>,
    AtomOrSelector<S4>,
    AtomOrSelector<S5>,
    AtomOrSelector<S6>,
    AtomOrSelector<S7>,
    AtomOrSelector<S8>,
    AtomOrSelector<S9>
  ];
  func: (
    val1: S1,
    val2: S2,
    val3: S3,
    val4: S4,
    val5: S5,
    val6: S6,
    val7: S7,
    val8: S8,
    val9: S9,
    state: PromiseState
  ) => Promise<ReturnType>;
  defaultValue: DefaultValue;
  throttle?: (f: () => void) => () => void;
}): [
  () => ReturnType | DefaultValue,
  () => boolean,
  () => any | undefined,
  () => void
];

export function createAsyncSelector(params) {
  const { id, func, inputs, defaultValue, throttle } = params;

  const asyncSelectorAtom = atom({
    id: `__valueAtom__${id}`,
    data: undefined as any
  });
  const isLoadingSelector = createSelector({
    id: `__isLoadingSelectorSelector__${id}`,
    inputs: [asyncSelectorAtom],
    func: d => (d ? d.isWaiting : false)
  });
  const errorSelector = createSelector({
    id: `__errorSelectorSelector__${id}`,
    inputs: [asyncSelectorAtom],
    func: d => (d.isRejected ? d.value : undefined)
  });

  const asyncFunc = (...params) => {
    const state = {
      id,
      cancelled: false
    };
    const promise: any = new Promise((res, rej) => {
      func(...params, state)
        .then(res)
        .catch(rej);
    });
    promise.state = state;
    return promise;
  };

  const asyncSelector = createAsyncSelector_(
    {
      async: asyncFunc,
      throttle,
      onResolve: () => asyncSelectorAtom.set(asyncSelector()),
      onReject: () => asyncSelectorAtom.set(asyncSelector()),
      onCancel: promise => {
        promise.state.cancelled = true;
      }
    },
    inputs
  );

  const selector = createSelector({
    id: `__asyncSelector__${id}`,
    inputs: [asyncSelectorAtom, ...inputs] as any,
    func: d => {
      asyncSelectorAtom.set(asyncSelector());
      return d ? d.previous : defaultValue;
    }
  });

  const forceUpdate = () => asyncSelector.forceUpdate();
  return [selector, isLoadingSelector, errorSelector, forceUpdate];
}
