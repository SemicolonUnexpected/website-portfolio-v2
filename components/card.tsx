import { cn } from "@lib/utils";
import { IconSvgProps } from "@/types";

const Card: React.FC<{ className?: string, children?: React.ReactNode }> = ({ className, children }) => {
  return(
    <div className={cn("border-2 border-white rounded-md p-2", className)}>
    {children}
    </div>
  );
};

const ImageCard: React.FC<{ title: string, text: string, src: string }> = ({
  title,
  text,
  src,
}) => {
  return(
    <Card>

    </Card>
  );
};

const ImageCard: React.FC<{ title: string, text: string, icon: React.ComponentType<IconSvgProps> }> = ({
  title,
  text,
  icon,
}) => {
  return(
    <Card>

    </Card>
  );
};
