/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling


export default function NavbarItemContainer({children, extraClasses=""}){
    let classes = "flex flex-row space-x-4 " + extraClasses;
    return <div className={classes}>
        {children}
    </div>
}