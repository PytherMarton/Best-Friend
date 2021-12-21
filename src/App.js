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
    } else if (input === "shiba") {
      setInput("shiba");
    } else if (input === "affenpinscher") {
      setInput("affenpinscher");
    } else if (input === "african") {
      setInput("african");
    } else if (input === "airedale") {
      setInput("airedale");
    } else if (input === "akita") {
      setInput("akita");
    } else if (input === "appenzeller") {
      setInput("appenzeller");
    } else if (
      input === "shepherd australian" ||
      input === "australian shepherd"
    ) {
      setInput("australian/shepherd");
    } else if (input === "basenji") {
      setInput("basenji");
    } else if (input === "beagle") {
      setInput("beagle");
    } else if (input === "bluetick") {
      setInput("bluetick");
    } else if (input === "borzoi") {
      setInput("borzoi");
    } else if (input === "bouvier") {
      setInput("bouvier");
    } else if (input === "boxer") {
      setInput("boxer");
    } else if (input === "brabancon") {
      setInput("brabancon");
    } else if (input === "briard") {
      setInput("briard");
    } else if (input === "norwegian buhund" || input === "buhund norwegian") {
      setInput("buhund/norwegian");
    } else if (input === "boston bulldog" || input === "bulldog boston") {
      setInput("bulldog/boston");
    } else if (input === "french bulldog" || input === "bulldog french") {
      setInput("bulldog/french");
    } else if (
      input === "staffordshire bullterrier" ||
      input === "bullterrier staffordshire"
    ) {
      setInput("bullterrier/staffordshire");
    } else if (
      input === "australian cattledog" ||
      input === "cattledog australian"
    ) {
      setInput("cattledog/australian");
    } else if (input === "chihuahua") {
      setInput("chihuahua");
    } else if (input === "chow") {
      setInput("chow");
    } else if (input === "clumber") {
      setInput("clumber");
    } else if (input === "cockapoo") {
      setInput("cockapoo");
    } else if (input === "border collie" || input === "collie border") {
      setInput("collie/border");
    } else if (input === "coonhound") {
      setInput("coonhound");
    } else if (input === "cardigan corgi" || input === "corgi cardigan") {
      setInput("corgi/cardigan");
    } else if (input === "cotondetulear") {
      setInput("cotondetulear");
    } else if (input === "dachshund") {
      setInput("dachshund");
    } else if (input === "dalmatian") {
      setInput("dalmatian");
    } else if (input === "great dane" || input === "dane great") {
      setInput("dane/great");
    } else if (
      input === "scottish deerhound" ||
      input === "deerhound scottish"
    ) {
      setInput("deerhound/scottish");
    } else if (input === "dhole") {
      setInput("dhole");
    } else if (input === "dingo") {
      setInput("dingo");
    } else if (input === "doberman") {
      setInput("doberman");
    } else if (
      input === "norwegian elkhound" ||
      input === " elkhound norwegian"
    ) {
      setInput("elkhound/norwegian");
    } else if (input === "entlebucher") {
      setInput("entlebucher");
    } else if (input === "eskimo") {
      setInput("eskimo");
    } else if (input === "lapphund finnish" || input === "finnish lapphund") {
      setInput("finnish/lapphund");
    } else if (input === "bichon frise" || input === "frise bichon") {
      setInput("frise/bichon");
    } else if (input === "germanshepherd") {
      setInput("germanshepherd");
    } else if (input === "italian greyhound" || input === "greyhound italian") {
      setInput("greyhound/italian");
    } else if (input === "groenendael") {
      setInput("groenendael");
    } else if (input === "havanese") {
      setInput("havanese");
    } else if (input === "afghan hound" || input === "hound afghan") {
      setInput("hound/afghan");
    } else if (input === "basset hound" || input === "hound basset") {
      setInput("hound/basset");
    } else if (input === "blood hound" || input === "hound blood") {
      setInput("hound/blood");
    } else if (input === "english hound" || input === "hound english") {
      setInput("hound/english");
    } else if (input === "ibizan hound" || input === "hound ibizan") {
      setInput("hound/ibizan");
    } else if (input === "plott hound" || input === "hound plott") {
      setInput("hound/plott");
    } else if (input === "walker hound" || input === "hound walker") {
      setInput("hound/walker");
    } else if (input === "husky") {
      setInput("husky");
    } else if (input === "keeshond") {
      setInput("keeshond");
    } else if (input === "kelpie") {
      setInput("kelpie");
    } else if (input === "komondor") {
      setInput("komondor");
    } else if (input === "kuvasz") {
      setInput("kuvasz");
    } else if (input === "labradoodle") {
      setInput("lLabradoodle");
    } else if (input === "labrador") {
      setInput("labrador");
    } else if (input === "leonberg") {
      setInput("leonberg");
    } else if (input === "lhasa") {
      setInput("lhasa");
    } else if (input === "malamute") {
      setInput("malamute");
    } else if (input === "malinois") {
      setInput("malinois");
    } else if (input === "maltese") {
      setInput("maltese");
    } else if (input === "bull mastiff" || input === "mastiff bull") {
      setInput("mastiff/bull");
    } else if (input === "english mastiff" || input === "mastiff english") {
      setInput("mastiff/english");
    } else if (input === "tibetan mastiff" || input === "mastiff tibetan") {
      setInput("mastiff/tibetan");
    } else if (input === "mexicanhairless") {
      setInput("mexicanhairless");
    } else if (input === "mix") {
      setInput("mix");
    } else if (input === "bernese mountain" || input === "mountain bernese") {
      setInput("mountain/bernese");
    } else if (input === "swiss mountain" || input === "mountain swiss") {
      setInput("mountain/swiss");
    } else if (input === "newfoundland") {
      setInput("newfoundland");
    } else if (input === "otterhound") {
      setInput("otterhound");
    } else if (
      input === "caucasian ovcharka" ||
      input === "ovcharka caucasian"
    ) {
      setInput("ovcharka/caucasian");
    } else if (input === "papillon") {
      setInput("papillon");
    } else if (input === "pekinese") {
      setInput("pekinese");
    } else if (input === "pembroke") {
      setInput("pembroke");
    } else if (
      input === "miniature pinscher" ||
      input === "pinscher miniature"
    ) {
      setInput("pinscher/miniature");
    } else if (input === "pitbull") {
      setInput("pitbull");
    } else if (input === "german pointer" || input === "pointer german") {
      setInput("pointer/german");
    } else if (
      input === "germanlonghair pointer" ||
      input === "pointer germanlonghair"
    ) {
      setInput("pointer/germanlonghair");
    } else if (input === "pomeranian") {
      setInput("pomeranian");
    } else if (input === "miniature poodle" || input === "poodle miniature") {
      setInput("poodle/miniature");
    } else if (input === "standard poodle" || input === "poodle standard") {
      setInput("poodle/standard");
    } else if (input === "toy poodle" || input === "poodle toy") {
      setInput("poodle/toy");
    } else if (input === "pug") {
      setInput("pug");
    } else if (input === "puggle") {
      setInput("puggle");
    } else if (input === "pyrenees") {
      setInput("pyrenees");
    } else if (input === "redbone") {
      setInput("redbone");
    } else if (
      input === "chesapeake retriever" ||
      input === "retriever chesapeake"
    ) {
      setInput("retriever/chesapeake");
    } else if (input === "curly retriever" || input === "retriever curly") {
      setInput("retriever/curly");
    } else if (
      input === "flatcoated retriever" ||
      input === "retriever flatcoated"
    ) {
      setInput("retriever/flatcoated");
    } else if (input === "golden retriever" || input === "retriever golden") {
      setInput("retriever/golden");
    } else if (
      input === "rhodesian ridgeback" ||
      input === "ridgeback rhodesian"
    ) {
      setInput("ridgeback/rhodesian");
    } else if (input === "rottweiler") {
      setInput("rottweiler");
    } else if (input === "saluki") {
      setInput("saluki");
    } else if (input === "samoyed") {
      setInput("samoyed");
    } else if (input === "schipperke") {
      setInput("schipperke");
    } else if (input === "giant schnauzer" || input === "schnauzer giant") {
      setInput("schnauzer/giant");
    } else if (
      input === "miniature schnauzer" ||
      input === "schnauzer miniature"
    ) {
      setInput("schnauzer/miniature");
    } else if (input === "english setter" || input === "setter english") {
      setInput("setter/english");
    } else if (input === "gordon setter" || input === "setter gordon") {
      setInput("setter/gordon");
    } else if (input === "irish setter" || input === "setter irish") {
      setInput("setter/irish");
    } else if (input === "english sheepdog" || input === "sheepdog english") {
      setInput("sheepdog/english");
    } else if (input === "shetland sheepdog" || input === "sheepdog shetland") {
      setInput("sheepdog/shetland");
    } else if (input === "shihtzu") {
      setInput("shihtzu");
    } else if (input === "blenheim spaniel" || input === "spaniel blenheim") {
      setInput("spaniel/blenheim");
    } else if (input === "brittany spaniel" || input === "spaniel brittany") {
      setInput("spaniel/brittany");
    } else if (input === "cocker spaniel" || input === "spaniel cocker") {
      setInput("spaniel/cocker");
    } else if (input === "irish spaniel" || input === "spaniel irish") {
      setInput("spaniel/irish");
    } else if (input === "japanese spaniel" || input === "spaniel japanese") {
      setInput("spaniel/japanese");
    } else if (input === "sussex spaniel" || input === "spaniel sussex") {
      setInput("spaniel/sussex");
    } else if (input === "welsh spaniel" || input === "spaniel welsh") {
      setInput("spaniel/welsh");
    } else if (input === "english springer" || input === "springer english") {
      setInput("springer/english");
    } else if (input === "stbernard") {
      setInput("stbernard");
    } else if (input === "american terrier" || input === "terrier american") {
      setInput("terrier/american");
    } else if (
      input === "australian terrier" ||
      input === "terrier australian"
    ) {
      setInput("terrier/australian");
    } else if (
      input === "bedlington terrier" ||
      input === "terrier bedlington"
    ) {
      setInput("terrier/bedlington");
    } else if (input === "border terrier" || input === "terrier border") {
      setInput("terrier/border");
    } else if (input === "cairn terrier" || input === "terrier cairn") {
      setInput("terrier/cairn");
    } else if (input === "dandie terrier" || input === "terrier dandie") {
      setInput("terrier/dandie");
    } else if (input === "fox terrier" || input === "terrier fox") {
      setInput("terrier/fox");
    } else if (input === "irish terrier" || input === "terrier irish") {
      setInput("terrier/irish");
    } else if (input === "kerryblue terrier" || input === "terrier kerryblue") {
      setInput("terrier/kerryblue");
    } else if (input === "lakeland terrier" || input === "terrier lakeland") {
      setInput("terrier/lakeland");
    } else if (input === "norfolk terrier" || input === "terrier norfolk") {
      setInput("terrier/norfolk");
    } else if (input === "norwich terrier" || input === "terrier norwich") {
      setInput("terrier/norwich");
    } else if (
      input === "patterdale terrier" ||
      input === "terrier patterdale"
    ) {
      setInput("terrier/patterdale");
    } else if (input === "russell terrier" || input === "terrier russell") {
      setInput("terrier/russell");
    } else if (input === "scottish terrier" || input === "terrier scottish") {
      setInput("terrier/scottish");
    } else if (input === "sealyham terrier" || input === "terrier sealyham") {
      setInput("terrier/sealyham");
    } else if (input === "silky terrier" || input === "terrier silky") {
      setInput("terrier/silky");
    } else if (input === "tibetan terrier" || input === "terrier tibetan") {
      setInput("terrier/tibetan");
    } else if (input === "toy terrier" || input === "terrier toy") {
      setInput("terrier/toy");
    } else if (input === "welsh terrier" || input === "terrier welsh") {
      setInput("terrier/welsh");
    } else if (
      input === "westhighland terrier" ||
      input === "terrier westhighland"
    ) {
      setInput("terrier/westhighland");
    } else if (input === "wheaten terrier" || input === "terrier wheaten") {
      setInput("terrier/wheaten");
    } else if (input === "yorkshire terrier" || input === "terrier yorkshire") {
      setInput("terrier/yorkshire");
    } else if (input === "tervuren") {
      setInput("tervuren");
    } else if (input === "vizsla") {
      setInput("vizsla");
    } else if (input === "spanish waterdog" || input === "waterdog spanish") {
      setInput("waterdog/spanish");
    } else if (input === "weimaraner") {
      setInput("weimaraner");
    } else if (input === "whippet") {
      setInput("whippet");
    } else if (input === "irish wolfhound" || input === "wolfhound irish") {
      setInput("wolfhound/irish");
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
    if (input === "bulldog/english") {
      englishBulldog();
    } else if (input === "shiba") {
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
