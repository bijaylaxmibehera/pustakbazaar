import "./Avatar.css"

const Avatar = ({ name }) => {
    const initials = name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  
    return <div className="avatar">{initials}</div>;
  };
  
  export default Avatar;