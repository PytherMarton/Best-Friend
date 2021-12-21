import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firstHandleFetch();
    setInfo(
      <p>
        Welcome!
        <br />
        <br />
        <br />
        <br />
        We are here to help you...
        <br />
        <br />
        ...find a new Best friend!
        <br />
        <br />
        <br />
        <br />
        Type a dog breed below and search.
        <br />
        <br />
        GET INSPIRED!
      </p>
    );
  }, []);

  useEffect(() => {
    if (input === "english bulldog" || input === "bulldog english") {
      setInput("bulldog/english");
    } else if (input === "shiba"){
      setInput("shiba");
    } else if (input === "affenpinscher"){
      setInput("affenpinscher");
    } else if (input === "african"){
      setInput("african");
    } else if (input === "airedale"){
      setInput("airedale");
    } else if (input === "akita"){
      setInput("akita");
    } else if (input === "appenzeller"){
      setInput("appenzeller");
    } else if (input === "shepherd australian" || input === "australian shepherd"){
      setInput("australian/shepherd");
    } else if (input === "basenji"){
      setInput("basenji");
    } else if (input === "beagle"){
      setInput("beagle");
    } else if (input === "bluetick"){
      setInput("bluetick");
    } else if (input === "borzoi"){
      setInput("borzoi");
    } else if (input === "bouvier"){
      setInput("bouvier");
    } else if (input === "boxer"){
      setInput("boxer");
    } else if (input === "brabancon"){
      setInput("brabancon");
    } else if (input === "briard"){
      setInput("briard");
    } else if (input === "norwegian buhund" || input === "buhund norwegian"){
      setInput("buhund/norwegian");
    } else if (input === "boston bulldog" || input === "bulldog boston"){
      setInput("bulldog/boston");
    } else if (input === "french bulldog" || input === "bulldog french"){
      setInput("bulldog/french");
    } else if (input === "staffordshire bullterrier" || input === "bullterrier staffordshire"){
      setInput("bullterrier/staffordshire");
    } else if (input === "australian cattledog" || input === "cattledog australian"){
      setInput("cattledog/australian");
    } else if (input === "chihuahua"){
      setInput("chihuahua");
    } else if (input === "chow"){
      setInput("chow");
    } else if (input === "clumber"){
      setInput("clumber");
    } else if (input === "cockapoo"){
      setInput("cockapoo");
    } else if (input === "border collie" || input === "collie border"){
      setInput("collie/border");
    } else if (input === "coonhound"){
      setInput("coonhound");
    } else if (input === "cardigan corgi" || input === "corgi cardigan"){
      setInput("corgi/cardigan");
    } else if (input === "cotondetulear"){
      setInput("cotondetulear");
    } else if (input === "dachshund"){
      setInput("dachshund");
    } else if (input === "dalmatian"){
      setInput("dalmatian");
    } else if (input === "great dane" || input === "dane great"){
      setInput("dane/great");
    } else if (input === "scottish deerhound" || input === "deerhound scottish"){
      setInput("deerhound/scottish");
    } else if (input === "dhole"){
      setInput("dhole");
    } else if (input === "dingo"){
      setInput("dingo");
    } else if (input === "doberman"){
      setInput("doberman");
    } else if (input === "norwegian elkhound" || input === " elkhound norwegian"){
      setInput("elkhound/norwegian");
    } else if (input === "entlebucher"){
      setInput("entlebucher");
    } else if (input === "eskimo"){
      setInput("eskimo");
    } else if (input === "lapphund finnish" || input === "finnish lapphund"){
      setInput("finnish/lapphund");
    } else if (input === "bichon frise" || input === "frise bichon"){
      setInput("frise/bichon");
    } else if (input === "germanshepherd"){
      setInput("germanshepherd");
    } else if (input === "italian greyhound" || input === "greyhound italian"){
      setInput("greyhound/italian");
    } else if (input === "groenendael"){
      setInput("groenendael");
    } else if (input === "havanese"){
      setInput("havanese");
    } else if (input === "afghan hound" || input === "hound afghan"){
      setInput("hound/afghan");
    } else if (input === "basset hound" || input === "hound basset"){
      setInput("hound/basset");
    } else if (input === "blood hound" || input === "hound blood"){
      setInput("hound/blood");
    } else if (input === "english hound" || input === "hound english"){
      setInput("hound/english");
    } else if (input === "ibizan hound" || input === "hound ibizan"){
      setInput("hound/ibizan");
    } else if (input === "plott hound" || input === "hound plott"){
      setInput("hound/plott");
    } else if (input === "walker hound" || input === "hound walker"){
      setInput("hound/walker");
    } else if (input === "husky"){
      setInput("husky");
    } else if (input === "keeshond"){
      setInput("keeshond");
    } else if (input === "kelpie"){
      setInput("kelpie");
    } else if (input === "komondor"){
      setInput("komondor");
    } else if (input === "kuvasz"){
      setInput("kuvasz");
    } else if (input === "labradoodle"){
      setInput("lLabradoodle");
    } else if (input === "labrador"){
      setInput("labrador");
    } else if (input === "leonberg"){
      setInput("leonberg");
    } else if (input === "lhasa"){
      setInput("lhasa");
    } else if (input === "malamute"){
      setInput("malamute");
    } else if (input === "malinois"){
      setInput("malinois");
    } else if (input === "maltese"){
      setInput("maltese");
    } else if (input === "bull mastiff" || input === "mastiff bull"){
      setInput("mastiff/bull");
    } else if (input === "english mastiff" || input === "mastiff english"){
      setInput("mastiff/english");
    } else if (input === "tibetan mastiff" || input === "mastiff tibetan"){
      setInput("mastiff/tibetan");
    } else if (input === "mexicanhairless"){
      setInput("mexicanhairless");
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    } else if (input === ""){
      setInput();
    }
  }, [input]);

  const shiba = () => {
    setInfo(
      <p>
        Name: Shiba inu <br />
        <br />
        Origin: Japan <br />
        <br />
        Height: 33 to 43cm '13 to 17 in'
        <br />
        <br />
        Weight: 8 to 10kg '18 to 22lb'
        <br />
        <br />
        Coat: double <br />
        <br />
        Litter size: 3 puppies on average <br />
        <br />
        Life span: 13-15 years
      </p>
    );
  };

  const englishBulldog = () => {
    setInfo(<p>English Bulldog info</p>);
  };

  const handleFetch = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${input}/images/random`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    setData(data.message);
    setInput(input);
  };

  const firstHandleFetch = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`, {
      method: "GET",
    });

    const data = await response.json();
    setData(data.message);
    setInput(input);
    setLoading(!loading);
  };

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFetch();
    }
    if (input === "bulldog/english"){
      englishBulldog();
    } else if (input === "shiba"){
      shiba();
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Get Inspired! Find your future best friend!</h1>
      <img id="demoObject" src={data} alt="img-of-dog" />
      <p className="info">{info}</p>
      <div className="position">
        <input
          className="field"
          onKeyDown={_handleKeyDown}
          placeholder="Type a dog breed"
          autoCapitalize="none"
          value={input}
          onInput={(e) => setInput(e.target.value.toLowerCase())}
        />
        <button id="foot">
          <button className="button-os" onClick={handleFetch}>
            Find your dog! :d
          </button>
        </button>
      </div>
    </div>
  );
};

export default App;
