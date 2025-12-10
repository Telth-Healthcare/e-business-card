import BusinessCard from "@/components/BusinessCard";
import QrCode from "@/components/QrCode";

const Index = () => {
  return (
    <div className="min-h-screen gradient-diagonal stripe-pattern flex items-center justify-center p-4 md:p-8">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      {/* Main content */}
      <main className="relative z-10 w-full md:flex items-stretch">
        <BusinessCard />
        <div className="hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block" />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent my-8 md:hidden" />
        <QrCode />
      </main>

    </div>
  );
};

export default Index;
