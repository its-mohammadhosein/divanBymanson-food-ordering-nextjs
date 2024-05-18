import BotNav from '@/components/BotNav';
import MenuNav from '@/components/MenuNav';
import TopBar from '@/components/TopBar';

export default function Layout({ children }) {
  return (
    <>
      <div className="relative min-h-[100vh] ">
        <TopBar />

        <div className=" pt-4 bg-[#f3f3f3] h-[100vh]">{children}</div>
        <BotNav />
      </div>
    </>
  );
}
