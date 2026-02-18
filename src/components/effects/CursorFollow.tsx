import { useMousePosition } from "@/hooks/useAnimations";
import { useIsMobile } from "@/hooks/use-mobile";

const CursorFollow = () => {
  const { x, y } = useMousePosition();
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <>
      <div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: x - 4,
          top: y - 4,
          backgroundColor: "hsl(195, 100%, 50%)",
          transition: "transform 0.05s",
        }}
      />
      <div
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: x - 20,
          top: y - 20,
          border: "1.5px solid hsl(155, 100%, 50%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </>
  );
};

export default CursorFollow;
