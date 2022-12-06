import { useParams } from "react-router-dom";

export default function MoonsPage({bodies}) {

const moonName = useParams()

  return (
    <div>
{bodies.filter(moon => moon.englishName === moonName.moonName).map((moon, index) => (
  <div key={index}>
<h1>{moon.englishName}</h1>
  </div>
))}
    </div>
  );

}