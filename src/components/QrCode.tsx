import VCard from "../assets/Contact QR Code(1).svg";

export default function () {
    return (
        <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
            <p>(or)</p>
            <p className="my-6 text-gold/90 md:text-xl text-center">Scan me to save the contact to your phone</p>
            <img src={VCard} alt="QR Code" className="size-80" />
        </div>
    )
}
