type TravelsData = {
  travel: Travel[];
};

interface Travel {
  id: number;
  title: string;
  expenses: Expense[];
  RoadMap: RoadMap[];
  checklist: Checklist;
  color: string;
}

interface Checklist {
  general: string[];
}

interface RoadMap {
  pointTitle: string;
  category: string;
  spentValue: number;
  numberOfDays: number;
}

interface Expense {
  spentTitle: string;
  category: string;
  spentValue: number;
  NumberOfDays: number;
}

export default async function fetchTravel() {
  try {
    const resp = await fetch(
      "https://leonardocaml.github.io/travelingbay_api/travels.json"
    );

    const obj: TravelsData = await resp.json();
    console.log(obj.travel);
    return obj.travel;
  } catch (error) {
    console.log(error);
    return [];
  }
}
