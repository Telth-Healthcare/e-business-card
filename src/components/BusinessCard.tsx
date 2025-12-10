import { Phone, Mail, Globe, MapPin } from "lucide-react";
import TelthCorpLogo from "../assets/TELTH LOGO - CORPORATE.svg";
import TelthNetworkLogo from "../assets/TELTH LOGO - NETWORK.svg";

const BusinessCard = () => {
    return (
        <div className="relative w-full max-w-2xl mx-auto">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {/* Geometric shapes */}
                <div className="geometric-shape w-40 h-24 -bottom-8 -left-10 rotate-12 opacity-60" />
                <div className="geometric-shape w-56 h-32 -bottom-12 left-1/4 rotate-6 opacity-40" />
                <div className="geometric-shape w-48 h-28 -top-10 -right-8 -rotate-12 opacity-50" />
                <div className="geometric-shape w-36 h-20 top-1/3 -right-6 rotate-3 opacity-30" />
            </div>

            {/* Main card */}
            <div className="relative gradient-diagonal stripe-pattern rounded-2xl shadow-deep border border-gold/20 overflow-hidden">
                {/* Gold accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />

                {/* Content container */}
                <div className="relative z-10 p-8 md:p-12">
                    {/* Header section */}
                    <div
                        className="mb-8 animate-fade-in"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            {/* Logo placeholder */}
                            <img
                                src={TelthCorpLogo}
                                alt="Telth Logo"
                                className="size-24"
                            />
                        </div>
                    </div>

                    {/* Name and Title */}
                    <div
                        className="mb-10 animate-fade-in"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gold glow-gold mb-3">
                            Dr. Saravanan Br.
                        </h1>
                        <p className="text-gold-light/90 text-sm md:text-base tracking-wide uppercase font-light">
                            Chief Mentor & Senior Vice President{" "}
                            <span className="text-gold/70">(Network)</span>
                        </p>
                        {/* <p className="text-gold text-sm md:text-base tracking-wide uppercase font-light mt-2">
                            Telth Healthcare Inc.,
                        </p> */}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4 mb-10">
                        <ContactItem
                            icon={<Phone className="w-4 h-4" />}
                            text="+1 (234) 564-4564 | +91 79048 77505"
                            delay="0.3s"
                        />
                        <ContactItem
                            icon={<Mail className="w-4 h-4" />}
                            text={<a href="mailto:dr.babu@telth.org" className="hover:text-gold">dr.babu@telth.org</a>}
                            delay="0.4s"
                        />
                        <ContactItem
                            icon={<Globe className="w-4 h-4" />}
                            text={
                                <>
                                    <a href="https://mytelth.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">mytelth.com</a>,{" "}
                                    <a href="https://telth.ai" target="_blank" rel="noopener noreferrer" className="hover:text-gold">telth.ai</a>,{" "}
                                    <a href="https://telth.care" target="_blank" rel="noopener noreferrer" className="hover:text-gold">telth.care</a>
                                </>
                            }
                            delay="0.5s"
                        />
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-8" />

                    {/* Office Locations */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <LocationCard
                            city="UK"
                            address="Centurion House"
                            street="London Road, Staines TW18 4AX"
                            phone="+44 797 8277187"
                            delay="0.6s"
                        />
                        <LocationCard
                            city="INDIA"
                            address="The Chambers"
                            street="3rd Floor, Nehru Place, New Delhi 110019"
                            phone="+91 95145 55215"
                            delay="0.7s"
                        />
                        <LocationCard
                            city="USA"
                            address="909 Rose Ave, Suite 400"
                            street="Rockville, Maryland"
                            phone="+1 (301) 500-4607"
                            delay="0.8s"
                        />
                    </div>

                    {/* Website footer */}
                    <div
                        className="mt-10 text-center flex flex-col items-center animate-fade-in"
                        style={{ animationDelay: "0.9s" }}
                    >
                        <a
                            href="https://www.telth.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold font-medium text-lg hover:text-gold-light transition-colors duration-300"
                        >
                            www.telth.org
                        </a>
                        <img src={TelthNetworkLogo} alt="Telth Network" className="mt-7 size-12 self-end" />
                    </div>
                </div>

                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />
            </div>
        </div>
    );
};

interface ContactItemProps {
    icon: React.ReactNode;
    text: React.ReactNode;
    href?: string;
    delay: string;
}

const ContactItem = ({ icon, text, href, delay }: ContactItemProps) => {
    const content = (
        <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-lg border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-all duration-300">
                {icon}
            </div>
            <span className="text-gold-light/90 font-light transition-colors duration-300">
                {text}
            </span>
        </div>
    );

    return (
        <div
            className="animate-slide-in-left"
            style={{ animationDelay: delay }}
        >
            {href ? (
                <a href={href} className="block">
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    );
};

interface LocationCardProps {
    city: string;
    address: string;
    street: string;
    phone: string;
    delay: string;
}

const LocationCard = ({
    city,
    address,
    street,
    phone,
    delay,
}: LocationCardProps) => {
    return (
        <div
            className="animate-fade-in bg-purple-rich/50 border border-gold/20 rounded-xl p-5 hover:border-gold/40 transition-all duration-300 hover:shadow-gold backdrop-blur-sm"
            style={{ animationDelay: delay }}
        >
            <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-gold" />
                <h3 className="text-gold font-serif font-medium">{city}</h3>
            </div>
            <div className="space-y-1">
                <p className="text-gold-light/80 text-sm font-light">
                    {address}
                </p>
                <p className="text-gold-light/80 text-sm font-light">
                    {street}
                </p>
                <p className="text-gold text-sm font-medium mt-2">{phone}</p>
            </div>
        </div>
    );
};

export default BusinessCard;
