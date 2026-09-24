type PreloaderProps = {
    isLeaving: boolean;
    compact?: boolean;
  };
  
  export default function Preloader({
    isLeaving,
    compact = false,
  }: PreloaderProps) {
    return (
      <div
        role="status"
        aria-label="Loading Sliver Designs"
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1218] transition-all ${
          compact ? "duration-300" : "duration-500"
        } ${
          isLeaving
            ? "pointer-events-none scale-[1.02] opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        <div className="flex flex-col items-center px-6 text-center">
          {/* Logo mark */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-[#F45604]/25 blur-2xl" />
  
            <div
              className={`relative flex items-center justify-center rounded-2xl bg-[#F45604] shadow-2xl ${
                compact ? "h-16 w-16" : "h-20 w-20"
              }`}
            >
              <span
                className={`font-black text-white ${
                  compact ? "text-2xl" : "text-3xl"
                }`}
              >
                S
              </span>
            </div>
          </div>
  
          {/* Brand name */}
          <div className="mt-6">
            <h1
              className={`font-bold uppercase tracking-tight text-white ${
                compact ? "text-xl" : "text-2xl"
              }`}
            >
              SLIVER MOLDING DESIGNS 
            </h1>
  
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.28em] text-[#999FA5]">
            FINISHING MASTER LTD
            </p>
          </div>
  
          {!compact && (
            <p className="mt-4 max-w-sm text-sm text-[#999FA5]">
              Mouldings, renovations & 3D design
            </p>
          )}
  
          {/* Loading indicator */}
          <div
            className="mt-7 flex items-center gap-2"
            aria-hidden="true"
          >
            <span className="preloader-dot h-2 w-2 rounded-full bg-[#F45604]" />
            <span className="preloader-dot h-2 w-2 rounded-full bg-[#F45604]" />
            <span className="preloader-dot h-2 w-2 rounded-full bg-[#F45604]" />
          </div>
  
          <span className="sr-only">Loading page</span>
        </div>
      </div>
    );
  }