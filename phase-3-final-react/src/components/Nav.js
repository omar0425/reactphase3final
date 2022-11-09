import React from "react";
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <div>
<Link to ="/">
<button>Characters</button>

</Link>
<Link to ="/dojos">
<button>Dojos</button>
</Link>

      
</div>
  );
};

export default Nav;
