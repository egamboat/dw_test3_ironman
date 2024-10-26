"use client";
import { useState } from "react";
import Link from "next/link";

const DropDownMenu = () => {
    const [abrir, setAbrir] = useState<boolean>(false)

    const abridor = () => {
        setAbrir(!abrir)
    }

    return (
        <>
            <div className="relative inline-block text-left text-black">
                <button
                    onClick={abridor}
                    className="items-center text-white font-bold rounded-md inline-flex justify-center h-full w-full"
                >
                    Páginas
                </button>

                {abrir && (
                    <div className="absolute rigth-0 z-10 w-48 mt-2 bg-gray rounded-md text-white">
                        <div className="p-2">
                            <Link href="/" className="block font-bold text-blue py-2">
                                Inicio
                            </Link>
                            <Link href="/ironman/" className="block font-bold py-2">
                                ¿Quién es Ironman?
                            </Link>
                            <Link href="/avengers/" className="block font-bold py-2">
                                Inciativa Avengers
                            </Link>
                            <Link href="/infinity_wars/" className="block font-bold py-2">
                                Guerra del Infinito
                            </Link>
                            <Link href="/tony_stark/" className="block font-bold py-2">
                                ¿Es Tony Stark?
                            </Link>
                            <Link href="/comics/" className="block font-bold py-2">
                                Comics
                            </Link>
                        </div>
                    </div>
                )}


            </div>
        </>

    )

}


export default DropDownMenu;