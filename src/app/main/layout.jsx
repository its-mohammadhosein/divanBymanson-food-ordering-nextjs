import BotNav from '@/components/BotNav';
import MenuNav from '@/components/MenuNav';
import TopBar from '@/components/TopBar';

export default function Layout({ children }) {
  return (
    <>
      <div className=" min-h-[100vh] ">
        <TopBar />

        <div className=" pt-4 bg-[#f3f3f3] h-[88vh] overscroll-none">
          {children}
        </div>
        <BotNav />
      </div>
    </>
  );
}
