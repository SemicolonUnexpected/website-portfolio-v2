import { cn } from "@/lib/utils";
import Image from "next/image";
import { IconSvgProps } from "@/types";

export const Card: React.FC<{ className?: string, children?: React.ReactNode }> = ({ className, children }) => {
  return(
    <div className={cn("border-2 border-white rounded-md p-2", className)}>
      {children}
    </div>
  );
};

export const ImageCard: React.FC<{ title: string, text: string, src: string, alt?: string }> = ({
  title,
  text,
  src,
  alt = "",
}) => {
  return(
    <Card className="flex flex-col md:flex-row w-80 h-60 md:w-full">
      <Image src={src} alt="test image" className="w-full h-32 rounded-md" width="32" height={32} sizes="32"/>
      <h1 className="text-3xl md:text-4xl"></h1>
    </Card>
  );
};

export const IconCard: React.FC<{ title: string, text: string, icon: React.ComponentType<IconSvgProps> }> = ({
  title,
  text,
  icon,
}) => {
  return(
    <Card className="flex flex-col md:flex-row">
      <div>
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        {text}
      </div>

    </Card>
  );
};
