import "./SectionWrapper.css";

interface MainContentProps {
  children: React.ReactNode;
  id?: string;
  sectionClass: string;
  tag?: React.ElementType;
}

const SectionWrapper: React.FC<MainContentProps> = ({
  children,
  sectionClass,
  id,
  tag: Tag = "section",
}) => {
  return (
    <Tag id={id} className={sectionClass}>
      <div className="wrapper">{children}</div>
    </Tag>
  );
};

export default SectionWrapper;
