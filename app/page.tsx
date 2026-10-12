import Link from "next/dist/client/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
       <div>
        <div className='contain-contenter mx-auto flex justify-center items-center h-[calc(100vh-80px)] flex-col gap-4'>
          <div>
            <h1 className='text-6xl font-bold text-black'>Welcome to ShopMart</h1>
          </div>
          <div>
            <p className='text-black text-[20px] opacity-50 mt-4 '>Discover the latest technology, fashion, and lifestyle products. Quality guaranteed with <br /> <span className="ml-40">fast shipping and excellent customer service.</span></p>
          </div>
          <div>
            <Link href="/product" className='bg-black text-white px-8 py-3 rounded cursor-pointer   transition-all duration-200'>Shop Now</Link>
            <Link href="/categoryes" className='border-2 border-black  text-black  px-10 py-3 rounded cursor-pointer  transition-all duration-200 ml-4'>Browse Categories</Link>
          </div>
        </div>
        <div className="w-screen border-t border-gray-300 flex px-40 py-20 h-[calc(100vh-80px)] gap-18 align-center ">
          <div>
            <div>
              <h3 className='text-2xl font-bold text-black   '>ShopMart</h3>
              <p className='text-black text-[16px] opacity-50 py-2 '>Your one-stop destination for the <br /> latest technology, fashion, and<br /> lifestyle products. Quality<br /> guaranteed with fast shipping and <br />excellent customer service.</p>
              <div className='flex gap-4 mt-5 text-center justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-700 mt-5 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='text-black text-[15px] opacity-50 text-left '>123 Shop Street, Octoper City,<br /> DC 12345</p>
              </div>
              <div className='flex gap-4 mt-5 items-center flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-700 mt-5 w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p className='text-black text-[15px] opacity-50 m-0 p-0 text-left'>(+20) 01093333333</p>
              </div>
              <div className='flex gap-4 mt-5 items-center flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-700 mt-5 w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p className='text-black text-[15px] opacity-50 m-0 p-0 text-left'>support@shopmart.com</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className='text-1xl font-bold text-black  text-left '>SHOP</h6>
              <div className='flex flex-col items-start py-4'>
              <Link href="/categories" className='text-black  text-[15px] opacity-50 text-center'>Electronics</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Fashion</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Home & Garden</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Sports</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Deals</Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className='text-1xl font-bold  text-black text-center '>CUSTOMER SERVICE</h6>
              <div className='flex flex-col items-start py-4'>
              <Link href="/categories" className='text-black  text-[15px] opacity-50 text-center'>Contact Us</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Help Center</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Track Your Order</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Returns & Exchanges</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Size Guide</Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className='text-1xl font-bold text-black text-left '>ABOUT</h6>
              <div className='flex flex-col items-start py-4'>
              <Link href="/categories" className='text-black  text-[15px] opacity-50 text-center'>About shopmart</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Careers</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Press</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Investor Relations</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Sustainability</Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className='text-1xl font-bold  text-black text-center '>POLICIES</h6>
              <div className='flex flex-col items-start py-4'>
              <Link href="/categories" className='text-black  text-[15px] opacity-50 text-center'>Privacy Policy</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Terms of Service</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Cookie Policy</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Shipping Policy</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen border-t border-gray-300 flex px-40 py-20 h-[calc(100vh-190px)] gap-18 align-center ">
          <div>
            <div>
              <h3 className='text-2xl font-bold text-black   '>ShopMart</h3>
              <p className='text-black text-[16px] opacity-50 py-2 '>Your one-stop destination for the <br /> latest technology, fashion, and<br /> lifestyle products. Quality<br /> guaranteed with fast shipping and <br />excellent customer service.</p>
              <div className='flex gap-4 mt-5 text-center justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-700 mt-5 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='text-black text-[15px] opacity-50 text-left '>123 Shop Street, Octoper City,<br /> DC 12345</p>
              </div>
              <div className='flex gap-4 mt-5 items-center flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-700 mt-5 w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p className='text-black text-[15px] opacity-50 m-0 p-0 text-left'>(+20) 01093333333</p>
              </div>
              <div className='flex gap-4 mt-5 items-center flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-700 mt-5 w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p className='text-black text-[15px] opacity-50 m-0 p-0 text-left'>support@shopmart.com</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className='text-1xl font-bold text-black  text-left '>SHOP</h6>
              <div className='flex flex-col items-start py-4'>
              <Link href="/categories" className='text-black  text-[15px] opacity-50 text-center'>Electronics</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Fashion</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Home & Garden</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Sports</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Deals</Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className='text-1xl font-bold  text-black text-center '>CUSTOMER SERVICE</h6>
              <div className='flex flex-col items-start py-4'>
              <Link href="/categories" className='text-black  text-[15px] opacity-50 text-center'>Contact Us</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Help Center</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Track Your Order</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Returns & Exchanges</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Size Guide</Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className='text-1xl font-bold text-black text-left '>ABOUT</h6>
              <div className='flex flex-col items-start py-4'>
              <Link href="/categories" className='text-black  text-[15px] opacity-50 text-center'>About shopmart</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Careers</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Press</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Investor Relations</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Sustainability</Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h6 className='text-1xl font-bold  text-black text-center '>POLICIES</h6>
              <div className='flex flex-col items-start py-4'>
              <Link href="/categories" className='text-black  text-[15px] opacity-50 text-center'>Privacy Policy</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Terms of Service</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Cookie Policy</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Shipping Policy</Link>
              <Link href="/categories" className='text-black py-2 text-[15px] opacity-50 text-center'>Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
