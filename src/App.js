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
    } else if (input === "shiba" || input === "shiba inu") {
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
      input === "elkhound norwegian"
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
      setInput("labradoodle");
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
        Name: Shiba Inu <br />
        <br />
        Origin: Japan <br />
        <br />
        Height: 33-43 cm '13-17 in'
        <br />
        <br />
        Weight: 8-10 kg '18-22 lb'
        <br />
        <br />
        Coat: Double <br />
        <br />
        Litter size: 3 puppies on average <br />
        <br />
        Life span: 13-15 years
      </p>
    );
  };

  const englishBulldog = () => {
    setInfo(
      <p>
        Name: English Bulldog <br />
        <br />
        Origin: England <br />
        <br />
        Height: 30-61 cm '1-2 ft'
        <br />
        <br />
        Weight: 18–25 kg '40–55 lb'
        <br />
        <br />
        Litter size: 3-7-12 puppies on average <br />
        <br />
        Life span: 3-12 years
      </p>
    );
  };

  const affenpinscher = () => {
    setInfo(
      <p>
        Name: Affenpinscher <br />
        <br />
        Origin: Germany <br />
        <br />
        Height: 23–30 cm '9–12 in'
        <br />
        <br />
        Weight: 3–6 kg '7–13 lb'
        <br />
        <br />
        Coat: Wire <br />
        <br />
        Litter size: 2-3 puppies on average<br />
        <br />
        Life span: 11-14 years
      </p>
    );
  };

  const african = () => {
    setInfo(
      <p>
        Name: African <br />
        <br />
        Origin: Southern Africa <br />
        <br />
        Height: 50–62 cm '20–24 in'
        <br />
        Coat: Short and compact <br />
        <br />
        Litter size: 4-12 puppies on average <br />
      </p>
    );
  };

  const airedale = () => {
    setInfo(
      <p>
        Name: Airedale <br />
        <br />
        Origin: England <br />
        <br />
        Height: 56–61 cm '22–24 inches'
        <br />
        <br />
        Weight: 16–23 kg '35–50 pounds'
        <br />
        <br />
        Coat: Broken<br />
        <br />
        Litter size: 9 puppies on average <br />
        <br />
        Life span: 10-12 years
      </p>
    );
  };

  const akita = () => {
    setInfo(
      <p>
        Name: Akita <br />
        <br />
        Origin: Japan <br />
        <br />
        Height: 64–69 cm '25–27 in'
        <br />
        <br />
        Weight: 25–36 kg '55–80 lb'
        <br />
        <br />
        Coat: Double <br />
        <br />
        Litter size: 3-12 puppies on average <br />
        <br />
        Life span: 10 years
      </p>
    );
  };

  const appenzeller = () => {
    setInfo(
      <p>
        Name: Appenzeller <br />
        <br />
        Origin: Switzerland <br />
        <br />
        Height: 52–56 cm '20–22 in'
        <br />
        <br />
        Weight: 22-32 kg '48-55 lb'
        <br />
        <br />
        Coat:  Thick and shiny <br />
        <br />
        Litter size: 4-6 puppies on average <br />
        <br />
        Life span: 12-14 years
      </p>
    );
  };

  const shepherdAustralian = () => {
    setInfo(
      <p>
        Name: Australian Shepherd <br />
        <br />
        Origin: United States <br />
        <br />
        Height: 46–58 cm '18–23 in'
        <br />
        <br />
        Weight: 16–32 kg '35–70 lb'
        <br />
        <br />
        Coat: Moderately long double coat <br />
        <br />
        Litter size: 6-7 puppies on average <br />
        <br />
        Life span: 11-13 years
      </p>
    );
  };

  const basenji = () => {
    setInfo(
      <p>
        Name: Basenji <br />
        <br />
        Origin: Democratic Republic of the Congo <br />
        <br />
        Height: 40-43 cm '15-17 in'
        <br />
        <br />
        Weight:	9.5-11 kg '21-24 lb'
        <br />
        <br />
        Coat:	Short and fine <br />
        <br />
        Litter size: 4-6 puppies on average <br />
        <br />
        Life span: 14-16 years
      </p>
    );
  };

  const beagle = () => {
    setInfo(
      <p>
        Name: Beagle <br />
        <br />
        Origin: England<br />
        <br />
        Height: 33-41 cm '13-16 in'
        <br />
        <br />
        Weight: 9.1-11.3 kg '20-25 lb'
        <br />
        <br />
        Coat: Short haired, hard coat of medium length <br />
        <br />
        Litter size: 3 puppies on average <br />
        <br />
        Life span: 1-10 years
      </p>
    );
  };

  const bluetick = () => {
    setInfo(
      <p>
        Name: Bluetick <br />
        <br />
        Origin: United States <br />
        <br />
        Height: 53-69 cm '21-27 in'
        <br />
        <br />
        Weight: 20-36 kg '45-80 lb'
        <br />
        <br />
        Coat: Short and smooth <br />
        <br />
        Litter size: 7 puppies on average <br />
        <br />
        Life span: 11-12 years
      </p>
    );
  };

  const borzoi = () => {
    setInfo(
      <p>
        Name: Borzoi <br />
        <br />
        Origin: Russia <br />
        <br />
        Height: 68-85 cm '27 to 33 in'
        <br />
        <br />
        Weight: 25t-50 kg '55-105 lb'
        <br />
        <br />
        Coat: Medium length, silky and wavy, short length <br />
        <br />
        Litter size: 1-11 puppies on average <br />
        <br />
        Life span: 11-15 years
      </p>
    );
  };

  const bouvier = () => {
    setInfo(
      <p>
        Name: Bouvier <br />
        <br />
        Origin: Belgium; France <br />
        <br />
        Height: 59-68 cm '23-27 in'
        <br />
        <br />
        Weight: 27-40 kg '60-88 lb'
        <br />
        <br />
        Coat: Double <br />
        <br />
        Litter size: 5-10 puppies on average <br />
        <br />
        Life span: 10-12 years
      </p>
    );
  };

  const boxer = () => {
    setInfo(
      <p>
        Name: Boxer <br />
        <br />
        Origin: Germany <br />
        <br />
        Height: 53-64 cm '21-25 in'
        <br />
        <br />
        Weight: 25-34 kg '55-75 lb'
        <br />
        <br />
        Coat: Short, shiny, smooth, close-lying <br />
        <br />
        Litter size: 6-8 puppies on average <br />
        <br />
        Life span: 9-15 years
      </p>
    );
  };

  const brabancon = () => {
    setInfo(
      <p>
        Name: Brabancon <br />
        <br />
        Origin: Belgium <br />
        <br />
        Height: 230-280 mm '9-11 in'
        <br />
        <br />
        Weight: 4-5 kg '8-10 lb'
        <br />
        <br />
        Coat: Wiry/rough and smooth coat. <br />
        <br />
        Litter size: 1-10 puppies on average <br />
        <br />
        Life span: 10-15 years
      </p>
    );
  };

  const briard = () => {
    setInfo(
      <p>
        Name: Briard
        <br />
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

  const norwegianBuhund = () => {
    setInfo(
      <p>
        Name: Norwegian Buhund <br />
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

  const bostonBulldog = () => {
    setInfo(
      <p>
        Name: Boston Bulldog <br />
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

  const frenchBulldog = () => {
    setInfo(
      <p>
        Name: French Bulldog <br />
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

  const staffordshireBullterrier = () => {
    setInfo(
      <p>
        Name: Staffordshire Bullterrier <br />
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

  const australianCattledog = () => {
    setInfo(
      <p>
        Name: Australian Cattledog <br />
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

  const chihuahua = () => {
    setInfo(
      <p>
        Name: Chihuahua <br />
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

  const chow = () => {
    setInfo(
      <p>
        Name: Chow <br />
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

  const clumber = () => {
    setInfo(
      <p>
        Name: Clumber <br />
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

  const cockapoo = () => {
    setInfo(
      <p>
        Name: Cockapoo <br />
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

  const borderCollie = () => {
    setInfo(
      <p>
        Name: Border Collie <br />
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

  const coonhound = () => {
    setInfo(
      <p>
        Name: Coonhound <br />
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

  const cardiganCorgi = () => {
    setInfo(
      <p>
        Name: Ardigan Corgi <br />
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

  const cotondetulear = () => {
    setInfo(
      <p>
        Name: Cotondetulear <br />
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

  const dachshund = () => {
    setInfo(
      <p>
        Name: Dachshund <br />
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

  const dalmatian = () => {
    setInfo(
      <p>
        Name: Dalmatian <br />
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

  const greatDane = () => {
    setInfo(
      <p>
        Name: Great Dane <br />
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

  const scottishDeerhound = () => {
    setInfo(
      <p>
        Name: Scottish Deerhound
        <br />
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

  const dhole = () => {
    setInfo(
      <p>
        Name: Dhole <br />
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

  const dingo = () => {
    setInfo(
      <p>
        Name: Dingo <br />
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

  const doberman = () => {
    setInfo(
      <p>
        Name: Doberman <br />
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

  const norwegianElkhound = () => {
    setInfo(
      <p>
        Name: Norwegian Elkhound <br />
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

  const entlebucher = () => {
    setInfo(
      <p>
        Name: Entlebucher <br />
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

  const eskimo = () => {
    setInfo(
      <p>
        Name: Eskimo <br />
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

  const lapphundFinnish = () => {
    setInfo(
      <p>
        Name: Lapphund Finnish <br />
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

  const bichonFrise = () => {
    setInfo(
      <p>
        Name: Bichon Frise <br />
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

  const germanShepherd = () => {
    setInfo(
      <p>
        Name: German Shepherd <br />
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

  const italianGreyhound = () => {
    setInfo(
      <p>
        Name: Italian Greyhound <br />
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

  const groenendael = () => {
    setInfo(
      <p>
        Name: Groenendael <br />
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

  const havanese = () => {
    setInfo(
      <p>
        Name: Havanese <br />
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

  const afghanHound = () => {
    setInfo(
      <p>
        Name: Afghan Hound <br />
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

  const bassetHound = () => {
    setInfo(
      <p>
        Name: Basset Hound <br />
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

  const bloodHound = () => {
    setInfo(
      <p>
        Name: Blood Hound <br />
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

  const englishHound = () => {
    setInfo(
      <p>
        Name: English Hound <br />
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

  const ibizanHound = () => {
    setInfo(
      <p>
        Name: Ibizan Hound <br />
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

  const plottHound = () => {
    setInfo(
      <p>
        Name: Plott Hound <br />
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

  const walkerHound = () => {
    setInfo(
      <p>
        Name: Walker Hound <br />
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

  const husky = () => {
    setInfo(
      <p>
        Name: Husky <br />
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

  const keeshond = () => {
    setInfo(
      <p>
        Name: Keeshond <br />
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

  const kelpie = () => {
    setInfo(
      <p>
        Name: Kelpie <br />
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

  const komondor = () => {
    setInfo(
      <p>
        Name: Komondor <br />
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

  const kuvasz = () => {
    setInfo(
      <p>
        Name: Kuvasz <br />
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

  const labradoodle = () => {
    setInfo(
      <p>
        Name: Labradoodle <br />
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

  const labrador = () => {
    setInfo(
      <p>
        Name: Labrador
        <br />
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

  const leonberg = () => {
    setInfo(
      <p>
        Name: Leonberg <br />
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

  const lhasa = () => {
    setInfo(
      <p>
        Name: Lhasa <br />
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

  const malamute = () => {
    setInfo(
      <p>
        Name: Malamute
        <br />
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

  const malinois = () => {
    setInfo(
      <p>
        Name: Malinois <br />
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

  const maltese = () => {
    setInfo(
      <p>
        Name: Maltese <br />
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

  const bullMastiff = () => {
    setInfo(
      <p>
        Name: Bull Mastiff <br />
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

  const englishMastiff = () => {
    setInfo(
      <p>
        Name: English Mastiff <br />
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

  const tibetanMastiff = () => {
    setInfo(
      <p>
        Name: Tibetan Mastiff <br />
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

  const mexicanhairless = () => {
    setInfo(
      <p>
        Name: Mexicanhairless <br />
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

  const mix = () => {
    setInfo(
      <p>
        Name: Mix <br />
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

  const berneseMountain = () => {
    setInfo(
      <p>
        Name: Bernese Mountain <br />
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

  const swissMountain = () => {
    setInfo(
      <p>
        Name: Swiss Mountain <br />
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

  const newfoundland = () => {
    setInfo(
      <p>
        Name: Newfoundland <br />
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

  const otterhound = () => {
    setInfo(
      <p>
        Name: Otterhound <br />
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

  const caucasianOvcharka = () => {
    setInfo(
      <p>
        Name: Caucasian Ovcharka <br />
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

  const papillon = () => {
    setInfo(
      <p>
        Name: Papillon <br />
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

  const pekinese = () => {
    setInfo(
      <p>
        Name: Pekinese
        <br />
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

  const pembroke = () => {
    setInfo(
      <p>
        Name: Pembroke <br />
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

  const miniaturePinscher = () => {
    setInfo(
      <p>
        Name: Miniature Pinscher <br />
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

  const pitbull = () => {
    setInfo(
      <p>
        Name: Pitbull <br />
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

  const germanPointer = () => {
    setInfo(
      <p>
        Name: German Pointer <br />
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

  const germanlonghairPointer = () => {
    setInfo(
      <p>
        Name: Germanlonghair Pointer <br />
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

  const pomeranian = () => {
    setInfo(
      <p>
        Name: Pomeranian <br />
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

  const miniaturePoodle = () => {
    setInfo(
      <p>
        Name: Miniature Poodle <br />
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

  const standardPoodle = () => {
    setInfo(
      <p>
        Name: Standard Poodle <br />
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

  const toyPoodle = () => {
    setInfo(
      <p>
        Name: Toy Poodle <br />
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

  const pug = () => {
    setInfo(
      <p>
        Name: Pug <br />
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

  const puggle = () => {
    setInfo(
      <p>
        Name: Puggle <br />
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

  const pyrenees = () => {
    setInfo(
      <p>
        Name: Pyrenees <br />
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

  const redbone = () => {
    setInfo(
      <p>
        Name: Redbone
        <br />
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

  const chesapeakeRetriever = () => {
    setInfo(
      <p>
        Name: Chesapeake Retriever <br />
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

  const curlyRetriever = () => {
    setInfo(
      <p>
        Name: Curly Retriever <br />
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

  const flatcoatedRetriever = () => {
    setInfo(
      <p>
        Name: Flatcoated Retriever <br />
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

  const goldenRetriever = () => {
    setInfo(
      <p>
        Name: Golden Retriever <br />
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

  const rhodesianRidgeback = () => {
    setInfo(
      <p>
        Name: Rhodesian Ridgeback <br />
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

  const rottweiler = () => {
    setInfo(
      <p>
        Name: Rottweiler <br />
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

  const saluki = () => {
    setInfo(
      <p>
        Name: Saluki <br />
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

  const samoyed = () => {
    setInfo(
      <p>
        Name: Samoyed <br />
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

  const schipperke = () => {
    setInfo(
      <p>
        Name: Schipperke <br />
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

  const giantSchnauzer = () => {
    setInfo(
      <p>
        Name: Giant Schnauzer <br />
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

  const miniatureSchnauzer = () => {
    setInfo(
      <p>
        Name: Miniature Schnauzer <br />
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

  const englishSetter = () => {
    setInfo(
      <p>
        Name: English Setter <br />
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

  const gordonSetter = () => {
    setInfo(
      <p>
        Name: Gordon Setter <br />
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

  const irishSetter = () => {
    setInfo(
      <p>
        Name: Irish Setter <br />
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

  const englishSheepdog = () => {
    setInfo(
      <p>
        Name: English Sheepdog <br />
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

  const shetlandSheepdog = () => {
    setInfo(
      <p>
        Name: Shetland Sheepdog <br />
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

  const shihtzu = () => {
    setInfo(
      <p>
        Name: Shihtzu
        <br />
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

  const blenheimSpaniel = () => {
    setInfo(
      <p>
        Name: Blenheim Spaniel <br />
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

  const brittanySpaniel = () => {
    setInfo(
      <p>
        Name: Brittany Spaniel <br />
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

  const cockerSpaniel = () => {
    setInfo(
      <p>
        Name: Cocker Spaniel <br />
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

  const irishSpaniel = () => {
    setInfo(
      <p>
        Name: Irish Spaniel
        <br />
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

  const japaneseSpaniel = () => {
    setInfo(
      <p>
        Name: Japanese Spaniel <br />
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

  const sussexSpaniel = () => {
    setInfo(
      <p>
        Name: Sussex Spaniel <br />
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

  const welshSpaniel = () => {
    setInfo(
      <p>
        Name: Welsh Spaniel <br />
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

  const englishSpringer = () => {
    setInfo(
      <p>
        Name: English Springer <br />
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

  const stbernard = () => {
    setInfo(
      <p>
        Name: Stbernard <br />
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

  const americanTerrier = () => {
    setInfo(
      <p>
        Name: American Terrier <br />
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

  const australianTerrier = () => {
    setInfo(
      <p>
        Name: Australian Terrier <br />
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

  const bedlingtonTerrier = () => {
    setInfo(
      <p>
        Name: Bedlington Terrier <br />
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

  const borderTerrier = () => {
    setInfo(
      <p>
        Name: Border Terrier <br />
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

  const cairnTerrier = () => {
    setInfo(
      <p>
        Name: Cairn Terrier <br />
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

  const dandieTerrier = () => {
    setInfo(
      <p>
        Name: Dandie Terrier <br />
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

  const foxTerrier = () => {
    setInfo(
      <p>
        Name: Fox Terrier <br />
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

  const irishTerrier = () => {
    setInfo(
      <p>
        Name: Irish Terrier <br />
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

  const kerryblueTerrier = () => {
    setInfo(
      <p>
        Name: Kerryblue Terrier <br />
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

  const lakelandTerrier = () => {
    setInfo(
      <p>
        Name: Lakeland Terrier <br />
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

  const norfolkTerrier = () => {
    setInfo(
      <p>
        Name: Norfolk Terrier
        <br />
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

  const norwichTerrier = () => {
    setInfo(
      <p>
        Name: Norwich Terrier <br />
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

  const patterdaleTerrier = () => {
    setInfo(
      <p>
        Name: Patterdale Terrier
        <br />
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

  const russellTerrier = () => {
    setInfo(
      <p>
        Name: Russell Terrier <br />
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

  const scottishTerrier = () => {
    setInfo(
      <p>
        Name: Scottish Terrier <br />
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

  const sealyhamTerrier = () => {
    setInfo(
      <p>
        Name: Sealyham Terrier <br />
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

  const silkyTerrier = () => {
    setInfo(
      <p>
        Name: Silky Terrier <br />
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

  const tibetanTerrier = () => {
    setInfo(
      <p>
        Name: Tibetan Terrier <br />
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

  const toyTerrier = () => {
    setInfo(
      <p>
        Name: Toy Terrier <br />
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

  const welshTerrier = () => {
    setInfo(
      <p>
        Name: Welsh Terrier <br />
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

  const westhighlandTerrier = () => {
    setInfo(
      <p>
        Name: Westhighland Terrier <br />
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

  const wheatenTerrier = () => {
    setInfo(
      <p>
        Name: Wheaten Terrier <br />
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

  const yorkshireTerrier = () => {
    setInfo(
      <p>
        Name: Yorkshire Terrier <br />
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

  const tervuren = () => {
    setInfo(
      <p>
        Name: Tervuren <br />
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

  const vizsla = () => {
    setInfo(
      <p>
        Name: Vizsla <br />
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

  const spanishWaterdog = () => {
    setInfo(
      <p>
        Name: Spanish Waterdog <br />
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

  const weimaraner = () => {
    setInfo(
      <p>
        Name: Weimaraner <br />
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

  const whippet = () => {
    setInfo(
      <p>
        Name: Whippet <br />
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

  const irishWolfhound = () => {
    setInfo(
      <p>
        Name: Irish Wolfhound
        <br />
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
    } else if (input === "affenpinscher") {
      affenpinscher();
    } else if (input === "african") {
      african();
    } else if (input === "airedale") {
      airedale();
    } else if (input === "akita") {
      akita();
    } else if (input === "appenzeller") {
      appenzeller();
    } else if (input === "australian/shepherd") {
      shepherdAustralian();
    } else if (input === "basenji") {
      basenji();
    } else if (input === "beagle") {
      beagle();
    } else if (input === "bluetick") {
      bluetick();
    } else if (input === "borzoi") {
      borzoi();
    } else if (input === "bouvier") {
      bouvier();
    } else if (input === "boxer") {
      boxer();
    } else if (input === "brabancon") {
      brabancon();
    } else if (input === "briard") {
      briard();
    } else if (input === "buhund/norwegian") {
      norwegianBuhund();
    } else if (input === "bulldog/boston") {
      bostonBulldog();
    } else if (input === "bulldog/french") {
      frenchBulldog();
    } else if (input === "bullterrier/staffordshire") {
      staffordshireBullterrier();
    } else if (input === "cattledog/australian") {
      australianCattledog();
    } else if (input === "chihuahua") {
      chihuahua();
    } else if (input === "chow") {
      chow();
    } else if (input === "clumber") {
      clumber();
    } else if (input === "cockapoo") {
      cockapoo();
    } else if (input === "collie/border") {
      borderCollie();
    } else if (input === "coonhound") {
      coonhound();
    } else if (input === "corgi/cardigan") {
      cardiganCorgi();
    } else if (input === "cotondetulear") {
      cotondetulear();
    } else if (input === "dachshund") {
      dachshund();
    } else if (input === "dalmatian") {
      dalmatian();
    } else if (input === "dane/great") {
      greatDane();
    } else if (input === "deerhound/scottish") {
      scottishDeerhound();
    } else if (input === "dhole") {
      dhole();
    } else if (input === "dingo") {
      dingo();
    } else if (input === "doberman") {
      doberman();
    } else if (input === "elkhound/norwegian") {
      norwegianElkhound();
    } else if (input === "entlebucher") {
      entlebucher();
    } else if (input === "eskimo") {
      eskimo();
    } else if (input === "finnish/lapphund") {
      lapphundFinnish();
    } else if (input === "frise/bichon") {
      bichonFrise();
    } else if (input === "germanshepherd") {
      germanShepherd();
    } else if (input === "greyhound/italian") {
      italianGreyhound();
    } else if (input === "groenendael") {
      groenendael();
    } else if (input === "havanese") {
      havanese();
    } else if (input === "hound/afghan") {
      afghanHound();
    } else if (input === "hound/basset") {
      bassetHound();
    } else if (input === "hound/blood") {
      bloodHound();
    } else if (input === "hound/english") {
      englishHound();
    } else if (input === "hound/ibizan") {
      ibizanHound();
    } else if (input === "hound/plott") {
      plottHound();
    } else if (input === "hound/walker") {
      walkerHound();
    } else if (input === "husky") {
      husky();
    } else if (input === "keeshond") {
      keeshond();
    } else if (input === "kelpie") {
      kelpie();
    } else if (input === "komondor") {
      komondor();
    } else if (input === "kuvasz") {
      kuvasz();
    } else if (input === "Labradoodle") {
      labradoodle();
    } else if (input === "labrador") {
      labrador();
    } else if (input === "leonberg") {
      leonberg();
    } else if (input === "lhasa") {
      lhasa();
    } else if (input === "malamute") {
      malamute();
    } else if (input === "malinois") {
      malinois();
    } else if (input === "maltese") {
      maltese();
    } else if (input === "mastiff/bull") {
      bullMastiff();
    } else if (input === "mastiff/english") {
      englishMastiff();
    } else if (input === "mastiff/tibetan") {
      tibetanMastiff();
    } else if (input === "mexicanhairless") {
      mexicanhairless();
    } else if (input === "mix") {
      mix();
    } else if (input === "mountain/bernese") {
      berneseMountain();
    } else if (input === "mountain/swiss") {
      swissMountain();
    } else if (input === "newfoundland") {
      newfoundland();
    } else if (input === "otterhound") {
      otterhound();
    } else if (input === "ovcharka/caucasian") {
      caucasianOvcharka();
    } else if (input === "papillon") {
      papillon();
    } else if (input === "pekinese") {
      pekinese();
    } else if (input === "pembroke") {
      pembroke();
    } else if (input === "pinscher/miniature") {
      miniaturePinscher();
    } else if (input === "pitbull") {
      pitbull();
    } else if (input === "pointer/german") {
      germanPointer();
    } else if (input === "pointer/germanlonghair") {
      germanlonghairPointer();
    } else if (input === "pomeranian") {
      pomeranian();
    } else if (input === "poodle/miniature") {
      miniaturePoodle();
    } else if (input === "poodle/standard") {
      standardPoodle();
    } else if (input === "poodle/toy") {
      toyPoodle();
    } else if (input === "pug") {
      pug();
    } else if (input === "puggle") {
      puggle();
    } else if (input === "pyrenees") {
      pyrenees();
    } else if (input === "redbone") {
      redbone();
    } else if (input === "retriever/chesapeake") {
      chesapeakeRetriever();
    } else if (input === "retriever/curly") {
      curlyRetriever();
    } else if (input === "retriever/flatcoated") {
      flatcoatedRetriever();
    } else if (input === "retriever/golden") {
      goldenRetriever();
    } else if (input === "ridgeback/rhodesian") {
      rhodesianRidgeback();
    } else if (input === "rottweiler") {
      rottweiler();
    } else if (input === "saluki") {
      saluki();
    } else if (input === "samoyed") {
      samoyed();
    } else if (input === "schipperke") {
      schipperke();
    } else if (input === "schnauzer/giant") {
      giantSchnauzer();
    } else if (input === "schnauzer/miniature") {
      miniatureSchnauzer();
    } else if (input === "setter/english") {
      englishSetter();
    } else if (input === "setter/gordon") {
      gordonSetter();
    } else if (input === "setter/irish") {
      irishSetter();
    } else if (input === "sheepdog/english") {
      englishSheepdog();
    } else if (input === "sheepdog/shetland") {
      shetlandSheepdog();
    } else if (input === "shihtzu") {
      shihtzu();
    } else if (input === "spaniel/blenheim") {
      blenheimSpaniel();
    } else if (input === "spaniel/brittany") {
      brittanySpaniel();
    } else if (input === "spaniel/cocker") {
      cockerSpaniel();
    } else if (input === "spaniel/irish") {
      irishSpaniel();
    } else if (input === "spaniel/japanese") {
      japaneseSpaniel();
    } else if (input === "spaniel/sussex") {
      sussexSpaniel();
    } else if (input === "spaniel/welsh") {
      welshSpaniel();
    } else if (input === "springer/english") {
      englishSpringer();
    } else if (input === "stbernard") {
      stbernard();
    } else if (input === "terrier/american") {
      americanTerrier();
    } else if (input === "terrier/australian") {
      australianTerrier();
    } else if (input === "terrier/bedlington") {
      bedlingtonTerrier();
    } else if (input === "terrier/border") {
      borderTerrier();
    } else if (input === "terrier/cairn") {
      cairnTerrier();
    } else if (input === "terrier/dandie") {
      dandieTerrier();
    } else if (input === "terrier/fox") {
      foxTerrier();
    } else if (input === "terrier/irish") {
      irishTerrier();
    } else if (input === "terrier/kerryblue") {
      kerryblueTerrier();
    } else if (input === "terrier/lakeland") {
      lakelandTerrier();
    } else if (input === "terrier/norfolk") {
      norfolkTerrier();
    } else if (input === "terrier/norwich") {
      norwichTerrier();
    } else if (input === "terrier/patterdale") {
      patterdaleTerrier();
    } else if (input === "terrier/russell") {
      russellTerrier();
    } else if (input === "terrier/scottish") {
      scottishTerrier();
    } else if (input === "terrier/sealyham") {
      sealyhamTerrier();
    } else if (input === "terrier/silky") {
      silkyTerrier();
    } else if (input === "terrier/tibetan") {
      tibetanTerrier();
    } else if (input === "terrier/toy") {
      toyTerrier();
    } else if (input === "terrier/welsh") {
      welshTerrier();
    } else if (input === "terrier/westhighland") {
      westhighlandTerrier();
    } else if (input === "terrier/wheaten") {
      wheatenTerrier();
    } else if (input === "terrier/yorkshire") {
      yorkshireTerrier();
    } else if (input === "tervuren") {
      tervuren();
    } else if (input === "vizsla") {
      vizsla();
    } else if (input === "waterdog/spanish") {
      spanishWaterdog();
    } else if (input === "weimaraner") {
      weimaraner();
    } else if (input === "whippet") {
      whippet();
    } else if (input === "wolfhound/irish") {
      irishWolfhound();
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
