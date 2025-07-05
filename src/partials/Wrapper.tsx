/** @format */

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center py-20 px-5">
      <div className="w-[644px] max-w-full space-y-10">{children}</div>
    </div>
  );
}
