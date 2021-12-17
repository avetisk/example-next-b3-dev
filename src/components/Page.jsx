const Page = (props) => {
  const { children, hideHeader, ...otherProps } = props;

  return (
    <div {...otherProps} className="flex flex-col h-full">
      {hideHeader ? null : (
        <header className="header">
          <h1 className="text-4xl">Todo App</h1>
        </header>
      )}
      <main style={{ flexGrow: 1 }}>{children}</main>
      <footer>SUP 2021</footer>
    </div>
  );
};

export default Page;
