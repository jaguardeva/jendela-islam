interface propsType {
  children: React.ReactNode;
  background?: string;
}

export default function Container(props: propsType) {
  const { children, background = "bg-white" } = props;

  return (
    <section
      className={`flex w-full lg:py-10 items-center justify-center ${background}`}
    >
      <div className="w-full max-w-7xl px-4 lg:px-0">{children}</div>
    </section>
  );
}
