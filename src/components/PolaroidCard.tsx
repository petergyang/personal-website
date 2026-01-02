import Image from "next/image";

interface PolaroidCardProps {
  imageSrc: string;
  category: string;
  title: string;
  year: number;
  rotation?: number;
  delay?: number;
  description?: string;
}

export default function PolaroidCard({
  imageSrc,
  category,
  title,
  year,
  rotation = 0,
  delay = 0,
  description = "",
}: PolaroidCardProps) {
  return (
    <div
      className="polaroid-card timeline-item"
      style={
        {
          "--rotation": `${rotation}deg`,
          "--delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      <div className="polaroid-frame">
        <div className="polaroid-image-wrapper">
          <Image
            src={imageSrc}
            alt={`${title} - ${category}`}
            fill
            className="object-cover"
            sizes="280px"
          />
          {description && (
            <div className="polaroid-description">
              <p>{description}</p>
            </div>
          )}
        </div>
        <div className="polaroid-caption">
          <span className="polaroid-category">{category}</span>
          <span className="polaroid-title">{title}</span>
          <span className="polaroid-year">{year}</span>
        </div>
      </div>
    </div>
  );
}
