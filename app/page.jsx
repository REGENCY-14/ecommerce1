import { Button } from "@/components/ui/button"
import Image from "next/image";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Input } from "@/components/ui/input"
// import one from "./one.jpg"


export default function Home() {
  return (
    <main>
      <div className="firstsection mb-7 md:flex">
        <div className="w-full mt-7">
          <h2 className="text-4xl pb-4 text-nave font-semibold md:text-6xl md:mb-10">Find your dream sneakers</h2>
          <p className="pb-4 md:text-lg md:mb-10">Find your shoes from our various collections. Here shoes are endless and profit is also endless</p>
          <Button variant="outline" className="bg-peach">Explore</Button>
        </div>
        <div className="w-full mt-9">
          <div className="bg-peach w-1/5 text-white p-2 rounded-md">Nike Air Max</div>
          <Image src='/onee.png' alt="Shoe" width={500} height={300} className="firstimage" />
          <div className="bg-peach w-20 text-white p-2 ml-auto rounded-md">50% Discount</div>
        </div>
      </div> 
      <div className="minifirstpart flex mb-10 w-screen space-around">
        <div className="bg-peach w-10 h-10 text-white p-2 mr-4 rounded-md md:w-14 md:h-14 md:mr-0">
          <RiSecurePaymentFill size={25} className="md:w-10 md:h-10"/>
        </div>
        <p className=" mgrid text-base font-semibold md:text-2xl md:mr-60 md:ml-14">Secure Payment</p>
        <div className="bg-peach w-10 h-10 text-white p-2 mr-4 rounded-md md:w-14 md:h-14 md:mr-0">
        <Ri24HoursLine size={25} className="md:w-10 md:h-10"/>
        </div>
        <p className="mgrid  text-base font-semibold md:text-2xl md:mr-60 md:ml-14">24/7 Support</p>
        <div className="bg-peach w-10 h-10 text-white p-2 mr-4 rounded-md md:w-14 md:h-14 md:mr-0">
        <TbTruckDelivery size={25} className="md:w-10 md:h-10"/>
        </div>
        <p className="mgrid  text-base font-semibold md:text-2xl md:mr-60 md:ml-14">Fast Delivery</p>
      </div>
      <div className="secondpart md:mt-20 md:mb-10">
        <h2 className="text-4xl text-center text-nave font-medium">Our Collection</h2>
      </div>
      <div className="thirdsection mt-10 md:flex">
        <div classname="w-full">
          <Image src='/onee.png' alt="Shoe" width={700} height={300} className="firstimage" />
        </div>
        <div>
          <h2 className="text-6xl pb-4 text-nave font-semibold">Dedicated to quality and result</h2>
          <p>Providing the best shoe of various types and manufacturing them for true travel lovers. These items are lightweight and comfortable</p>
          <Button variant="outline" className="bg-peach mt-5">Read more</Button>
        </div>
      </div>
     <div className="thirdsection mb-5 mt-5">
        <h2 className="text-4xl text-center text-nave font-medium">Top selling Product</h2>
      </div> 
     <div className="forthsection place-content-center">
        <h6 className="forthsection uppercase text-sm text-nave font-normal text-center mb-5">Testimonials</h6>
        <h2 className="text-3xl text-center text-nave font-semibold">What Our Customers Say</h2>
      </div> 
      <div className="fifthsection bg-peach mt-8">
        <h4 className="font-semibold text-2xl text-white text-center h-80 pt-12">Subscribe to our newsletter</h4>
        {/* <Input/> */}
      </div>

    </main>
  );
}
