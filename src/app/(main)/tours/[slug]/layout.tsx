export interface LayoutProps {
  children: React.ReactNode;
  img: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, img }) => {
  return (
    <div>
      {img}
      {children}
    </div>
  );
};

export default Layout;
