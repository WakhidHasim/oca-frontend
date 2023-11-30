import ItemList from "./item-list";

export default function Lists({ data }: any) {

  return (
    <div className="w-3/4 mx-auto">
      {
        data.map((d: any, i: number) => (
          <ItemList data={d} key={`item-${i}`} />
        ))
      }
    </div>
  );
}