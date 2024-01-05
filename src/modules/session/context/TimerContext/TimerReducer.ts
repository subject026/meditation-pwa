export type TToastType = "SUBMITTED" | "CONFIRMED" | "REVERTED";

export type TTimerState = {
  status: "INIT" | "RUNNING" | "PAUSED" | "END";
  secondsRemaining: number;
};

export type TToastAction =
  | {
      type: "START";
      payload: { toastType: TToastType; txHash: TTransactionHash };
    }
  | {
      type: "PAUSE";
      payload: { id: string };
    };

export type TToastDispatch = (action: TToastAction) => void;

export function ToastReducer(
  state: TToastState,
  action: TToastAction
): TToastState {
  switch (action.type) {
    case "NEW": {
      if (
        action.payload.toastType === "SUBMITTED" &&
        state.filter(
          (toast) =>
            toast.toastType === "SUBMITTED" &&
            toast.txHash === action.payload.txHash
        ).length > 0
      )
        return state;
      return [
        {
          id: nanoid(),
          toastType: action.payload.toastType,
          txHash: action.payload.txHash,
        },
        ...state,
      ];
    }
    case "CLEAR":
      return state.filter(
        (transaction) => transaction.id !== action.payload.id
      );
    default:
      throw new Error(`ToastContext action not recognised`);
  }
}
