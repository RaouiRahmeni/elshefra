import logo from "@/assets/logo.png";
import Image from "next/image";
// const WavyText = ({ text }: { text: string }) => {
//   return (
//     <>
//       {text.split("").map((char, i) => (
//         <span
//           key={i}
//           className="inline-block"
//           style={{
//             animation: `wave 1.5s ease-in-out ${i * 0.1}s infinite`,
//           }}
//         >
//           {char}
//         </span>
//       ))}
//     </>
//   );
// };
const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-6 items-center w-11/12 h-[90vh] rounded-3xl bg-gradient-to-bl from-pink-200 via-white to-sky-100">
        <div className="flex items-center gap-2 my-10">
          <Image src={logo} alt="logoimg" width={60} height={60} />
          <div className="">
            <p className="text-start text-3xl">CODNA</p>
            <p className="text-start text-xs">CODING THE VISIONS</p>
          </div>
        </div>
        <div className="my-20">
          <p className="text-5xl text-center font-merienda">
            Delivering scalable, user-focused websites <br />
            aligned with your business goals.
          </p>
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="mouse-scroll-animation"></div>
      </div>
    </div>
  );
};

export default Hero;
