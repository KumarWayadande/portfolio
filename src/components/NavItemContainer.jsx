
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function NavItemContainer({children}) {
  return <ul className="px-5 py-3 z-50">
    {children}
  </ul>;
}
