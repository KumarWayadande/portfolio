
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function NavItemContainer(prop) {
  return <ul className="px-5 py-3">
    {prop.children}
  </ul>;
}
