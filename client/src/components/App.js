import Header from './Header/index.js';
import Main from './Main/index.js';
import Footer from './Footer/index.js';

const batchList = [
  {"_id":"62b248c3e18f98e690d0ee7c","id":"33333CC-1","material_id":"T33333AN","material_name":"Test Batch Three","location":"FL-03","client":"CL-3","quantity_total":"300g","date_recieve":"03JAN10","date_expire":"03JAN11","status":"Pending Testing","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7d","id":"44444DD-1","material_id":"T44444AN","material_name":"Test Batch Four","location":"FL-04","client":"CL-4","quantity_total":"400g","date_recieve":"04JAN10","date_expire":"04JAN11","status":"Pending Review","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7e","id":"55555EE-1","material_id":"T55555AN","material_name":"Test Batch Five","location":"FL-05","client":"CL-5","quantity_total":"500g","date_recieve":"05JAN10","date_expire":"05JAN11","status":"Pending Release","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7f","id":"66666FF-1","material_id":"T66666AN","material_name":"Test Batch Six","location":"FL-06","client":"CL-6","quantity_total":"600g","date_recieve":"06JAN10","date_expire":"06JAN11","status":"Released","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7a","id":"11111AA-1","material_id":"T11111AN","material_name":"Test Batch One","location":"FL-01","client":"CL-1","quantity_total":"100g","date_recieve":"01JAN10","date_expire":"01JAN11","status":"Pending Inspection","__v":0},
  {"_id":"62b248c3e18f98e690d0ee7b","id":"22222BB-1","material_id":"T22222AN","material_name":"Test Batch Two","location":"FL-02","client":"CL-2","quantity_total":"200g","date_recieve":"02JAN10","date_expire":"02JAN11","status":"Pending Sampling","__v":0}
];

function App() {

  return (
    <div className="relative flex flex-col 
    min-h-screen w-screen justify-start items-stretch">
      <Header />
      <Main batches={batchList}/>
      <Footer />
    </div>
  );
}

export default App;
