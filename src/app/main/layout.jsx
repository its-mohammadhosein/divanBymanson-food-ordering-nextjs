import BotNav from '@/components/BotNav';
import MenuNav from '@/components/MenuNav';
import TopBar from '@/components/TopBar';

export default function Layout({ children }) {
  return (
    <>
      <div className="max-h-min ">
        <TopBar />

        <div className=" pt-4 bg-[#f3f3f3] h-[932px] overscroll-none">
          {children}
        </div>
        <BotNav />
      </div>
    </>
  );
}
