import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center font-SFmono bg-[#000000] text-[#FFFFFF] h-10 text-2xl">
       BookMarks
      </div>
      <div className="flex justify-center font-SFmono text-6xl text-[#FFFFFF] mt-230">BookMarks Manager</div>
      <div className="flex justify-center font-SFmono text-2xl text-[#FFFFFF] mt-10">Keep your Links Handy</div>
      <div className="flex justify-center font-SFmono text-lg text-[#999999] mt-230">Why Need It? Because Arc Browser Does't Have It!</div>
      <div className="flex justify-center gap-20 mt-50">
      <Link href={'/signup'}><div className="bg-[#FFFFFF] flex justify-center px-12 py-2 rounded">SignUp</div></Link>
      <Link href={'/signin'}><div className="bg-[#FFFFFF] flex justify-center px-12 py-2 rounded">SignIn</div></Link>
      </div>
    </main>
  );
}
