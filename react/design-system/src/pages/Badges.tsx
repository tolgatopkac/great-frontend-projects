import { Link } from "react-router-dom";
import Badge from "../components/badge/Badge";

function Badges() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-dvh">
      <div className="flex gap-6 items-center">
        <Badge size="sm" color="neutral">
          Label
        </Badge>
        <Badge size="md" color="neutral">
          Label
        </Badge>
        <Badge size="lg" color="neutral">
          Label
        </Badge>
      </div>

      <div className="flex gap-6 items-center ">
        <Badge size="sm" color="error">
          Label
        </Badge>
        <Badge size="md" color="error">
          Label
        </Badge>
        <Badge size="lg" color="error">
          Label
        </Badge>
      </div>

      <div className="flex gap-6 items-center">
        <Badge size="sm" color="warning">
          Label
        </Badge>
        <Badge size="md" color="warning">
          Label
        </Badge>
        <Badge size="lg" color="warning">
          Label
        </Badge>
      </div>

      <div className="flex gap-6 items-center">
        <Badge size="sm" color="success">
          Label
        </Badge>
        <Badge size="md" color="success">
          Label
        </Badge>
        <Badge size="lg" color="success">
          Label
        </Badge>
      </div>

      <div className="flex gap-6 items-center">
        <Badge size="sm" color="brand">
          Label
        </Badge>
        <Badge size="md" color="brand">
          Label
        </Badge>
        <Badge size="lg" color="brand">
          Label
        </Badge>
      </div>

      <Link to="/">Home</Link>
    </div>
  );
}

export default Badges;
