import { cn } from "@/lib/utils";

interface WaveDividerProps {
  position: "top" | "bottom";
  className?: string;
  fill?: string;
}

export function WaveDivider({ 
  position, 
  className,
  fill = "fill-cream-100" 
}: WaveDividerProps) {
  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden leading-0 z-10",
        position === "top" ? "top-0" : "bottom-0",
        position === "top" ? "transform rotate-180" : "",
        className
      )}
    >
      <svg
        className="relative block w-full h-[70px] md:h-[120px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className={fill}
        ></path>
      </svg>
    </div>
  );
}