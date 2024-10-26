"use client";
import Image from "next/image";
import DropDownMenu from "@/components/menu";

const Home = () => {

  const handlePage = () => {
    window.location.href = 'https://sites.google.com/unemi.edu.ec/hidro-web/trabajo'
  }

  const handleInicio = () => {
    window.location.href = '/ironman/'
  }



  return (
    <>
      <div className="bg-blue">
        <DropDownMenu />
      </div>
      <div className="flex items-center justify-center h-[720px]">
        <figure className="flex flex-col items-center">
          <Image
            src="/image/iroman.jpg"
            alt="superheroe Iroman"
            width={300}
            height={300}
          />
          <figcaption
            className="text-[1rem] font-bold mt-2 underline cursor-pointer"
            onClick={handlePage}
          >
            <p>Esta pagina web fue hecha por mi</p>
          </figcaption>
          <figcaption
            onClick={handleInicio}
            className="cursor-pointer"
          >
            Ir a la Primera Pagina
          </figcaption>
        </figure>

      </div>
    </>

  );
}

export default Home;