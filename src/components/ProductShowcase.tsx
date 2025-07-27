import Image from "next/image";
import { products } from "@constants/product";
import Link from "@node_modules/next/link";

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   originalPrice?: string;
//   discount: string;
//   image: string;
//   category: string;
// }

const ProductShowcase: React.FC = () => {
  return (
    <div className="min-h-[80%] bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        {/* <div className="text-center mb-8">
          <h1 className="text-orange-500 text-sm font-medium mb-4 tracking-wide uppercase">
            Hot deals for you
          </h1>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mb-8"></div>
        </div> */}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Text */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-2xl md:text-7xl lg:text-8xl font-medium leading-tight">
              <div className="text-black">
                <p>
                  We picked some{" "}
                  <span className="text-[#FFA500]">cool things</span> for you!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Product Grid */}
          <div className="lg:col-span-7">
            <div>
              <Link href="/category" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  >
                    {/* Product Image */}
                    <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        <div className="text-sm font-light text-gray-900">
                          {product.price}
                        </div>
                        <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                          {product.discount}
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {product.category}
                      </div>
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Echo Dot Advertisement */}
        {/* <div className="mt-16">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 w-full h-[80%] relative overflow-hidden"> */}
        {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}
        {/* <Image
                src="/images/Rectangle7.png"
                alt="alex-img"
                fill
                className="object-cover"
              /> */}
        {/* Left side - Echo Dot Visual */}
        {/* <div className="relative"> */}
        {/* <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-4 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                </div> */}
        {/* Colorful orb */}
        {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full animate-bounce delay-75"></div> */}
        {/* Table surface effect */}
        {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-30"></div> */}
        {/* </div> */}

        {/* Right side - Text Content */}
        {/* <div className="text-center md:text-left space-y-4">
                <div className="text-3xl md:text-4xl font-light text-gray-700 italic">
                  Alexa, switch on the lights.
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-800">
                  echo<span className="text-orange-500">dot</span>
                </div> */}
        {/* <button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Shop Now
                </button> */}
        {/* </div> */}
        {/* </div> */}

        {/* Decorative elements */}
        {/* <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-yellow-200 rounded-full opacity-20"></div> */}
        {/* </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductShowcase;
