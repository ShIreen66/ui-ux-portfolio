import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" style={{
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize:'18px',
          fontWeight:'800',
          color:'#000',
          gap:'12px'
        }}>
        <div
        style={{
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '40px',
          backgroundColor: 'red',
          fontSize:'22px',
          fontWeight:'800',
          color:'#fff'
        }}>D</div> 
        <div>Danish Khan</div>
      </Link>
    </>
  );
};

export default Logo;
