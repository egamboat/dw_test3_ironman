import DropDownMenu from "@/components/menu";
import Image from "next/image";
const IronMan = () => {

    return (
        <>
            <div className="grip grid-cols-3 gap-4">
                <div className="bg-blue items-center">
                    <div className="pl-4">
                        <DropDownMenu />
                    </div>
                    <div className="flex text-[2rem] justify-center text-redironman font-bold">
                        Todo sobre IronMan
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="font-semibold text-[1.5rem]"> ¿Quién es Iron Man?</h2>

                    <div className="flex mt-4">
                        <Image src="/image/ironBoy.jpg" alt="niño iron man disfraz" height={400}  width={300} />
                        <p className="text-[1.2rem]"> Genio multimillonario inventor, industrial y director ejecutivo de Industrias Stark Tony Stark fue herido de muerte en una zona de guerra en Afganistán poco antes de ser secuestrado por terroristas. Stark construyó un traje blindado para escapar del cautiverio, que a la vez sirvió como un dispositivo para mantener su corazón latiendo manteniéndolo con vida. Una vez que regresó a los Estados Unidos, Stark se reinventó a sí mismo como el superhéroe Iron Man con armadura.
                            En momentos en que Tony Stark estaba indispuesto, otros hombres han continuado con el legado de Iron Man. Dos veces lo hizo el mejor amigo de Tony Jim Rhodes, y el deber ha caído en manos del villano reformado Victor von Doom. Más recientemente, el papel ha sido usurpado por el hermano adoptivo de Tony, Arno Stark. </p>
                    </div>
                </div>

            </div>

        </>
    )
}


export default IronMan;