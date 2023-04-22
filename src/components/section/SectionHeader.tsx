type SectionHeaderProps = {
  header: string;
};

export const SectionHeader = ({ header }: SectionHeaderProps) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="items-start justify-between border-b py-4 md:flex">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{header}</h3>
        </div>
      </div>
    </div>
  );
};
