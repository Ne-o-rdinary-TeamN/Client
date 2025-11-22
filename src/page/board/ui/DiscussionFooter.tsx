import { Button } from "@/shared/ui";

export default function DiscussionFooter() {
  return (
    <footer className="fixed bottom-0 gap-1.5 shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.06)] left-0 right-0 bg-white rounded-t-2xl pb-[10px] px-side pt-side h-footer box-border max-w-max-width mx-auto flex items-center justify-center z-20">
      <input
        className="w-full h-10 rounded-full bg-gray-002 font-regular-13 placeholder:text-gray-003 px-[14px] py-[10px]"
        placeholder="토론에 참여할 의견을 작성해주세요.."
      />
      <Button
        size="sm"
        className="h-full rounded-full font-semibold-14"
        text="등록"
      />
    </footer>
  );
}
