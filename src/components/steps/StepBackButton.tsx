"use client";
import { decreaseStep } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppSelector } from "@/redux/hook";
import { IoChevronBack } from "react-icons/io5";
import { useDispatch } from "react-redux";

const StepBackButton = () => {
  const { step } = useAppSelector((state) => state.customer);
  const dispatch = useDispatch();
  if (step === 1) {
    return <></>;
  }

  const handleStepBack = () => {
    if (step === 1) {
      return;
    }
    dispatch(decreaseStep(undefined));
  };
  return (
    <button
      onClick={handleStepBack}
      className={`relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-[25px] w-fit`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
        <IoChevronBack /> Go back
      </span>
    </button>
  );
};

export default StepBackButton;
