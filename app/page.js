import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillInstagram 
} from "react-icons/ai";
import Image from 'next/image';
import Loti from '../public/IMG.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";


export default function Home() {
  return (
  <div>
    <main className='px-10'>
      <section className="min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>LOTIIJAH</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='curso-pointer text-2xl'/>
            </li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8" href="#">
              Resume
            </a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>
            Nnia-Okolo Michael Lotanna
          </h2>
          <h3 className='text-2xl py-2'>Software Developer and Digital Marketer</h3>
          <p className='text-md py-5 leading-8'>
            Providing quality and reliable web/App services<br />
            and all sorts of digital marketing, making your<br />
            your products available to the world in a touch.<br />
            Join me down below and let's get started. 
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
        <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={Loti} layout='fill' objectFit='cover'/>
        </div>
      </section>
      
      <section>
        <div className='text-center'>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-600">
            As a tceh developer, I've done remote work for<br />
            <span className='text-teal-500'>agencies&nbsp;</span>
            consulted for <span className="text-teal-500">startup&nbsp;</span>
            and collaborated with <br />talented people to create digital services<br />
            for both business and consumer use 
          </p>
          <p className="text-md py-2 lading-8 text-gray-600 dark:text-ellipsis">
            I offer from a wide range of services, including web/app services and <br />
            brand digital marketing.
          </p>
        </div>

        <div className='lg:flex gap-10'>
          <div className="justify-items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={design} width={100} height={100} />
            <h3 classname="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className='py-2'>
              Creating amazing designs suited for all you projects.
            </p>
            <h4 className="py-4 text-teal-600">
              Design tools I use
            </h4>
            <p className="text-gray-600 py-1">Photoshop</p>
            <p className="text-gray-600 py-1">Illustrator</p>
            <p className="text-gray-600 py-1">Figma</p>
          </div>
          <div className="justify-items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={code} width={100} height={100} />
            <h3 classname="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className='py-2'>
              Creating amazing designs suited for all you projects.
            </p>
            <h4 className="py-4 text-teal-600">
              Design tools I use
            </h4>
            <p className="text-gray-600 py-1">Photoshop</p>
            <p className="text-gray-600 py-1">Illustrator</p>
            <p className="text-gray-600 py-1">Figma</p>
          </div>
          <div className="justify-items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={consulting} width={100} height={100} />
            <h3 classname="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className='py-2'>
              Creating amazing designs suited for all you projects.
            </p>
            <h4 className="py-4 text-teal-600">
              Design tools I use
            </h4>
            <p className="text-gray-600 py-1">Photoshop</p>
            <p className="text-gray-600 py-1">Illustrator</p>
            <p className="text-gray-600 py-1">Figma</p>
          </div>
        </div>
      </section>

      <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
           </div>
          </section>
    </main>
  </div>
  );
}
