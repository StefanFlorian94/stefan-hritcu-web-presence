import { IoCloseSharp } from "react-icons/io5";

export default function CloseSidebar() {
  return (
    <>
      <div className="absolute top-8 right-8">
        <IoCloseSharp className="w-10 h-10 cursor-pointer" />
      </div>
    </>
  );
}
