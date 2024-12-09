import { CancelSvg } from "../svg/Cancel";
import { ChangeSvg } from "../svg/Change";
import { SelfTransferSvg } from "../svg/SelfTransfer";
import { PartiallySvg } from "../svg/Partially";
import { RefundableSvg } from "../svg/Refundable";
import { ProtectedSvg } from "../svg/Protected";

export const filterData = [
  {
    label: "Cancellation Allowed",
    key: "isCancellationAllowed",
    svg: <CancelSvg />,
  },
  {
    label: "Change Allowed",
    key: "isChangeAllowed",
    svg: <ChangeSvg />,
  },
  {
    label: "Partially Changeable",
    key: "isPartiallyChangeable",
    svg: <PartiallySvg />,
  },
  {
    label: "Partially Refundable",
    key: "isPartiallyRefundable",
    svg: <RefundableSvg />,
  },
  {
    label: "Protected Self Transfer",
    key: "isProtectedSelfTransfer",
    svg: <ProtectedSvg />,
  },
  {
    label: "Self Transfer",
    key: "isSelfTransfer",
    svg: <SelfTransferSvg />,
  },
];
