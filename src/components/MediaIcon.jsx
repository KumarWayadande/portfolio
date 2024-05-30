const MediaIcon = (prop) => {
  return (
    <div className="media-icon text-xl">
      <a href={prop.link}><i className={prop.class} style={{ color: "#a19e97" }}></i></a>
    </div>
  );
};


export default MediaIcon;