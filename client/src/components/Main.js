const testData = [
  {"_id":"62b248c3e18f98e690d0ee7c","id":"33333CC-1","material_id":"T33333AN","material_name":"Test Batch Three","location":"FL-03","client":"CL-3","quantity_total":"300g","date_recieve":"03JAN10","date_expire":"03JAN11","status":"Pending Testing","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7d","id":"44444DD-1","material_id":"T44444AN","material_name":"Test Batch Four","location":"FL-04","client":"CL-4","quantity_total":"400g","date_recieve":"04JAN10","date_expire":"04JAN11","status":"Pending Review","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7e","id":"55555EE-1","material_id":"T55555AN","material_name":"Test Batch Five","location":"FL-05","client":"CL-5","quantity_total":"500g","date_recieve":"05JAN10","date_expire":"05JAN11","status":"Pending Release","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7f","id":"66666FF-1","material_id":"T66666AN","material_name":"Test Batch Six","location":"FL-06","client":"CL-6","quantity_total":"600g","date_recieve":"06JAN10","date_expire":"06JAN11","status":"Released","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7a","id":"11111AA-1","material_id":"T11111AN","material_name":"Test Batch One","location":"FL-01","client":"CL-1","quantity_total":"100g","date_recieve":"01JAN10","date_expire":"01JAN11","status":"Pending Inspection","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7b","id":"22222BB-1","material_id":"T22222AN","material_name":"Test Batch Two","location":"FL-02","client":"CL-2","quantity_total":"200g","date_recieve":"02JAN10","date_expire":"02JAN11","status":"Pending Sampling","__v":0}
];


function InventoryTable(props) {
  const tableHeadings = props.headContent.map((content) => 
    <th key={content}>{content}</th>
  );
  
  const tableDataRows = props.bodyContent.map((content) => 
    <tr key={content}>
      {content.map(content => <td>{content}</td>)}
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>{tableHeadings}</tr>
      </thead>
      <tbody>
        {tableDataRows}
      </tbody>
    </table>
);

}


export default function Main() {
  const dataDeepCopy = JSON.parse(JSON.stringify(testData));
  const headContent = Object.keys(dataDeepCopy[0]);
  const bodyContent = dataDeepCopy.map(data => Object.values(data))
  console.log(Object.entries)
  
  return (
    <main className="bg-green-500">
      <InventoryTable headContent={headContent} bodyContent={bodyContent}/>
    </main>
  );
}